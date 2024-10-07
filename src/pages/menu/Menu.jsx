import CategoryList from "../../components/menu/categoryList/CategoryList";
import styles from "./Menu.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/features/menuSlice";

function Menu() {
  const dispatch = useDispatch();

  const { categories, isLoading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.menu}>
      <h1>Categories</h1>
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
        categories.length > 0 && <CategoryList categories={categories} />}
    </div>
  );
}

export default Menu;
