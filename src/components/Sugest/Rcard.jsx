import React from "react";

function Rcard({ key1, key2 }) {
  return (
    <div className="flex flex-col w-[38rem] h-[29rem] mt-[20px] relative mb-[20px] shrink-0 ">
      <div className="w-full h-[20rem] overflow-hidden">
        <img
          src={key1}
          alt="PHOTO HERE"
          className="w-full h-[20rem] object-cover object-center rounded-lg transform transition-transform duration-[4s]  hover:scale-110"
        />
      </div>

      <div className="absolute top-[15px] left-[15px]">
        <img src={key2} alt="SMILEY HERE  " className="w-[45px] " />
      </div>
      <div className="mt-[10px]">
        <h3 className="font-lora text-[22px] opacity-[0.9] ">
          Indulge in the Finest Epicurean Cuisines
        </h3>

        <h5 className="font-lora text-[14px] ">on Nov 17, 2022</h5>

        <p className="mt-[15px] mb-[20px]font-sans font-weight-[100] text-[13px] leading-[16px] tracking-[0.3px] opacity-[0.99]">
          Hi Charlie, we came to from our chef John that you didn't enjoyed the
          Epicurean cuisines yesterday. As a compensation we would like to offer
          you a free Italian cuisines as a goodwill gesture. Would you like to
          accept our request?
        </p>

        <div className="flex gap-[15px] mt-[20px]">
          <button className="text-white bg-[#000000dc] px-[23px] py-[10px] rounded-[7px] font-medium tracking-[0.5px] hover:bg-[#e92f4e]">
            Yes ,I accept
          </button>
          <button className="text-black px-[23px] py-[10px] rounded-[7px] underline from-neutral-100 tracking-[1px] hover:text-[#e92f4e]">
            No,thanks
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rcard;
