import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navList}>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.baseLink
        }
      >
        Menu
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.baseLink
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.baseLink
        }
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navbar;
