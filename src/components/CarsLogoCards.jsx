import React from "react";
import Carousel from "../utils/Carousel";
import { carouselItems } from "../consts/CarsLogos";

const CarsLogoCards = () => {
  return (
    <div className=" bg-gray-200">
      <div className="w-[80%] justify-self-center">
        <div className="flex flex-col justify-center items-center pt-6">
          <h1 className="text-2xl font-bold">Car brands</h1>
          <p className="text-xl ">Buy your favourite one</p>
        </div>
        <div className="pb-8">
          <Carousel
            dots={true}
            carouselItems={carouselItems}
            slidesToShow={4}
            infinite={true}
            autoplay={true}
            autoplaySpeed={2000}
            speed={1000}
            slidesToScroll={1}
            slidesToShow1024={3}
            slidesToShow600={1}
            slidesToScroll1024={1}
            slidesToScroll600={1}
            classNameImages="w-full h-64 object-cover p-2 opacity-90 "
            classNameLogos="w-12 bg-white h-12 rounded-sm shadow-white shadow-md z-10 absolute top-6 left-[43%]"
          />
        </div>
      </div>
    </div>
  );
};

export default CarsLogoCards;
