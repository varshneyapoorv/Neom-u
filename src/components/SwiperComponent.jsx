// SwiperComponent.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SwiperComponent = ({
  items,
  CardComponent,
  key1,
  key2,
  visibleItemsCount,
}) => {
  const swiperRef = useRef(null); // Create a reference to access the Swiper instance

  // Function to handle the next slide action
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Move to the next slide
    }
  };

  // Function to handle the previous slide action
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Move to the previous slide
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef} // Assign the ref to the Swiper
        spaceBetween={10} // Space between slides
        slidesPerView={visibleItemsCount} // Number of slides visible
        navigation={false} // Disable default navigation to use custom buttons
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="w-1">
            <CardComponent key1={item[key1]} key2={item[key2]} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex gap-[10px] mt-4 justify-center">
        <button
          className="border-black border-[1px] rounded-[100%] w-[45px] h-[45px] opacity-[0.5] px-[13px] flex items-center justify-center"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="border-black border-[1px] rounded-[100%] w-[45px] h-[45px] opacity-[0.5] px-[13px] flex items-center justify-center"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
