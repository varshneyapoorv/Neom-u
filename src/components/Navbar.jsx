import React from "react";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  const toggleMenu = () => {
    // Handle menu toggle functionality here
  };

  return (
    <section className="flex gap-[45rem] h-[14vh]  bg-[rgb(252,250,248)] sticky ml-[-70px] ">
      {/* Logo Container */}
      <div className="w-[15vw] h-full bg-cover bg-center ml-[70px]  ">
        <img src="/images/logo-black.svg" alt="phot" />
      </div>

      {/* Navigation Items */}
      <div className="flex items-center  w-full max-w-[80vw]">
        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-[12px] font-medium text-gray-800 font-[Kanit]">
          <li>Dashboard</li>
          <li>My Favorites</li>
          <li>Upcoming Events</li>
        </ul>

        {/* Icons and Logo Container */}
        <div className="flex items-center gap-[20px] ml-8">
          {/* Notification Bell Icon */}
          <img
            src="/images/active.png"
            alt="notification"
            className="w-8 h-8 p-2"
          />

          {/* Navigation Logo and Menu Icon */}
          <div className="flex items-center bg-white p-[2px]  rounded-full shadow-md gap-[2px]">
            {/* Hamburger Menu Icon */}
            <div
              className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
              onClick={toggleMenu}
            >
              <span className="block w-4 h-[2px] bg-black mb-1"></span>
              <span className="block w-4 h-[2px] bg-black mb-1"></span>
              <span className="block w-4 h-[2px] bg-black"></span>
            </div>

            {/* Profile Button */}
            <button className="w-7 h-7  flex items-center justify-center bg-[#947e25] text-black rounded-full">
              C
            </button>
          </div>
          {/* World Logo Icon */}
          <TbWorld />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
