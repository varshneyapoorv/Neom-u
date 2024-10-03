import React from "react";
import Card from "./Card"; // Your Card component
import SwiperComponent from "./SwiperComponent"; // Use the Swiper component instead of Slider

function Cart() {
  // List of card names (your data)
  const cards = [
    { name: "Round Of Golf", path: "/images/spa_0.png" },
    { name: "Surfing at Leisure", path: "/images/holiday_0.png" },
    {
      name: "Dive into exciting Island Holiday Exp...",
      path: "/images/cusine_0.png",
    },
    { name: "Mountain Hiking", path: "/images/spa_0.png" },
    { name: "City Tour", path: "/images/holiday_0.png" },
  ];

  return (
    <section className="your-itineraries flex flex-col pl-18 gap-6 mt-10">
      <h1 className="text-4xl text-gray-800 font-sans">
        Good morning Charlie!
      </h1>
      <p className="text-base font-serif text-[#000000c5]">
        Below listed are your itineraries, have a look at the timings and the
        location. <br /> We wish you to enjoy the activities and the weather!
      </p>

      {/* Use Swiper Component */}
      <SwiperComponent
        items={cards}
        visibleItemsCount={2} // Make sure this aligns with your design
        CardComponent={Card}
        key1={"name"}
        key2={"path"}
      />
    </section>
  );
}

export default Cart;
