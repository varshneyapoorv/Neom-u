import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Button({ handleNext, handlePrev }) {
  return (
    <div className="flex gap-[10px]">
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
  );
}

export default Button;
