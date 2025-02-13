import React from "react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const UsersSection = () => {
  return (
    <section className="bg-[#fef1f2] text-[#1b1b1b] flex flex-col md:flex-row justify-between lg:pb-[2.5rem] pt-[2.5rem] gap-5 md:gap-10 max-container-width">
      <ScrollAnimation variant="delay1">
        <div
          className={`flex flex-col items-center justify-center text-center gap-4 md:mb-0 mb-8`}
        >
          <h3 className="font-extrabold font-dm-sans lg:text-[2.5rem] text-2xl">
            ₦30 bn+
          </h3>
          <p className="max-w-[16.625rem] text-base font-medium text-center">
            transactions have been processed successfully and securely by
            Tribapay.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="delay2">
        <div
          className={`flex flex-col items-center justify-center text-center gap-4 md:mb-0 mb-8`}
        >
          <h3 className="font-extrabold font-dm-sans lg:text-[2.5rem] text-2xl">
            700,000+
          </h3>
          <p className="max-w-[16.625rem] text-base font-medium text-center">
            More than 700k unique transactions have been processed through
            tribapay.
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation variant="delay3">
        <div
          className={`flex flex-col items-center justify-center text-center gap-4 md:mb-0 mb-10`}
        >
          <h3 className="font-extrabold font-dm-sans lg:text-[2.5rem] text-2xl">
            75,000+
          </h3>
          <p className="max-w-[16.625rem] text-base font-medium text-center">
            more than 75,000 people use Tribapay for their financial
            transaction.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default UsersSection;
