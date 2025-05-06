/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const Testimonal = () => {
  return (
    <ScrollAnimation>
      <section className="max-container-width mb-[128px] md:mb-[13rem] flex flex-col justify-center items-center text-center">
        <h3 className="max-w-[37.5625rem] lg:text-[3.75rem] text-[2rem] leading-tight  font-extrabold">
          Don’t just take our word for it{" "}
        </h3>
        <p className="text-text-gray-text mt-6 lg:text-lg text-base lg:max-w-[40.625rem]">
          We serve thousands of customers here is what our users feel about our
          product and services.
        </p>
        <div>
          <hr className="h-px bg-gray-200 border-0 w-full mt-8" />
          <div className="mt-20 px-0 lg:px-8">
            <div className="flex lg:flex-row flex-col items-center justify-center flex-wrap">
              <div className="w-full md:w-1/2 p-2 lg:p-8">
                <ScrollAnimation variant="delay1">
                  <div className="flex flex-col text-center gap-6 bg-[#F0EEFC] border border-gray-200 rounded-3xl px-6 py-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E3DDFB]">
                      <Image
                        src="/images/home/Testimonal.svg"
                        width={100}
                        height={100}
                        alt="staff"
                        className="w-6 h-6"
                      />
                    </div>

                    <p className="text-[15px] text-[#4A3E60] leading-relaxed font-medium">
                      Tribapay's Cashpin feature has transformed the way I
                      handle my finances. With its cutting-edge security
                      measures, I feel completely at ease managing my funds.
                    </p>

                    <hr className="h-px bg-gray-200 border-0 w-full" />

                    <h2 className="text-lg font-semibold text-[#2E147E]">
                      Opeyemi Adekunle
                    </h2>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="w-full md:w-1/2 p-2 lg:p-8">
                <ScrollAnimation variant="delay2">
                  <div className="flex flex-col text-center gap-6 bg-[#F0EEFC] border border-gray-200 rounded-3xl px-6 py-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E3DDFB]">
                      <Image
                        src="/images/home/Testimonal.svg"
                        width={100}
                        height={100}
                        alt="staff"
                        className="w-6 h-6"
                      />
                    </div>

                    <p className="text-[15px] text-[#4A3E60] leading-relaxed font-medium">
                      I used to worry about currency conversions and security
                      when shopping online internationally. But now, with these
                      virtual cards, I make purchases with confidence.
                    </p>

                    <hr className="h-px bg-gray-200 border-0 w-full" />

                    <h2 className="text-lg font-semibold text-[#2E147E]">
                      Temitayo Lawrence
                    </h2>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="w-full md:w-1/2 p-2 lg:p-8">
                <ScrollAnimation variant="delay3">
                  <div className="flex flex-col text-center gap-6 bg-[#F0EEFC] border border-gray-200 rounded-3xl px-6 py-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#E3DDFB]">
                      <Image
                        src="/images/home/Testimonal.svg"
                        width={100}
                        height={100}
                        alt="staff"
                        className="w-6 h-6"
                      />
                    </div>

                    <p className="text-[15px] text-[#4A3E60] leading-relaxed font-medium">
                      Managing my finances has never been this enjoyable, thanks
                      to Tribapay's Cashpin Wallet. I can budget my money, track
                      my expenses, manage my money, all in one place.
                    </p>

                    <hr className="h-px bg-gray-200 border-0 w-full" />

                    <h2 className="text-lg font-semibold text-[#2E147E]">
                      Taiwo Abiodun
                    </h2>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* <div className="flex lg:flex-row flex-col items-center justify-center flex-wrap">
              <div className="w-full md:w-1/2 p-2 lg:p-8">
                <ScrollAnimation variant="delay1">
                  <div className="flex flex-col text-center gap-5 bg-[#F0EEFC] border-[.5px] border-gray-200 rounded-3xl px-6 py-7">
                    <Image
                      src="/images/home/Testimonal.svg"
                      width={100}
                      height={100}
                      alt={"staff"}
                      className=" w-[1.9rem] h-[1.642rem]"
                    />
                    <p className=" text-text-gray-text font-medium text-base lg:text-lg">
                      Tribapay's Cashpin feature has transformed the way I
                      handle my finances. With its cutting-edge security
                      measures, I feel completely at ease managing my funds.
                    </p>
                    <hr className="h-px bg-gray-200 border-0 w-full" />
                    <h2 className="text-2xl font-medium">Opeyemi Adekunle</h2>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="w-full md:w-1/2 p-2 lg:p-8">
                <ScrollAnimation variant="delay2">
                  <div className="flex flex-col text-center gap-5 bg-[#F0EEFC] border-[.5px] border-gray-200 rounded-3xl px-6 py-7">
                    <Image
                      src="/images/home/Testimonal.svg"
                      width={100}
                      height={100}
                      alt={"staff"}
                      className=" w-[1.9rem] h-[1.642rem]"
                    />
                    <p className=" text-text-gray-text font-medium text-base lg:text-lg">
                      I used to worry about currency conversions and security
                      when shopping online internationally. But now, with these
                      virtual cards, I make purchases with confidence.
                    </p>
                    <hr className="h-px bg-gray-200 border-0 w-full" />
                    <h2 className="text-2xl font-medium">Temitayo Lawrence</h2>
                  </div>
                </ScrollAnimation>
              </div>

              <div className="w-full md:w-1/2 p-2 lg:p-8">
                <ScrollAnimation variant="delay3">
                  <div className="flex flex-col text-center gap-5 bg-[#F0EEFC] border-[.5px] border-gray-200 rounded-3xl px-6 py-7">
                    <Image
                      src="/images/home/Testimonal.svg"
                      width={100}
                      height={100}
                      alt={"staff"}
                      className=" w-[1.9rem] h-[1.642rem]"
                    />
                    <p className=" text-text-gray-text font-medium text-base lg:text-lg">
                      Managing my finances has never been this enjoyable, thanks
                      to Tribapay's Cashpin Wallet. I can budget my money, track
                      my expenses, manage my money, all in one place.
                    </p>
                    <hr className="h-px bg-gray-200 border-0 w-full" />
                    <h2 className="text-2xl font-medium">Taiwo Abiodun</h2>
                  </div>
                </ScrollAnimation>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Testimonal;
