import React from "react";

function Footer() {
  return (
    <>
      <div className=" ml-[-70px] flex gap-[45rem] h-[100px] mt-[60px] items-center bg-[#000000e7] pl-[50px] text-white">
        <h3 className="text-[14px]">
          Copyright © Neom Sindalah. All Rights Reserved.
        </h3>

        <div>
          <ul className="flex gap-[20px]  text-white text-[14px]">
            <li className="hover:underline">Terms of use</li>
            <li className="hover:underline"> privacy</li>
            <li className="hover:underline">Cookie</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
