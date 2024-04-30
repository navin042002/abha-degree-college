import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
