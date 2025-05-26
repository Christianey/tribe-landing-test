import ScrollAnimation from "@/components/common/ScrollAnimation";
import Image from "next/image";
import React from "react";
import { StoreButton } from "./StoreButton";

type Props = {
  isBusiness?: boolean;
};

const DownloadSection = ({ isBusiness }: Props) => {
  return (
    <section className="px-4 lg:px-0 lg:pb-[160px] pb-[8rem]">
      <div className="bg-right bg-no-repeat lg:bg-contain bg-cover max-container-width mt-[8rem] lg:mt-[5rem] overflow-hidden font-medium max-w-7xl">
        <div className="flex flex-col lg:items-center lg:justify-between text-center">
          <div className="flex flex-col items-center lg:p-8">
            <h1 className="text-3xl lg:text-4xl font-black leading-snug capitalize mb-2 lg:p-0 pb-3 lg:pb-3">
              Download <br className="lg:hidden flex" /> the mobile app
            </h1>
            <p className="lg:text-xl text-[14px] max-w-[36.875rem]">
              Send money locally, pay bills globally, receive money, save, pay
              bills and do more with the Tribapay app.
            </p>
            <div className="flex items-center justify-center lg:justify-start lg:mt-[1.87rem] mt-[2.88rem]">
              <div className="flex flex-row gap-4">
                <StoreButton
                  theme={isBusiness ? "dark" : "primary"}
                  store="play-store"
                />
                <StoreButton theme={isBusiness ? "dark" : "primary"} />
              </div>
            </div>
          </div>
          <ScrollAnimation>
            <div className="overflow-hidden flex justify-end">
              <Image
                src={
                  isBusiness
                    ? "/images/business-app-mockup.png"
                    : "/images/mobile-app-mockup.png"
                }
                width={885}
                height={480}
                alt="Iphone 13 Pro Image"
                // className=" lg:h-[22rem] lg:w-[24rem] px-8 md:w-[15rem] w-[20rem]"
              />
            </div>
            {/* <div className="flex lg:hidden justify-center pt-10">
              <Image
                quality={100}
                width={400}
                height={400}
                src="/images/Home4.png"
                alt="Iphone 13 Pro Image"
                className=" lg:h-[22rem] lg:w-[24rem] px-8 md:w-[15rem] w-[20rem]"
              />
            </div> */}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
