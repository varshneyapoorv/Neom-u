import React from "react";
import { CiHeart } from "react-icons/ci";

function MyCard({ url, index }) {
  return (
    <>
      <div className="flex flex-col w-[16rem] h-[26rem] relative mt-[30px]">
        <div className="relative overflow-hidden inline-block">
          <img
            src={url}
            alt="PHOTO"
            className="h-[20rem] transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-6 hover:brightness-75 hover:contrast-more: hover:hue-rotate-[270deg]"
          />
        </div>

        <div className="flex">
          <img src="/images/overwhelmed.svg" alt="" className="w-[14px]" />

          <h4 className="text-[13px] font-sans mt-[1px] mr-[70px] ml-[5px]">
            Overwhelmed
          </h4>

          <h4 className="text-[13px] font-sans mt-[2px]">Nov 10-29</h4>
        </div>

        <div className="mt-[10px]">
          <h3 className="font-lora font-semibold">Surfing at leasure</h3>
          <h4 className="text-[13px]">1100 AED/person</h4>
        </div>
        <img
          src={index}
          alt="photo here"
          className="w-[50px] absolute right-[10px] top-[220px]  "
        />

        <button class="p-2 bg-transparent rounded-full absolute right-[10px] z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6 fill-gray-500 hover:fill-red-500 transition duration-300 ease-in-out mt-0.5"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default MyCard;
