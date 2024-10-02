import CategoryList from "../../components/menu/categoryList/CategoryList";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <h1>Categories</h1>
      <CategoryList />
    </div>
  );
}

export default Menu;
