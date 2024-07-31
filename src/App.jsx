import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="work" element={<About />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
