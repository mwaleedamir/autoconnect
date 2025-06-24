import React from "react";
import Carousel from "../utils/Carousel";
import { carouselItems } from "../consts/carsLogos";

const CarsLogoCards = () => {
  return (
    <div className="bg-white pb-6">
      <div className="w-[80%] text-[#6b451a]  justify-self-center font- "> 
        <div className="flex flex-col gap-3 justify-center items-center py-10">
          <h1 className="text-3xl font-bold">Car brands</h1>
          <p className="text-xl ">Buy your favourite one</p>
        </div>
        <div className="pb-8">
          <Carousel
            dots={false}
            carouselItems={carouselItems}
            slidesToShow={5}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            speed={5000}
            slidesToScroll={1}
            slidesToShow1024={3}
            slidesToShow600={1}
            slidesToScroll1024={1}
            slidesToScroll600={1}
            arrows={false}
            classNameSlider="bg-white"
            classNameOuterDiv=""
            classNameTopMostDiv="relative w-full h-64 bg-white"
            classNameImages="w-[96%] rounded-md h-64 object-cover flex gap-3 bg-white"
            classNameLogos="w-13 h-13 rounded-full bg-white  shadow-md z-10 absolute top-6 left-[36%] max-sm:left-[38%]"
            classNameTopDiv="relative bg-white overflow-hidden shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CarsLogoCards;
