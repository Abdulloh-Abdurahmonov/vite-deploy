import { useState } from "react";
import logo from "./img/Logos.svg";
import navbar from "./img/Navbar.svg";

export default function Header() {
  const [nav, setNav] = useState(true);

  function navToggle() {
    setNav(!nav);
    document.querySelector("body").classList.toggle("over");
  }

  return (
    <>
    <div className={`${
          nav ? "w-[0%]" : "w-full"
        } bg-[rgba(0,0,0,0.4)] transition-all duration-100  backdrop-blur-lg z-20 overlay  fixed top-[81.14px] right-0 `}></div>
      <div
        className={`${
          nav ? "w-[0%]" : "w-[80%]"
        } overflow-x-hidden hidden sm:flex fixed right-[0] bg-[#323232b2] backdrop-blur-md modal top-[81.14px] pt-[40px] transition-all duration-[.3s] z-20`}
      >
        <ul className="flex w-[100%] flex-col items-center gap-[26px]">
          <li className="">
            <a
              onClick={navToggle}
              href="#hero"
              className="nav-link text-[#DEDEDE] text-[18px] leading-[24.59px] font-bold hover:text-[#4f4f4f] transition-all duration-[0.3s] sm:text-[24px] "
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              onClick={navToggle}
              href="#work"
              className="nav-link text-[#DEDEDE] text-[18px] leading-[24.59px] font-bold hover:text-[#4f4f4f] transition-all duration-[0.3s] sm:text-[24px] "
            >
              Work
            </a>
          </li>
          <li className="">
            <a
              onClick={navToggle}
              href="#contact"
              className="nav-link text-[#DEDEDE] text-[18px] leading-[24.59px] font-bold hover:text-[#4f4f4f] transition-all duration-[0.3s] sm:text-[24px] "
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <header className="header fixed w-[100%] top-0 bg-[#323232B2] pt-[20px] pb-[19.15px] z-20 backdrop-blur-md">
        <div className="header-container max-w-[1275px] px-[20px] ml-auto mr-auto flex items-center justify-between">
          <a href="#" className="logo-link flex">
            <img src={logo} alt="" className="logo-img" />
          </a>
          <img
            src={navbar}
            alt=""
            className="hidden cursor-pointer sm:flex "
            onClick={navToggle}
          />
          <ul className="flex items-center gap-[56px] sm:hidden">
            <li className="">
              <a
                href="#hero"
                className="nav-link text-[#DEDEDE] text-[18px] leading-[24.59px] font-bold hover:text-[#4f4f4f] transition-all duration-[0.3s]"
              >
                Home
              </a>
            </li>
            <li className="">
              <a
                href="#work"
                className="nav-link text-[#DEDEDE] text-[18px] leading-[24.59px] font-bold hover:text-[#4f4f4f] transition-all duration-[0.3s]"
              >
                Work
              </a>
            </li>
            <li className="">
              <a
                href="#contact"
                className="nav-link text-[#DEDEDE] text-[18px] leading-[24.59px] font-bold hover:text-[#4f4f4f] transition-all duration-[0.3s]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
