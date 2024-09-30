import React, { useState } from "react";

function Slider({ items, visibleItemsCount = 3, CardComponent }) {
  // State to track the current slider position (index)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle 'next' button click
  const handleNext = () => {
    if (currentIndex < items.length - visibleItemsCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle 'previous' button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      {/* Slider view */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-3 transition-transform duration-300"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleItemsCount)
            }%)`,
          }}
        >
          {/* Render passed CardComponent for each item */}
          {items.map((item, index) => (
            <CardComponent key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-[10px] mt-4">
        <button
          className="border-black border-[1px] rounded-[100%] w-[45px] h-[45px] opacity-[0.5] px-[13px]"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="border-black border-[1px] rounded-[100%] w-[45px] h-[45px] opacity-[0.5] px-[13px]"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
