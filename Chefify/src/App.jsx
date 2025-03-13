import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatToCook from "./pages/whatToCook";
import Recipes from "./pages/Recipes";
import Ingredients from "./pages/Ingredients";
import Occasions from "./pages/Occasions";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" w-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhatToCook" element={<WhatToCook />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Ingredients" element={<Ingredients />} />
          <Route path="/Occasions" element={<Occasions />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
