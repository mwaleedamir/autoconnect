import React from "react";
import Carousel from "../utils/Carousel";
import { carouselItems } from "../consts/CarsLogos";

const CarsLogoCards = () => {
  return (
    <div className="">
      <div className="w-[80%] justify-self-center">
        <div className="flex flex-col justify-center items-center pt-6">
          <h1 className="text-2xl font-bold">Car brands</h1>
          <p className="text-xl ">Buy your favourite one</p>
        </div>
        <div className="pb-8">
          <Carousel
            dots={true}
            carouselItems={carouselItems}
            slidesToShow={5}
            infinite={true}
            autoplay={true}
            autoplaySpeed={3000}
            speed={5000}
            slidesToScroll={1}
            slidesToShow1024={3}
            slidesToShow600={1}
            slidesToScroll1024={1}
            slidesToScroll600={1}
            arrows={false}
            classNameOuterDiv=""
            classNameTopMostDiv=""
            classNameImages="w-full h-48 object-cover p-2 "
            classNameLogos="w-10 h-10 bg-gray-200 rounded-sm shadow-white shadow-md z-10 absolute top-6 left-[40%] max-sm:left-[43%]"
            classNameTopDiv="relative  rounded-lg overflow-hidden shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CarsLogoCards;
