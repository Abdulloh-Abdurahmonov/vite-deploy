import { useState } from "react";

export default function CoWorking() {
  return (
    <>
      <section className="w-full pb-[100px] kl:pb-[87px] pt-32 kl:pt-14">
        <div className="max-w-[1288px] w-full px-5 ml-auto mr-auto flex flex-col items-star gap-28">
          <div className="max-w-[344px] flex flex-col gap-3">
            <span className="uppercase font-700 text-base leading-4 tracking-[1.5px] text-[#a5a5a5]">
              Covibe
            </span>
            <h2 className="tracking-[-0.5px] font-bold text-[32px] kl:text-3xl kl:leading-[44px] leading-normal text-[#dedede]">
              Co-working spaces for tech startups
            </h2>
          </div>
          <div className="grid grid-cols-4 max-w-[1046px] w-full gap-10 sl:grid-cols-2 mb-[178px]">
            <div>
              <span className="uppercase font-700 text-base leading-4 tracking-[1.5px] text-[#a5a5a5]">
                client
              </span>
              <h4 className="font-700 text-xl kl:leading-[34px] leading-[30px] capitalize text-[#dedede]">
                Covibe
              </h4>
            </div>
            <div>
              <span className="uppercase font-700 text-base leading-4 tracking-[1.5px] text-[#a5a5a5]">
                role
              </span>
              <h4 className="font-700 text-xl kl:leading-[34px] leading-[30px] capitalize text-[#dedede]">
                Product Designer
              </h4>
            </div>
            <div>
              <span className="uppercase font-700 text-base leading-4 tracking-[1.5px] text-[#a5a5a5]">
                industry
              </span>
              <h4 className="font-700 text-xl kl:leading-[34px] leading-[30px] capitalize text-[#dedede]">
                Co-working
              </h4>
            </div>
            <div>
              <span className="uppercase font-700 text-base leading-4 tracking-[1.5px] text-[#a5a5a5]">
                duration
              </span>
              <h4 className="font-700 text-xl kl:leading-[34px] leading-[30px] capitalize text-[#dedede]">
                2 Months
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <span className="uppercase font-700 text-base leading-4 tracking-[1.5px] text-[#a5a5a5]">
              defining the problem
            </span>
            <h2 className="tracking-[-0.5px] font-bold kl:text-3xl kl:leading-[44px] text-[32px] leading-[54px] text-[#dedede] mb-[88px]">
              Designing a product that helps new startups setup their business
              in a coworking space with budget constraints.
            </h2>
            <a
              href="#"
              className="uppercase text-base leading-4 text-[#a5a5a5] pb-[10px] border-b-2 border-b-[#a5a5a5] hover:text-[#dedede] hover:border-[#dedede] transition-all duration-300"
              target="_blank"
            >
              launch prototype
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
