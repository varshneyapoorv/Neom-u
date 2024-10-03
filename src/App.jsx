import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import MyFav from "./pages/MyFav.jsx";
import Events from "./pages/Events.jsx";
import SignUp from "./pages/SignUp.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<DashBoard />} />
            <Route path="fav" element={<MyFav />} />
            <Route path="upc-events" element={<Events />} />
          </Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
