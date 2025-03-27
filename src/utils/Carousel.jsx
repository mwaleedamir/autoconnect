import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

const Carousel = ({
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
  autoplay,
  autoplaySpeed,
  slidesToShow1024,
  slidesToScroll1024,
  slidesToShow600,
  slidesToScroll600,
  carouselItems,
  classNameImages,
  classNameLogos
}) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    // prevArrow: (
    //   <div className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 -ml-4 z-10 absolute top-1/2 transform -translate-y-1/2">
    //     ←
    //   </div>
    // ),
    // nextArrow: (
    //   <div className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 -mr-4 z-10 absolute top-1/2 transform -translate-y-1/2 right-0">
    //     →
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow1024,
          slidesToScroll: slidesToScroll1024
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow600,
          slidesToScroll: slidesToScroll600
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {carouselItems.map(item =>
          <div key={uuidv4()} className="p-2">
            <div className="bg-gray-100 relative rounded-lg overflow-hidden shadow-md">
              {item.logo &&
                <img
                  className={classNameLogos}
                  src={item.logo}
                  alt={item.title}
                />}
              {item.image &&
                <img
                  src={item.image}
                  alt={item.title}
                  className={classNameImages}
                />}
              {item.title &&
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>}
            </div>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Carousel;
