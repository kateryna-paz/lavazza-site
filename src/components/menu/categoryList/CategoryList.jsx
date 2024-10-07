import CategoryCard from "../../UI/categoryCard/CategoryCard";
import PropTypes from "prop-types";

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

function CategoryList({ categories }) {
  return (
    <>
      <div className="p-[20px_160px] flex flex-row flex-wrap justify-around gap-4">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.name}
              image={category.imageUrl}
              name={category.name}
              subtitle={category.subtitle}
              category={category.name}
              margin={"40px 0"}
            />
          );
        })}
      </div>
    </>
  );
}

export default CategoryList;
