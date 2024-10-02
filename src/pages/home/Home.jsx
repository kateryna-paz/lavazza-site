import styles from "./Home.module.css";
import Button from "../../components/UI/button/Button";
import { useNavigate } from "react-router-dom";
import CategoryCarousel from "../../components/home/categoryCarousel/CategoryCarousel";

function Home() {
  const navigate = useNavigate();

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
        <CategoryCarousel />
      </section>
    </div>
  );
}

export default Home;
