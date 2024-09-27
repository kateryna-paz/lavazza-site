import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      src="/Lavazza_logo_White.png"
      alt="Lavazza Logo"
      className={styles.logo}
    />
  );
}

export default Logo;
