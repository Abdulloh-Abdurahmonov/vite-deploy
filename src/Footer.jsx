import { useState } from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-full pt-12 pb-9 border-t border-[#696969]">
        <div className="max-w-[1288px] w-full ml-auto mr-auto px-5 flex justify-between sm:flex-col-reverse sm:items-center sm:gap-[35px]">
          <span className="text-[#959595] text-base font-semibold leading-9">
            Made by{" "}
            <a href="#" target="_blank" className="text-white">
              Your Name
            </a>{" "}
            — Copyright 2021
          </span>
          <ul className="flex items-center gap-8">
            <li className="hover:mb-2 transition-all ">
              <a href="#" target="_blank" className="group ">
                <svg
                  className="h-[26px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-300"
                    fill="#959595"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
              </a>
            </li>
            <li className="hover:mb-2 transition-all ">
              <a href="#" target="_blank" className="group ">
                <svg
                  className="h-[22px]"
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-300"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4664 0.143066C5.47255 0.143066 0.609604 5.00602 0.609604 10.9999C0.609604 16.9938 5.47255 21.8567 11.4664 21.8567C17.4485 21.8567 22.3232 16.9938 22.3232 10.9999C22.3232 5.00602 17.4485 0.143066 11.4664 0.143066ZM18.6374 5.14715C19.9741 6.77508 20.7138 8.81124 20.7336 10.9176C20.4278 10.8587 17.3662 10.2345 14.2811 10.6235C14.2096 10.4697 14.1508 10.305 14.0802 10.1404C13.8883 9.68748 13.6844 9.23978 13.4686 8.79776C16.8831 7.40809 18.4374 5.40681 18.6374 5.14715ZM11.4664 1.74535C13.8214 1.74535 15.9765 2.62747 17.6132 4.07595C17.4485 4.31118 16.0471 6.18398 12.7502 7.41985C11.2303 4.62965 9.54748 2.34429 9.28782 1.99144C10.0019 1.82469 10.7331 1.7418 11.4664 1.74445V1.74535ZM7.52178 2.61571C7.76877 2.94594 9.4172 5.24215 10.9598 7.97355C6.62609 9.12799 2.79906 9.10446 2.38741 9.10446C2.98815 6.23103 4.93152 3.84072 7.52178 2.61571ZM2.18746 11.0116V10.7294C2.58826 10.7411 7.0857 10.7999 11.7143 9.41027C11.9848 9.92868 12.2318 10.4579 12.4671 10.9881C12.3494 11.0234 12.2201 11.0587 12.1025 11.094C7.32183 12.6365 4.77772 16.8517 4.56601 17.2055C3.03467 15.5059 2.18728 13.2993 2.18746 11.0116ZM11.4664 20.2788C9.3231 20.2788 7.34536 19.5487 5.77926 18.3246C5.94392 17.9826 7.82758 14.3555 13.056 12.5307C13.0796 12.5189 13.0922 12.5189 13.1148 12.5072C14.4222 15.8864 14.9515 18.7245 15.0935 19.537C13.9743 20.0201 12.7502 20.2788 11.4664 20.2788ZM16.6361 18.6892C16.542 18.1238 16.0471 15.4159 14.8338 12.0829C17.7426 11.6242 20.2858 12.3778 20.6042 12.4837C20.2034 15.0621 18.7197 17.2878 16.6361 18.6892Z"
                    fill="#959595"
                  />
                </svg>
              </a>
            </li>
            <li className="hover:mb-2 transition-all ">
              <a href="#" target="_blank" className="group">
                <svg
                  className="h-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-300"
                    fill="#888888"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </a>
            </li>
            <li className="hover:mb-2 transition-all ">
              <a href="#" target="_blank" className="group ">
                <svg
                  className="h-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-300"
                    fill="#888888"
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </a>
            </li>
            <li className="hover:mb-2 transition-all ">
              <a href="#" target="_blank" className="group ">
                <svg
                  className="h-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    className="group-hover:fill-white transition-all duration-300"
                    fill="#888888"
                    d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
