/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LIST_BANNER = [
  "https://cinestar.com.vn/pictures/hssv-340px.jpg",
  "https://cinestar.com.vn/pictures/c'ten.jpg",
  "https://cinestar.com.vn/pictures/c'monday.jpg",
  "https://cinestar.com.vn/pictures/c'member.jpg"
];

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: string) => (
        <div
          style={{
            backgroundColor: "transparent",
            position: "absolute",
            bottom: "-35px",
          }}
        >
          <ul className="custom-dots flex justify-center items-center gap-2">{dots}</ul>
        </div>
      ),
      customPaging: () => <div className="h-3 mt-[1px] bg-gray-300 w-3 rounded-full" />,
  };

  return (
    <div className="h-[303px]">
      <Slider {...settings}>
        {LIST_BANNER.map((item, index) => (
          <img key={index} alt="img" src={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
