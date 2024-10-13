import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

CategoryProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};

function CategoryProductsList({ products }) {
  return (
    <>
      <div className="p-[20px_200px] flex flex-row flex-wrap justify-around gap-4">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} margin={"40px 0"} />
          );
        })}
      </div>
    </>
  );
}

export default CategoryProductsList;
