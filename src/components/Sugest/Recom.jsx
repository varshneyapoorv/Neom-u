import React from "react";

import Rcard from "./Rcard.jsx";

import Slider from "../Slider.jsx";

function Recom() {
  const details = [
    {
      path: "/images/Event-Banner.png",

      mood: "/images/disappointed.svg",
    },
    {
      path: "/images/holiday_0.png",
      mood: "/images/overwhelmed.svg",
    },
    {
      path: "/images/cusine_0.png",
      mood: "/images/overwhelmed.svg",
    },
    {
      path: "/images/rolce.png",

      mood: "/images/overwhelmed.svg",
    },
    {
      path: "/images/holiday_0.png",
      mood: "/images/overwhelmed.svg",
    },
  ];

  return (
    <>
      <div className="w-1000px">
        <h1 className="text-3xl text-gray-900 font-sans mt-[60px]">
          Charlie, hope we understand you better
        </h1>

        <Slider
          items={details}
          visibleItemsCount={3}
          CardComponent={Rcard}
          key1={"path"}
          key2={"mood"}
        />
      </div>
    </>
  );
}

export default Recom;
