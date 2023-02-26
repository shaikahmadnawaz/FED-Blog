import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";

import Map from "./pages/Map";

import Sidebar from "./components/Sidebar";
import AddOn from "./pages/AddOn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addon1" exact element={<AddOn />} />
          <Route path="/addon2" exact element={<AddOn />} />
          <Route path="/map" exact element={<Map />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
