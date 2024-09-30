import DashBoard from "./pages/DashBoard.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* WE WILL USE OUTLET HERE TO FIX THE HEADER AND FOOTER AND DEFAULT ROUTE
      TO DASHBOARD */}
      <DashBoard />
      <Footer />
    </>
  );
}

export default App;
