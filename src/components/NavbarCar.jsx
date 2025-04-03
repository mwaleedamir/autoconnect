import React from "react";
import Carousel from "../utils/Carousel";

const NavbarCar = () => {
  // dots,
  // infinite,
  // speed,
  // slidesToShow,
  // slidesToScroll,
  // autoplay,
  // autoplaySpeed,
  // slidesToShow1024,
  // slidesToScroll1024,
  // slidesToShow600,
  // slidesToScroll600,
  // carouselItems,
  // classNameImages,
  // classNameLogos
  const Images = [
    { image: "/images/toyota.jpg" },
    { image: "/images/bmw.jpg" },
    { image: "/images/hyundai.jpg" },
    { image: "/images/honda.jpg" }
  ];

  return (
    <div className="w-32 h-32  rounded-full ">
      <Carousel
        carouselItems={Images}
        dots={false}
        infinite={true}
        speed={5000}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        slidesToShow1024={1}
        slidesToShow600={1}
        slidesToScroll1024={1}
        slidesToScroll600={1}
        classNameImages="flex items-center justify-center w-32 h-32  rounded-full"
        classNameTopDiv="rounded-full "
        classNameOuterDiv="rounded-full overflow-hidden"
        classNameTopMostDiv="rounded-full"
        classNameSlider="rounded-full"
      />
    </div>
  );
};

export default NavbarCar;
