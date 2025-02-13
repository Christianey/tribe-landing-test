/* eslint-disable react/no-unescaped-entities */
import { StoreButton } from "@/components/common/StoreButton";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <div className="max-container-width pt-[80px]">
          <div
            className="bg-small-screen py-16 bg-no-repeat text-text-dak"
            // style={{
            //   backgroundImage: `url("/images/HeroSectionRing.svg")`,
            //   backgroundPosition: "right",
            // }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center relative gap-10 md:gap-4 lg:pt-0 pt-20 ">
              <div>
                <p className="text-text-gray-text opacity-70 text-center lg:text-left md:text-xl py-2 font-medium leading-normal">
                  Virtual Dollar Card{" "}
                </p>
                <h1 className="text-4xl capitalize block lg:text-left text-center font-bold text-text pt-4 lg:pt-0 pb-5 md:text-5xl lg:text-6xl !leading-snug">
                  an Easier way <br />
                  <span className="font-bold text-opacity-100">
                    To Spend Globally
                  </span>
                </h1>
                <p className="max-w-[573px] text-primaryBlack-default/60 pb-5 lg:mt-2 mt-2 text-xl text-center lg:text-left lg:text-xl font-medium">
                  Unlock seamless international transactions with Tribapay's
                  Virtual Cards. Shop, pay, and indulge without any hassle.
                  Simplify your global spending experience today.
                </p>
                <div className="flex mt-5 gap-4 justify-center lg:justify-start">
                  <div className="bg-white border border-primary-main border-solid rounded-[10px] py-1 px-2">
                    <StoreButton store="play-store" />
                  </div>
                  <div className="bg-white border border-primary-main border-solid rounded-[10px] py-1 px-2">
                    <StoreButton />
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-center relative lg:left-6">
                <Image
                  src="/images/cards/MainCardImage.png"
                  width={500}
                  height={500}
                  quality={100}
                  alt="Card Image"
                  aria-label="Card"
                  role="presentation"
                  className="lg:w-[600px] lg:h-[35rem] md:h-[30rem] h-[39rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="-mb-20 bg-small-screen pt-24  bg-no-repeat text-text-dark lg:hidden block"
        // style={{
        //   backgroundImage: `url("/images/hero-parttern.svg")`,
        //   backgroundPosition: "bottom right",
        // }}
      >
        <div className="flex flex-col lg:flex-row relative gap-10 md:gap-4 lg:gap-10 max-container-width lg:pt-28 pt-20 md:pb-[70px] lg:pb-0">
          <div className="">
            <p className="text-text-gray-text opacity-70 text-center lg:text-left md:text-xl py-2 font-medium leading-normal">
              Virtual Dollar Card{" "}
            </p>
            <h1 className="text-4xl capitalize block lg:text-left text-center font-bold text-text pt-4 lg:pt-0 pb-5 md:text-5xl lg:text-6xl !leading-snug">
              an Easier way
              <br />
              <span className="font-bold text-opacity-100">
                To Spend Globally
              </span>
            </h1>
            <p className=" text-text-gray-text pb-5 lg:mt-2 mt-2 text-base text-center lg:text-left lg:text-xl font-medium">
              Unlock seamless international transactions with Tribapay's Virtual
              Cards. Shop, pay, and indulge without any hassle. Simplify your
              global spending experience today.
            </p>
            <div className="flex mt-5 gap-4 justify-center lg:justify-start">
              <div className="bg-white border border-primary-main border-solid rounded-[10px] py-1 px-2">
                <StoreButton store="play-store" />
              </div>
              <div className="bg-white border border-primary-main border-solid rounded-[10px] py-1 px-2">
                <StoreButton />
              </div>
            </div>
          </div>

          <div className="md:flex hidden items-start justify-center relative lg:left-6">
            <Image
              src="/images/cards/MainCardImage.png"
              width={500}
              height={500}
              quality={100}
              alt="Card Image"
              aria-label="Card"
              role="presentation"
              className="lg:w-[600px] lg:h-[35rem] md:h-[30rem] h-[39rem]"
            />
          </div>

          <div className="flex md:hidden items-start w-full lg:-mt-28 md:-mt-0 -mt-12 !sm:w-[500px] sm:h-[500px] justify-center min-h-full relative">
            <Image
              width={100}
              height={100}
              quality={100}
              src="/images/cards/CardImage1.png"
              alt="Card Image"
              aria-label="Card"
              role="presentation"
              className="w-full h-full md:w-[308px] mb-20 md:mb-40"
            />
          </div>
        </div>
      </div>
    </>
  );
};
