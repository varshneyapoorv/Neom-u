import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Slider({ items, visibleItemsCount = 3, CardComponent, key1, key2 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - visibleItemsCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-3 transition-transform duration-300"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleItemsCount)
            }%)`,
            width: `${items.length * (100 / visibleItemsCount)}%`, // Set width based on number of items
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="card-component">
              <CardComponent key1={item[key1]} key2={item[key2]} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-[10px] mt-4">
        <button
          className="border-black border-[1px] rounded-[100%] w-[45px] h-[45px] opacity-[0.5] px-[13px]"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="border-black border-[1px] rounded-[100%] w-[45px] h-[45px] opacity-[0.5] px-[13px]"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;
