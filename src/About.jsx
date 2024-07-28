import { useState } from "react";

import Co_Hero from "./img/co-hero.jpeg";
import Co_Img2 from "./img/co-img2.jpeg";
import CoWorking from "./CoWorking/CoWorking";
import Solution from "./CoWorking/Solution";
import Conclusion from "./CoWorking/Conclusion";

export default function About() {
  return (
    <>
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
    </>
  );
}
