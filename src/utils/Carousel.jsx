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
  classNameLogos,
  classNameTopDiv,
  arrows,
  classNameOuterDiv,
  classNameTopMostDiv,
  classNameSlider
}) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    arrows: arrows,
    autoplaySpeed: autoplaySpeed,
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
    <div className={classNameOuterDiv}>
      <Slider className={classNameSlider} {...settings}>
        {carouselItems.map(item =>
          <div key={uuidv4()} className={classNameTopMostDiv}>
            <div className={classNameTopDiv}>
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
                  <h3 className="text-lg font-semibold ">
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
