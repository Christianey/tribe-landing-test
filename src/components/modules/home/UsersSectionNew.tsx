import React from "react";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { HiOutlineUserCircle, HiOutlineChartBar } from "react-icons/hi2";
import { PiShapes } from "react-icons/pi";

const UsersSectionNew = () => {
  return (
    <section className="bg-white text-[#1b1b1b] flex flex-col md:flex-row justify-between lg:pb-[2.5rem] pt-[2.5rem] gap-5 md:gap-10 max-container-width">
      <ScrollAnimation variant="delay1">
        <div className={`flex flex-col justify-center gap-4 md:mb-0 mb-8`}>
          <div className="flex gap-4 items-center">
            <HiOutlineUserCircle />
            Users
          </div>
          <hr className="h-px bg-gray-200 border-0"></hr>
          <h3 className="font-extrabold font-dm-sans lg:text-[2.5rem] text-2xl">
            ₦30 bn<span className="text-primaryLight">+</span>
          </h3>
          <p className="max-w-[16.625rem] text-sm text-[#0E0E0FB2]/70 font-medium">
            transactions have been processed successfully and securely by
            Tribapay.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="delay2">
        <div className={`flex flex-col justify-center gap-4 md:mb-0 mb-8`}>
          <div className="flex gap-4 items-center">
            <HiOutlineChartBar />
            Transactions
          </div>
          <hr className="h-px bg-gray-200 border-0"></hr>
          <h3 className="font-extrabold font-dm-sans lg:text-[2.5rem] text-2xl">
            700,000<span className="text-primaryLight">+</span>
          </h3>
          <p className="max-w-[16.625rem] text-sm text-[#0E0E0FB2]/70 font-medium">
            More than 700k unique transactions have been processed through
            tribapay.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="delay3">
        <div className={`flex flex-col justify-center gap-4 md:mb-0 mb-10`}>
          <div className="flex gap-4 items-center">
            <PiShapes />
            Partnerships
          </div>
          <hr className="h-px bg-gray-200 border-0"></hr>
          <h3 className="font-extrabold font-dm-sans lg:text-[2.5rem] text-2xl">
            75,000<span className="text-primaryLight">+</span>
          </h3>
          <p className="max-w-[16.625rem] text-sm text-[#0E0E0FB2]/70 font-medium">
            more than 75,000 people use Tribapay for their financial
            transaction.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default UsersSectionNew;
