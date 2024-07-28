import { useState } from "react";
import img from "../img/co-img3.jpeg"


export default function Conclusion() {
    return (
      <>
        <section className="w-full mb-[153px]">
          <div className="max-w-[1288px] w-full px-5 ml-auto mr-auto flex flex-col items-center gap-32">
            <div className="flex flex-col items-start gap-3 kl:gap-8">
              <span className="uppercase font-700 text-base leading-4 tracking-[2px] text-[#a5a5a5]">
                ConClusion
              </span>
              <h2 className="tracking-[-0.5px] font-bold text-[32px] leading-[54px] kl:text-3xl kl:leading-[44px]  text-[#dedede]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                aenean aliquet pellentesque lectus. Libero convallis velit,
                morbi nullam pellentesque quis. Massa nascetur in commodo
                posuere porttitor.
              </h2>
            </div>
            <img
              src={img}
              alt=""
              className="mb-[136px] object-cover w-full h-[674px]"
            />
            <a
              href="#"
              className="capitalize text-[32px] leading-[54px] text-[#dedede] pb-[10px] border-b-2 border-b-[#c4c4c4] hover:text-[#a5a5a5] hover:border-[#a5a5a5] transition-all duration-300"
              target="_blank"
            >
              next case
            </a>
          </div>
        </section>
      </>
    );
};
