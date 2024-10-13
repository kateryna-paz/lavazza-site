import styles from "./CategoryCard.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  category: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

function CategoryCard({ image, name, subtitle, category, margin }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${category}`);
  };

  return (
    <div
      className={styles.card}
      style={{ margin: margin }}
      onClick={handleClick}
      tabIndex={0}
    >
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}

export default CategoryCard;
