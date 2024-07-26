import { useState } from "react";
import avatar from "./img/me.jpg";
import email from "./img/email.svg";

export default function Hero() {
  return (
    <>
      <section className=" pt-[210.14px] kl:pt-[153.14px]" id="hero">
        <div className="flex items-start max-w-[1288px] px-[20px] ml-auto mr-auto justify-between md:flex-col-reverse md:items-center">
          <div className="flex flex-col items-start gap-[24px] md:items-center">
            <h1 className="text-[64px] leading-[70px] text-[#DEDEDE] max-w-[600.1px] lg:text-[48px] md:text-center md: kl:text-3xl ">
              Hi, I am Your Name A Product Designer based in City.
            </h1>
            <p className="mb-[40px] max-w-[480px] lg:text-[18px] lg:leading-[26px] md:text-center kl:text-sm kl:font-medium">
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive experiences.
            </p>

            <a
              href="#" target="_blank"
              className="flex items-center gap-[16px] text-white bg-[#9D9D9D] max-w-[400px] w-[100%] h-[64px] justify-center kl:max-w-[242px] kl:h-[57px] kl:rounded-[4px] kl:text-[18px] hover:bg-[#5e5e5e] transition-all duration-300"
            >
              <img src={email} alt="" />
              hi@yourname.com
            </a>
          </div>
          <img src={avatar} className="rounded-[50%] md:mb-16" alt="" />
        </div>
      </section>
    </>
  );
}
