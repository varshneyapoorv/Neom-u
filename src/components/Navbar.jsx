import React from "react";
import { TbWorld } from "react-icons/tb";
// import { IoNotifications } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import HamburgerMenu from "./HamburgerMenu";
import Language from "./Language";

const Navbar = () => {
  const toggleMenu = () => {
    // Handle menu toggle functionality here
  };

  return (
    <header className="relative w-full bg-[#faf8f4] shadow-sm flex items-center z-[101] left-0 top-0 h-[56px] md:h-[100px]">
      <div className="flex items-center justify-between w-full max-w-[90%] md:max-w-[85%] mx-auto relative">
        {/* Branding and Logo */}
        <div className="flex items-center">
          <img src="/images/logo-black.svg" alt="Logo" className="md:w-20 w-16" />
        </div>
        
        {/* Navbar */}
        <nav className="flex items-center gap-4">
          {/* Navigation Links */}
          <ul className="flex gap-7 font-mullish text-lg">
            <li className="text-primary hover:text-red-400 hover:underline cursor-pointer">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="hover:text-red-400 hover:underline cursor-pointer">
              <Link to="/fav">My Favorites</Link>
            </li>
            <li className="hover:text-red-400 hover:underline cursor-pointer">
              <Link to="/upcoming-events">Upcoming Events</Link>
            </li>
          </ul>
    
          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button className="relative p-2">
              <Notification/>
              {/* <span className="absolute top-1 right-1 bg-red-500 rounded-full h-2 w-2"></span> */}
            </button>
    
            {/* Menu and Profile Icons */}
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-gray-100 rounded-full" onClick={toggleMenu}>
                <HamburgerMenu />
                {/* <RxHamburgerMenu size={20} className="text-black font-bold" /> */}
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white text-base font-semibold">
                S
              </button>
            </div>
    
            {/* Language Icon */}
            <button className="p-2">
              <Language/>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
