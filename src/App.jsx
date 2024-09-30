import Cards_Container from "./components/Cards_Container";
import Navbar from "./components/Navbar";
import Rcontainer from "./components/Recomendation/Rcontainer.jsx";
import Recom from "./components/Sugest/Recom.jsx";

import { Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Cards_Container />

      <Recom />

      <Rcontainer />
    </>
  );
}

export default App;
