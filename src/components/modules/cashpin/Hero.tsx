import { StoreButton } from "@/components/common/StoreButton";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="bg-primary-main hidden lg:flex">
        <div className="max-container-width pt-[80px]">
          <div
            className="bg-small-screen pt-24 bg-no-rep"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%231a0a33' fill-opacity='0.06'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              // backdropFilter: "opacity(100%)",
            }}
            // style={{
            //   backgroundImage: `url("/images/hero-parttern.svg")`,
            //   backgroundPosition: "bottom right",
            // }}
          >
            <div className="flex flex-col lg:flex-row relative gap-10 md:gap-4 lg:pt-14">
              <div className="text-white">
                <div className="py-10 block lg:hidden">
                  <p className="opacity-70 text-center text-neutral-50 text-base font-medium leading-normal">
                    Cashpin
                  </p>
                </div>
                <h1 className="text-3xl hidden lg:block text-text pt-4 md:pt-10 pb-5 md:text-6xl !leading-snug font-medium">
                  Everyone’s <br />
                  <span className="font-bold text-opacity-100">
                    favourite 25 digits
                  </span>
                </h1>
                <h1 className="text-3xl block lg:hidden text-center font-bold text-text pt-4 lg:pt-10 pb-5 md:text-4xl lg:text-6xl !leading-snug">
                  Everyone’s <br /> favourite
                  <span className="font-bold text-opacity-100 px-2">
                    25 digits
                  </span>
                </h1>
                <p className="py-2 text-center lg:text-left text-white sm:text-xl md:max-w-lg mx-auto lg:mx-0">
                  The ultimate solution for secure and anonymous money transfer,
                  just as the name implies (Cash in a pin)
                </p>
                <div className="flex mt-5 gap-4 justify-center lg:justify-start">
                  <StoreButton store="play-store" />
                  <StoreButton />
                </div>
              </div>

              <div className="w-full sm:w-[500px] h-[420px] lg:h-[500px] flex justify-center ml-auto min-h-full relative lg:left-[2.0rem]">
                <Image
                  priority={true}
                  src="/images/cashpin/cashpin.svg"
                  alt="create cashpin"
                  aria-label="cashpin"
                  fill
                  role="presentation"
                  className="absolute top-0 object-contain"
                />
                <div className="absolute -right-2 md:left-0 -bottom-10 md:bottom-10 w-60 sm:w-64 h-44">
                  <Image
                    priority={true}
                    src="/images/cashpin/cashpin-step-small.png"
                    alt="create cashpin"
                    aria-label="cashpin"
                    quality={100}
                    fill
                    role="presentation"
                    className="absolute top-0 object-contain"
                  />
                </div>
                <div className="lg:h-[155.325px] lg:w-[155.325px] h-[8.1875rem] w-[8.1875rem] right-0 md:right-12 lg:right-8 -top-[1.5rem] absolute">
                  <Image
                    priority={true}
                    src="/avatar/User3.svg"
                    alt="create cashpin"
                    aria-label="cashpin"
                    fill
                    role="presentation"
                    className="absolute top-0 object-contain p-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-small-screen pt-24 bg-primary-main bg-no-repeat lg:hidden block"
        // style={{
        //   backgroundImage: `url("/images/hero-parttern.svg")`,
        //   backgroundPosition: "bottom right",
        // }}
      >
        <div className=" flex flex-col lg:flex-row relative gap-10 md:gap-4 lg:gap-10 max-container-width lg:pt-28">
          <div className="text-white">
            <div className="pt-10 pb-5 block lg:hidden">
              <p className="opacity-70 text-center text-neutral-50 text-base font-medium leading-normal">
                Cashpin
              </p>
            </div>
            <h1 className="text-3xl hidden lg:block text-text pt-4 md:pt-10 pb-5 md:text-6xl !leading-snug font-medium">
              Everyone’s favourite <br />
              <span className="font-bold text-opacity-100">25 digits</span>
            </h1>
            <h1 className="text-3xl block lg:hidden text-center font-bold text-text  lg:pt-10 pb-5 md:text-4xl lg:text-6xl !leading-snug">
              Everyone’s <br /> favourite
              <span className="font-bold text-opacity-100 px-2">25 digits</span>
            </h1>
            <p className="py-2 text-center lg:text-left text-white sm:text-xl md:max-w-lg mx-auto lg:mx-0">
              The ultimate solution for secure and anonymous money transfer,
              just as the name implies (Cash in a pin)
            </p>
            <div className="flex mt-5 gap-4 justify-center lg:justify-start">
              <StoreButton store="play-store" />
              <StoreButton />
            </div>
          </div>

          <div className="w-full sm:w-[500px] h-[330px] md:h-[400px] flex justify-center mx-auto min-h-full relative lg:left-[12rem]">
            <Image
              priority={true}
              src="/images/cashpin/cashpin.png"
              quality={100}
              alt="create cashpin"
              aria-label="cashpin"
              fill
              role="presentation"
              className="absolute top-0 sm:object-contain"
            />
            <div className="absolute -right-2 md:left-0 -bottom-10 md:bottom-10 w-60 sm:w-64 h-44">
              <Image
                priority={true}
                src="/images/cashpin/cashpin-step-small.png"
                quality={100}
                alt="create cashpin"
                aria-label="cashpin"
                fill
                role="presentation"
                className="absolute top-0 object-contain"
              />
            </div>
            <div className="lg:h-[8.1875rem] lg:w-[8.1875rem] h-[8.1875rem] w-[8.1875rem] right-0 md:right-12 -top-[1.5rem] absolute ">
              <Image
                priority={true}
                src="/avatar/User3.svg"
                quality={100}
                alt="create cashpin"
                aria-label="cashpin"
                fill
                role="presentation"
                className="absolute top-0 object-contain p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
