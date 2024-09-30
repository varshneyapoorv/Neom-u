import React from "react";
import Cards_Container from "../components/Cards_Container.jsx";
import Recom from "../components/Sugest/Recom.jsx";
import Rcontainer from "../components/Recomendation/Rcontainer.jsx";
import Dcard from "../components/Dcard/Dcard.jsx";
import Map from "../components/Map.jsx";

function DashBoard() {
  return (
    <>
      <Cards_Container />
      <Recom />

      <Rcontainer />
      <Dcard />
      <Map />
    </>
  );
}

export default DashBoard;
