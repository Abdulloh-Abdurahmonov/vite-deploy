import { useState } from "react";
import Header from "./Header";
import Home_Hero from "./Home/Home_Hero";
import Home_Work from "./Home/Home_Work";
import Home_Visual from "./Home/Home_Visual";
import Home_Contact from "./Home/Home_Contact.jsx";
import Footer from "./Footer";
import Co_Hero from "./img/co-hero.jpeg";
import Co_Img2 from "./img/co-img2.jpeg";
import CoWorking from "./CoWorking/CoWorking";
import Solution from "./CoWorking/Solution";
import Conclusion from "./CoWorking/Conclusion";

function App() {
  return (
    <>
      <Header></Header>
      {/* <Hero></Hero>
      <Work></Work>
      <Visual></Visual>
      <Contact></Contact> */}
      <section
        className="w-full h-[640px] bg-cover bg-center mb-32 kl:mb-14 kl:h-[476px]"
        style={{ backgroundImage: `url(${Co_Hero})` }}
      ></section>
      <CoWorking></CoWorking>
      <section
        className="w-full h-[769px] bg-cover bg-center mb-[234px] kl:mb-[226px] kl:h-[574px]"
        style={{ backgroundImage: `url(${Co_Img2})` }}
      ></section>
      <Solution></Solution>
      <Conclusion></Conclusion>
      <Footer></Footer>
    </>
  );
}

export default App;
