import React from "react";

function SmallCard({
  url,
  title = "Surfing at leasure",
  height = "26rem",
  width = "15rem",
}) {
  return (
    <>
      <div
        className="flex flex-col w-[15rem] h-[26rem] mt-[0px]  "
        style={{ width: width, height: height }}
      >
        <div className=" overflow-hidden inline-block">
          <img
            src={url}
            alt="PHOTO"
            className="h-[20rem] transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-6 hover:brightness-75 hover:contrast-more: hover:hue-rotate-[270deg]"
          />
        </div>

        <div className="flex">
          <img src="/images/overwhelmed.svg" alt="" className="w-[14px]" />

          <h4 className="text-[11px] font-sans mt-[4px] mr-[70px] ml-[8px]">
            Overwhelmed
          </h4>

          <h4 className="text-[13px] font-sans mt-[2px] ml-[15px]">
            Nov 10-29
          </h4>
        </div>

        <div className="mt-[2px]">
          <h3 className="font-light ">{title}</h3>
          <h4 className="text-[13px] font-thin opacity-[0.9]">
            1100 AED/person
          </h4>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
