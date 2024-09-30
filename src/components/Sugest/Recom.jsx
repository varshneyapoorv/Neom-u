import React from "react";

import Rcard from "./Rcard.jsx";
import Button from "../Button.jsx";

function Recom() {
  return (
    <>
      <div className="w-1000px">
        <h1 className="text-3xl text-gray-900 font-sans mt-[60px]">
          Charlie, hope we understand you better
        </h1>

        <div className="flex w-full gap-[30px] w-1000px">
          <Rcard url={"/images/disappointed.svg"} />
          <Rcard url={"/images/overwhelmed.svg"} />
        </div>

        <Button />
      </div>
    </>
  );
}

export default Recom;
