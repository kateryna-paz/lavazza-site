import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./BackArrowButton.module.css";
import PropTypes from "prop-types";

BackArrowButton.propTypes = {
  className: PropTypes.string,
};

function BackArrowButton({ className }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu`);
  };
  return (
    <button className={`${styles.button} ${className}`} onClick={handleClick}>
      <IoArrowBackCircleOutline size={60} />
    </button>
  );
}

export default BackArrowButton;
