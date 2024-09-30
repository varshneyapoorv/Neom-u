import React from "react";
import Card3 from "./Card3";

function Dcard() {
  return (
    <div>
      <h1 className="text-3xl text-gray-900 font-sans mt-[60px]">
        Charlie, here is your master journey with us so far
      </h1>

      <div className="flex gap-4">
        <Card3 url="/images/spa_0.png" />
        <Card3 url="/images/Event-Banner.png" />
        <Card3 url="/images/holiday_0.png" />
        <Card3 url="/images/spa_0.png" />
      </div>
    </div>
  );
}

export default Dcard;
