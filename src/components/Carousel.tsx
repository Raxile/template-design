"use client";
import React, { LegacyRef, RefObject, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function SimpleSlider() {
  var settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    // centerPadding: "60px",
    initialSlide: 0,
    cssEase: "linear",
  };
  // const sliderRef = useRef();
  // console.log(sliderRef);
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slides">
          <h3>1</h3>
        </div>
        <div className="slides">
          <h3>2</h3>
        </div>
        <div className="slides">
          <h3>3</h3>
        </div>
        <div className="slides">
          <h3>4</h3>
        </div>
        <div className="slides">
          <h3>5</h3>
        </div>
        <div className="slides">
          <h3>6</h3>
        </div>
        <div className="slides">
          <h3>7</h3>
        </div>
        <div className="slides">
          <h3>8</h3>
        </div>
        <div className="slides">
          <h3>9</h3>
        </div>
        <div className="slides">
          <h3>10</h3>
        </div>
        <div className="slides">
          <h3>11</h3>
        </div>
      </Slider>
    </div>
  );
}
