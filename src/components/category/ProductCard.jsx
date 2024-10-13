import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductCard({ product }) {
  const { name, amount, variations, description, price } = product;

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h1>{name}</h1>
        {description && <h3>{description}</h3>}
      </div>

      <div className={styles.cardContent}>
        {variations ? (
          variations.map((variation) => {
            return (
              <div className={styles.cardDescription} key={variation.size}>
                <p>Size: {variation.size}</p>
                <p>Amount: {variation.amount}ml</p>
                <p>Price: {variation.price}₴</p>
              </div>
            );
          })
        ) : (
          <div className={styles.cardDescription}>
            {amount && (
              <p>
                Amount: {amount}
                {typeof amount === "string" && amount.includes("ml")
                  ? ""
                  : "ml"}
              </p>
            )}
            <p>Price: {price}₴</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
