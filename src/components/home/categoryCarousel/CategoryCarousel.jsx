import Slider from "react-slick";
import CategoryCard from "../../UI/categoryCard/CategoryCard";
import imgTea from "/images/products/tea.png";
import imgCoffee from "/images/products/coffee1.png";
import imgCoctail from "/images/products/mojito.png";
import imgCake from "/images/products/cake-in-cup.png";
import imgHotdog from "/images/products/hotdog.png";
import imgMilkshake from "/images/products/milkshake.png";
import imgPackedCoffee from "/images/products/packed-coffee.png";
import imgPanini from "/images/products/panini.png";
import imgSmoothie from "/images/products/smoothie.png";
import imgSyrup from "/images/products/syrup.png";
import imgIceCoffee from "/images/products/iceLatte.png";

function CategoryCarousel() {
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
        <CategoryCard
          image={imgCoffee}
          name="Coffee"
          subtitle="Freshly brewed coffee"
          category="coffee"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgTea}
          name="Tea"
          subtitle="Refreshing tea"
          category="tea"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgCoctail}
          name="Cocktails"
          subtitle="Freshly mixed cocktails"
          category="cocktails"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgIceCoffee}
          name="Ice Coffee"
          subtitle="Freshly brewed ice coffee"
          category="iseCoffee"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgMilkshake}
          name="Milkshake"
          subtitle="Creamy milkshake"
          category="milkshake"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgSmoothie}
          name="Smoothie"
          subtitle="Freshly blended smoothie"
          category="smoothie"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgCake}
          name="Cake in a Cup"
          subtitle="Moist cake in a cup"
          category="cake-in-cup"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgHotdog}
          name="Hotdog"
          subtitle="Savory hotdog"
          category="hotdog"
          margin={"40px 0"}
        />

        <CategoryCard
          image={imgPackedCoffee}
          name="Packed Coffee"
          subtitle="Packaged coffee"
          category="packed-coffee"
          margin={"40px 0"}
        />
        <CategoryCard
          image={imgPanini}
          name="Panini"
          subtitle="Freshly made panini"
          category="panini"
          margin={"40px 0"}
        />

        <CategoryCard
          image={imgSyrup}
          name="Syrup"
          subtitle="Sweet syrup"
          category="syrup"
          margin={"40px 0"}
        />
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
