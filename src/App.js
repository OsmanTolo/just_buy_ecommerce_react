import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Thanks from "./components/pages/Thanks";
import Checkout from "./components/pages/Checkout";
import Returns from "./components/pages/Returns";
import FAQ from "./components/pages/Faq";
import Shipping from "./components/pages/Shipping";
import Terms from "./components/pages/Terms";
import ShopPage from "./components/pages/ShopPage";
import CategoryProducts from "./components/pages/CategoryProducts";
import Product from "./components/pages/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/category/:name/*" element={<CategoryProducts/>}  />
            <Route path="/category/:name/product/:id" element={<Product/>}  />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout/*" element={<Checkout />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/thanks" element={<Thanks />} /> 
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
