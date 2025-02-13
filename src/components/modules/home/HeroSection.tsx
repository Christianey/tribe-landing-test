import { StoreButton } from "@/components/common/StoreButton";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#fef1f2] lg:pt-[11.5625rem] md:pt-48 pt-32 max-container-width">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl lg:text-[4.25rem] leading-tight inline-block">
          <span className="text-primary-main">Super Finance App</span> <br />{" "}
          for Africans
        </h1>
        <div className="absolute">
          <Image
            priority={true}
            src="/avatar/User2.svg"
            width={550}
            height={550}
            alt="Hero Image"
            className="lg:h-[6.1875rem] lg:w-[6.1875rem] hidden lg:flex relative lg:top-[0rem] lg:left-[30.5rem]"
          />
        </div>
        <p className="max-w-[40.625rem] mt-5 font-medium lg:text-lg opacity-[0.69]">
          Send money locally, pay bills globally, receive money, save, pay bills
          and do more with the Tribapay app.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-8 lg:mt-[3.75rem] mt-[2.75rem]">
          <StoreButton store="play-store" theme="dark" />
          <StoreButton theme="dark" />
        </div>
        <div className="absolute">
          <Image
            priority={true}
            src="/avatar/User1.svg"
            width={550}
            height={550}
            alt="Hero Image"
            className="lg:h-[7.1875rem] lg:w-[7.1875rem] hidden lg:flex relative top-[13rem] right-[30.5rem]"
          />
        </div>
      </div>
      <div className="flex items-end justify-center lg:mt-16 mt-[65px]">
        <Image
          priority={true}
          src="/images/Home1.png"
          quality={100}
          width={550}
          height={550}
          alt="Hero Image"
          className="lg:h-[19rem] lg:w-[24rem] px-12 w-[15rem] hidden md:flex"
        />
        <Image
          priority={true}
          src="/images/Home4.png"
          width={550}
          height={550}
          alt="Hero Image"
          className=" lg:h-[22rem] lg:w-[24rem] px-8 -mx-16 md:w-[15rem] w-[20rem]"
          quality={100}
        />
        <Image
          priority={true}
          src="/images/Home2.png"
          width={550}
          height={550}
          alt="Hero Image"
          quality={100}
          className="lg:h-[20rem] lg:w-[24rem] w-[15rem] px-12 relative hidden md:flex"
        />
        <div className="absolute">
          <Image
            priority={true}
            src="/avatar/User3.svg"
            width={550}
            height={550}
            alt="Hero Image"
            className="lg:h-[8.1875rem] lg:w-[8.1875rem] md:h-[5.1875rem] md:w-[5.1875rem] h-[5.1875rem] w-[5.1875rem] relative xl:top-[-14rem] xl:left-[28rem] lg:top-[-14rem] lg:left-[28rem] md:top-[-15rem] md:left-[20rem] -top-[210px] left-[115px]"
          />
        </div>
        <div className="absolute">
          <Image
            priority={true}
            width={100}
            height={100}
            quality={100}
            src="/avatar/User2.svg"
            alt="Hero Image"
            className="md:hidden h-[80px] w-[76px] relative -top-[250px] -left-[140px]"
          />
        </div>
      </div>
      <div className="py-10 sm:mt-[3.75rem] flex flex-col sm:flex-row items-center justify-center max-w-5xl mx-auto">
        <Image
          priority={true}
          src="/images/home/Awards.png"
          quality={100}
          width={550}
          height={550}
          alt="Hero Image"
          className="w-[250px] h-[65px] lg:w-[349px] lg:h-[90px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
