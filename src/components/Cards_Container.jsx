import React from "react";
import Card from "./Card"; // Your Card component
import Slider from "./Slider"; // Reusable Slider component

function Cards_Container() {
  // List of card names (your data)
  const cards = [
    "Round Of Golf",
    "Surfing at Leisure",
    "Dive into exciting Island Holiday Exp...",
    "Mountain Hiking",
    "City Tour",
  ];

  return (
    <section className="your-itineraries flex flex-col pl-18 w-full gap-6 mt-10">
      <h1 className="text-4xl text-gray-800 font-sans">
        Good morning Charlie!
      </h1>
      <p className="text-base font-serif text-[#000000c5]">
        Below listed are your itineraries, have a look at the timings and the
        location. <br /> We wish you to enjoy the activities and the weather!
      </p>

      {/* Use Slider Component */}
      <Slider items={cards} visibleItemsCount={3} CardComponent={Card} />
    </section>
  );
}

export default Cards_Container;
