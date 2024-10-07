import Slider from "react-slick";
import CategoryCard from "../../UI/categoryCard/CategoryCard";
import PropTypes from "prop-types";

CategoryCarousel.propTypes = {
  categories: PropTypes.array.isRequired,
};

function CategoryCarousel({ categories }) {
  const settings = {
    pauseOnHover: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full my-4 mx-auto px-1">
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
