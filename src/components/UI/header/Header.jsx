import styles from "./Header.module.css";
import Button from "../button/Button";
import Navbar from "../navbar/Navbar";
import Logo from "../../logo/Logo";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />

      <Button>Log In</Button>
    </header>
  );
}

export default Header;
