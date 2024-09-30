import React from "react";
import Card from "./Card";
import Button from "./Button";

function Cards_Container() {
  return (
    <>
      <section className="your-itineraries flex flex-col pl-18 w-full gap-6 mt-10 ">
        <h1 className="text-4xl text-gray-800 font-sans">
          Good morning Charlie!
        </h1>
        <p className="text-base font-serif text-[#000000c5] ">
          Below listed are your itineraries, have a look at the timings and the
          location. <br /> We wish you to enjoy the activities and the weather!
        </p>

        <div className="flex gap-3 mt-[20px]">
          <Card name={"Round Of Golf"} />
          <Card name={"Surfing at leasure"} />
          <Card name={"Dive into exciting Island Holiday Exp..."} />
          <Card name={"Round Of Golf"} />
        </div>

        <Button />
      </section>
    </>
  );
}

export default Cards_Container;
