import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <NavLink to="/">
      <img
        src="/Lavazza_logo_White.png"
        alt="Lavazza Logo"
        className={styles.logo}
      />
    </NavLink>
  );
}

export default Logo;
