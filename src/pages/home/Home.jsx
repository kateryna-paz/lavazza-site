import styles from "./Home.module.css";
import Button from "../../components/UI/button/Button";
import { useNavigate } from "react-router-dom";
import CategoryCarousel from "../../components/home/categoryCarousel/CategoryCarousel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/features/menuSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { categories, isLoading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleClick = (path) => {
    navigate(`/${path}`);
  };
  return (
    <div>
      <section className={styles.background}>
        <div className={styles.gridContent}>
          <div className={styles.gridCol1}>
            <h1>
              Welcome to the Lavazza <span> Coffee Shop</span>
            </h1>
            <h3>The perfect place to enjoy your coffee moments.</h3>
            <Button
              onClick={() => handleClick("menu")}
              width="400px"
              fontSize="1.8rem"
              className="darkButton"
            >
              Explore Our Menu <span> ➜ </span>
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <img src="/images/background.jpg" width="700" />
          <div className={styles.contentText}>
            <h2 className={styles.h2} onClick={() => handleClick("about")}>
              Who we are?
            </h2>
            <p>
              At Lavazza Coffee Shop, we pride ourselves on delivering premium
              coffee blends and delicious treats. Whether you’re here for a
              quick pick-me-up or a relaxing afternoon, we have something for
              everyone.
            </p>
            <Button
              onClick={() => handleClick("about")}
              className="darkButton"
              width="250px"
            >
              Learn more ...
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2} onClick={() => handleClick("menu")}>
          Our Products <span> ➜ </span>
        </h2>
        {isLoading && <h3>Loading...</h3>}

        {error && (
          <h3>
            An error occurred during fetching categories, please try again.
            <br />
            {error}
          </h3>
        )}

        {!isLoading &&
          !error &&
          Array.isArray(categories) &&
          categories.length === 0 && <h3>No categories available.</h3>}

        {!isLoading &&
          !error &&
          Array.isArray(categories) &&
          categories.length > 0 && <CategoryCarousel categories={categories} />}
      </section>
    </div>
  );
}

export default Home;
