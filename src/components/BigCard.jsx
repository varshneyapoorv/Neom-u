import React from "react";

function BigCard({ data }) {
  return (
    <>
      {/* Main content (image) */}
      <div className="w-[65rem]  h-[32rem] relative  rounded-xl overflow-hidden  mt-8 shrink-0  ">
        <div className="w-[100%] h-[100%] overflow-hidden">
          <img
            src={data.path}
            alt="PHOTO HERE"
            className="w-[100%] h-full shrink-0 object-cover object-center rounded-lg transform transition-transform duration-[4s]  hover:scale-110"
          />
        </div>

        <div className="absolute bottom-[35px] left-8 z-10 text-[#fffffff5]">
          <h2 className="text-3xl font-serif  mb-[15px]">{data.title}</h2>
          <h4 className="text-[13px] font-medium ">{data.date}</h4>
          <h4 className="text-[13px] font-medium ">{data.quantity}</h4>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent"></div>

        <div className="flex gap-1 absolute bottom-8 right-12  ">
          <img src="/images/overwhelmed.svg" alt="photo" className="w-3" />
          <h3 className="text-[13px] font-medium text-white ">Overwhelmed</h3>
        </div>
      </div>
    </>
  );
}

export default BigCard;
