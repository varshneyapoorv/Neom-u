import React from "react";
import { CiHeart } from "react-icons/ci";
import SmallCard from "../SmallCard";

function MyCard({ url, index }) {
  return (
    <>
      <div className="relative">
        <SmallCard url={url} />

        <img
          src={index}
          alt="photo here"
          className="w-[50px] absolute right-[14px] top-[230px]  "
        />

        <button class="p-2 bg-transparent rounded-full absolute top-[30px] right-[10px] z-10">
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
