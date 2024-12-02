import React from "react";
import carouselImageOne from "../../assets/images/carousel/1.png";
import carouselImageTwo from "../../assets/images/carousel/2.png";
import carouselImageThree from "../../assets/images/carousel/3.png";

const images = [
  { src: carouselImageOne, alt: "Great Offer 1" },
  { src: carouselImageTwo, alt: "Great Offer 2" },
  { src: carouselImageThree, alt: "Great Offer 3" },
];

function Carousel() {
  return (
    <div
      id="carouselProductList"
      className="carousel slide"
      data-ride="carousel"
    >
      {/* Carousel Indicators */}
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-target="#carouselProductList"
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image.src}
              className="d-block w-100"
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <a
        className="carousel-control-prev"
        href="#carouselProductList"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselProductList"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;