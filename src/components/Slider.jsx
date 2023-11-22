import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.styles.scss";

import { Navigation } from "swiper/modules";

const Slider = ({ images }) => {
  // Check if images is not an array
  if (!Array.isArray(images)) {
    return <div>No images to display</div>;
  }
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} className="slider-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
