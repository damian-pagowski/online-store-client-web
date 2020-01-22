import React from "react";
import carouselImageOne from "../../assets/images/carousel/1.png";
import carouselImageTwo from "../../assets/images/carousel/2.png";
import carouselImageThree from "../../assets/images/carousel/3.png";

// import "./Login.css";

function Carousel() {
  return (
    <div
      id="carouselProductList"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselProductList"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselProductList" data-slide-to="1"></li>
        <li data-target="#carouselProductList" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carouselImageOne}
            className="d-block w-100"
            alt="Great Offer 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselImageTwo}
            className="d-block w-100"
            alt="Great Offer"
          />
        </div>
        <div className="carousel-item">
          <img
            src={carouselImageThree}
            className="d-block w-100"
            alt="Great Offer"
          />
        </div>
      </div>
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
