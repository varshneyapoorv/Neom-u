import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";

function MyCard({ url }) {
  return (
    <>
      <div className="flex flex-col w-[17rem] h-[24rem] relative mt-[30px]">
        <div className="overflow-hidden inline-block">
          <img
            src={url}
            alt="PHOTO"
            className=" w-full h-[20rem] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:filter hover:grayscale hover:brightness-90"
          />
        </div>

        <div className="mt-[10px]">
          <h3 className="font-sans font- tracking-[0.7px]  text-[18px]">
            Surfing at leasure
          </h3>
          <h4 className="text-[12px]">
            3 guest attented this event<br></br> on Nov 17, 2022
          </h4>

          <div className="flex gap-4">
            <h4 className="text-[12px]">You rated this event</h4>
            <div className="flex">
              <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
              <IoStarSharp />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCard;
