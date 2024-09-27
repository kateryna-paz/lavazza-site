import styles from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function Button({ className, children }) {
  return (
    <button className={className || styles.defaultButton}>{children}</button>
  );
}

export default Button;
