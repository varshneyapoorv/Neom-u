import  { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="p-2 bg-gray-100 rounded-full text-black font-bold" 
      >
        <RxHamburgerMenu size={20} className="text-black font-bold" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-10 w-[150px] bg-white shadow-lg rounded-lg"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2">
            <li className="px-4 py-2 hover:text-red-500 cursor-pointer">
              Edit profiles
            </li>
            <li className="px-4 py-2 hover:text-red-500 cursor-pointer">
              Feedback
            </li>
            <li className="px-4 py-2 hover:text-red-500 cursor-pointer">
              Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
