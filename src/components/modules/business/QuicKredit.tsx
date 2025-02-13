/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/common/Button";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { useResponsive } from "@/components/hooks/useResponsive";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const QuicKredit = () => {
  const { isMobile } = useResponsive();

  return (
    <section className="my-20 max-container-width">
      <div className="md:grid md:grid-cols-2 grid-cols-1 md:items-center lg:px-20 px-5 lg:py-12 py-9 md:py-0 bg-white rounded-[20px] lg:gap-16 gap-12 border border-gray-100 shadow-md shadow-slate-100">
        <ScrollAnimation>
          <div className="flex flex-col mb-4 lg:mb-0">
            <h3 className="text-[#18171B] font-bold lg:text-4xl text-3xl ">QuicKredit</h3>
            <p className="py-4 lg:my-6 text-base lg:text-lg text-primaryBlack-default/70 ">
              Entrepreneur or SME? Get short-term credit for invoices, orders,
              or growth, and conquer cash flow challenges.
            </p>
            <div className="">
            <Link target="_blank" href={"https://app.tribapay.com"}>
                <Button
                  intent={"primary-light"}
                  rightIcon={<HiMiniArrowUpRight size={24} />}
                  size={isMobile ? "sm" : "md"}
                  className={classNames("", { "py-5": isMobile })}                 >
                  Learn more
                </Button>
                </Link>
          </div>
          </div>
        </ScrollAnimation>

        <div className="flex justify-end items-center">
          <ScrollAnimation>
            <img
              src="/images/business/Invoice.png"
              alt="Description of the image"
              className="md:h-[421px] md:w-[498px] w-full h-full object-contain"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
    // <section className="my-20 max-container-width">
    //   <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 items-center lg:px-20 px-5 lg:py-12 py-9 bg-white rounded-[20px] lg:gap-[140px] gap-9">
    //     <div>
    //       <h3 className="text-[#18171B] font-bold text-[40px] leading-[1.2]">
    //         QuicKredit
    //       </h3>
    //       <p className="my-6">
    //         Entrepreneur or SME? Get short-term credit for invoices, orders, or
    //         growth, and conquer cash flow challenges.
    //       </p>
    //       <Btn buttonText="Learn more" />
    //     </div>
    //     <div className="flex justify-end items-center">
    //       <img
    //         src="/images/business/Invoice.png"
    //         alt="Description of the image"
    //         className="lg:h-[421px] lg:w-[498px] w-full h-full"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default QuicKredit;
