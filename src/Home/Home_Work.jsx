import { useState } from "react";
import arrow from "../img/arrow.svg";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg";

const lst1 = [img1, img3];
const lst2 = [img2, img4];

export default function Home_Work() {
  return (
    <>
      <section className="mb-[240px] pt-[157px] sm:mb-[116px]rain" id="work">
        <div className="flex flex-col items-start max-w-[1288px] w-[100%] ml-auto mr-auto px-[20px] ">
          <a
            href="#proj"
            className="flex items-center gap-[32px] text-[16px] text-[#DEDEDE] uppercase mb-[80px] kl:mb-10 md:capitalize "
          >
            <img src={arrow} alt="" />
            Featured Work
          </a>
          <div className="flex gap-[24px] items-start kl:flex-col">
            <div className="flex flex-col gap-[24px] items-center w-[49%]  kl:w-[100%]">
              {lst1.map(function (item, index) {
                
                return (
                  <>
                    <a
                      href="#"
                      target="_blank"
                      className={`group relative max-w-[612px] z-10 `}
                    >
                      <span
                        className={`z-50 absolute transition-all top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[40px] text-[#DEDEDE] opacity-0 group-hover:opacity-100 mt-[-100px] group-hover:mt-0 duration-500`}
                      >
                        InVersion
                      </span>
                      <img
                        src={item}
                        alt=""
                        className="h-[888px] object-cover rounded-[4px] md:max-w-[610px] md:w-[100%] lg:h-[700px] kl:h-[600px] km:h-[450px] sm:h-[450px] sl:h-[500px] brightness-100 group-hover:brightness-50"
                      />
                    </a>
                  </>
                );
              })}{" "}
            </div>
            <div className="flex flex-col gap-[24px] items-center w-[49%]  kl:w-[100%] mt-[138px] kl:m-0">
              {lst2.map(function (item, index) {
                
                return (
                  <>
                    <a href="#" target="_blank"
                      className={`group relative max-w-[612px] z-10 `}
                    >
                      <span 
                        className={`z-50 absolute transition-all top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[40px] text-[#DEDEDE] opacity-0 group-hover:opacity-100 mt-[-100px] group-hover:mt-0 duration-500`}
                      >
                        InVersion
                      </span>
                      <img
                        src={item}
                        alt=""
                        className="h-[888px] object-cover rounded-[4px] md:max-w-[610px] md:w-[100%] lg:h-[700px] kl:h-[600px] km:h-[450px] sm:h-[450px] sl:h-[500px] brightness-100 group-hover:brightness-50"
                      />
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
