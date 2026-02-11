import { Routes, Route } from "react-router-dom";
import Header from "./components/Hearder.jsx";

import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Facilities from "./pages/Facilities.jsx";
import Gallery from "./pages/Gallery.jsx";
import Rules from "./pages/Rules.jsx";
import Location from "./pages/Location.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
