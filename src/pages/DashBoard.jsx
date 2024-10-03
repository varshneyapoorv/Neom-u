import React from "react";
import Cart from "../components/Cart.jsx";
import Recom from "../components/Sugest/Recom.jsx";
import Rcontainer from "../components/Recomendation/Rcontainer.jsx";
import Dcard from "../components/Dcard/Dcard.jsx";
import Map from "../components/Map.jsx";

function DashBoard() {
  return (
    <>
      <Cart />
      <Recom />
      <Rcontainer />
      <Dcard />
      <Map />
    </>
  );
}

export default DashBoard;
