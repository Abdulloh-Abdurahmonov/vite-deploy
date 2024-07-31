import { useState } from "react";
import img1 from "../img/visual1.jpg";
import img2 from "../img/visual2.jpg";
import img3 from "../img/visual3.jpg";
import img4 from "../img/visual4.jpg";
import img5 from "../img/visual5.jpg";
import img6 from "../img/visual6.jpg";
import img7 from "../img/visual7.jpg";
import img8 from "../img/visual8.jpg";
import img9 from "../img/visual9.jpg";

export default function Home_Visual() {
  return (
    <>
      <section className="mb-[240px] sl:mb-[200px]" id='proj'>
        <div className="flex flex-col items-center max-w-[1288px] px-[20px] ml-auto mr-auto mb-[240px]">
          <h3 className="text-[36px] leading-[49.18px] mb-[65px] text-[#DEDEDE]">
            Visual Explorations
          </h3>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 sl:grid-cols-2 kl:grid-cols-1">
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden transition-all duration-300 hover:mt-[-12px] hover:rotate">
              <img className="w-full rounded-[4px]" src={img1} />
            </a>
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden transition-all duration-300 hover:mt-[-12px] hover:rotate">
              <img className="w-full rounded-[4px]" src={img2} />
            </a>
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden transition-all duration-300 hover:mt-[-12px] hover:rotate">
              <img className="w-full rounded-[4px]" src={img3} />
            </a>
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden transition-all duration-300 hover:mt-[-12px] hover:rotate">
              <img className="w-full rounded-[4px]" src={img4} />
            </a>
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden transition-all duration-300 hover:mt-[-12px] hover:rotate">
              <img className="w-full rounded-[4px]" src={img5} />
            </a>
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden transition-all duration-300 hover:mt-[-12px] hover:rotate">
              <img className="w-full rounded-[4px]" src={img6} />
            </a>
          </div>
        </div>
        <div className=" flex flex-col items-center max-w-[1288px] px-[20px] ml-auto mr-auto">
          <h3 className="text-[36px] leading-[49.18px] mb-[65px] text-[#DEDEDE]">
            Personal Projects
          </h3>
          <div className="grid grid-cols-3 gap-3 sl:grid-cols-1 kl:grid-cols-1">
            <a href="#" target="_blank" className="  w-full overflow-hidden">
              <img className="w-full rounded-[4px] transition-all duration-300 hover:scale-[1.2] kl:h-[600px] object-cover" src={img7} />
            </a>
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden">
              <img className="w-full rounded-[4px] transition-all duration-300 hover:scale-[1.2] kl:h-[600px] object-cover" src={img8} />
            </a>
            <a href="#" target="_blank" className="imgGroup  w-full overflow-hidden">
              <img className="w-full rounded-[4px] transition-all duration-300 hover:scale-[1.2] kl:h-[600px] object-cover" src={img9} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
