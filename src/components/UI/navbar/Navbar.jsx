import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  console.log(styles);
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.baseLink
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.baseLink
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.baseLink
            }
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
