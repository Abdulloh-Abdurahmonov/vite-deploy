import { useState } from "react";
import img1 from "../img/solution1.jpg";
import img2 from "../img/solution2.jpg";

export default function Solution() {
  const lst = [
    {
      img: img1,
      headline: "Solution 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      img: img2,
      headline: "Solution 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <>
      <section className="w-full pb-[108px] kl:pb-[114px] pt-[234px] kl:pt-[226px] ">
        <div className="flex flex-col items-start max-w-[1288px] w-full px-5 ml-auto mr-auto gap-[275px] kl:gap-[226px]">
          {lst.map(function (item, index) {
            return (
              <div
                key={index}
                className="solution-box flex items-center w-full justify-between kl:flex-col-reverse kl:gap-16"
              >
                <img
                  className="w-[40.5%] kl:w-full kl:h-[577px] object-cover"
                  src={item.img}
                  alt=""
                />
                <div className="flex flex-col w-[49%] kl:w-full kl:gap-8">
                  <span className="uppercase font-700 text-base leading-4 tracking-[2px] text-[#a5a5a5]">
                    {item.headline}
                  </span>
                  <h2 className="tracking-[-0.5px] kl:text-3xl kl:leading-[44px] font-bold text-[32px] leading-[54px] text-[#dedede] kl:mb-8">
                    {item.text}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
