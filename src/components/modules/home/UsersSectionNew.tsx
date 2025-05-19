import React from "react";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { HiOutlineUserCircle, HiOutlineChartBar } from "react-icons/hi2";
import { PiShapes } from "react-icons/pi";

const UsersSectionNew = () => {
  return (
    <section className="bg-white text-[#1b1b1b] flex flex-col md:flex-row justify-between gap-5 md:gap-10 max-container-width py-10 md:py-32">
      <ScrollAnimation variant="delay1">
        <div className="flex flex-col justify-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full lg:max-w-sm">
          <div className="flex items-center gap-3 text-[#4A3E60] text-sm font-semibold">
            <HiOutlineUserCircle className="text-xl" />
            Users
          </div>

          <hr className="h-px bg-gray-200 border-0" />

          <h3 className="font-extrabold font-dm-sans text-3xl lg:text-5xl text-[#2E147E]">
            ₦30 bn<span className="text-primaryLight">+</span>
          </h3>

          <p className="text-sm text-[#4A3E60]/70 font-medium leading-relaxed">
            transactions have been processed successfully and securely by
            Tribapay.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="delay2">
        <div className="flex flex-col justify-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full lg:max-w-sm">
          <div className="flex items-center gap-3 text-[#4A3E60] text-sm font-semibold">
            <HiOutlineChartBar className="text-xl" />
            Transactions
          </div>

          <hr className="h-px bg-gray-200 border-0" />

          <h3 className="font-extrabold font-dm-sans text-3xl lg:text-5xl text-[#2E147E]">
            700,000<span className="text-primaryLight">+</span>
          </h3>

          <p className="text-sm text-[#4A3E60]/70 font-medium leading-relaxed">
            More than 700k unique transactions have been processed through
            tribapay.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="delay3">
        <div className="flex flex-col justify-center gap-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full lg:max-w-sm">
          <div className="flex items-center gap-3 text-[#4A3E60] text-sm font-semibold">
            <PiShapes className="text-xl" />
            Partnerships
          </div>

          <hr className="h-px bg-gray-200 border-0" />

          <h3 className="font-extrabold font-dm-sans text-3xl lg:text-5xl text-[#2E147E]">
            75,000<span className="text-primaryLight">+</span>
          </h3>

          <p className="text-sm text-[#4A3E60]/70 font-medium leading-relaxed">
            more than 75,000 people use Tribapay for their financial
            transaction.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default UsersSectionNew;
