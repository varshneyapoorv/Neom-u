import { useState } from "react";
import { IoNotifications } from "react-icons/io5";

const Notification = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <button
        className="relative p-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IoNotifications size={20} className="text-[#A9A9A9]" />
        <span className="absolute top-1 right-1 bg-red-500 rounded-full h-2 w-2"></span>
      </button>

      {isHovered && (
        <div
          className="absolute top-10 right-0 w-[300px] p-4 bg-gray-800 text-white rounded-lg shadow-lg z-50"
          onMouseEnter={handleMouseEnter} // To keep popup open when hovering over the popup
          onMouseLeave={handleMouseLeave} // Closes when mouse leaves the popup
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-yellow-300">
              Hey Charlie <span className="wave">👋</span>
            </h3>
            <button className="text-white hover:text-gray-400">&times;</button>
          </div>
          <p className="text-sm mt-2">
            We noticed that you have changed your preferences. We have added
            some new events keeping in mind your new settings.
          </p>
          <p className="text-sm mt-2">
            Please visit the home page to check the new events and activities!
          </p>
          <div className="mt-4 flex space-x-2">
            <button className="bg-white text-gray-800 px-4 py-1 rounded hover:bg-gray-100">
              I want to see
            </button>
            <button className="text-gray-300 underline hover:text-white">
              Remind me later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
