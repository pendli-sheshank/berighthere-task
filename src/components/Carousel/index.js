import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Carousel/index.css";

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-items">
          <img
            className="img-slider slider"
            alt="slide1"
            src="https://berighthere.com/static/media/carsl-5.1e268984.png"
          />
          <div className="text-card">
            <h3>Work From Hotel</h3>
          </div>
        </div>
        <div className="slide-items">
          <img
            className="img-slider slider"
            alt="slider"
            src="https://berighthere.com/static/media/carsl-6.984a4ddc.jpg"
          />
          <div className="text-card">
            <h3>Exclusive Womens Centers</h3>
          </div>
        </div>
        <div className="slide-items">
          <img
            className="img-slider slider"
            alt="slide1"
            src="https://berighthere.com/static/media/carsl-1.e02a6582.png"
          />
          <div className="text-card">
            <h3>Meeting Rooms</h3>
          </div>
        </div>
        <div className="slide-items">
          <img
            className="img-slider slider"
            alt="slide1"
            src="https://berighthere.com/static/media/carsl-7.8c739243.jpg"
          />
          <div className="text-card">
            <h3>Campus Spaces</h3>
          </div>
        </div>
        <div className="slide-items">
          <img
            className="img-slider slider"
            alt="slide1"
            src="https://berighthere.com/static/media/carsl-3.1ec27e51.png"
          />
          <div className="text-card">
            <h3>Co-Working</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlick;
