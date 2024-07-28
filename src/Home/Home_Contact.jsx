import { useState } from "react";
import email from "../img/email.svg";



export default function Home_Contact() {
  return (
    <>
      <section className="mb-[120px]" id="contact">
        <div className="flex flex-col items-center gap-[24px] max-w-[1288px] px-[20px] ml-auto mr-auto">
          <h3 className="text-[36px] leading-[49.18px] text-[#dedede] km:text-[28px]">
            Contact Me
          </h3>
          <p className="text-center max-w-[479px] mb-[22px] km:font-medium km:text-[18px] km:leading-[26px]">
            If you are looking to hire a product designer, I’m currently
            available for freelance work
          </p>
          <a
            href="#"
            target="_blank"
            className="flex items-center gap-[16px] text-white bg-[#9D9D9D] max-w-[400px] w-[100%] h-[64px] justify-center kl:max-w-[242px] kl:h-[57px] kl:rounded-[4px] kl:text-[18px] hover:bg-[#5e5e5e] transition-all duration-300"
          >
            <img src={email} alt="" />
            hi@yourname.com
          </a>
        </div>
      </section>
    </>
  );
}
