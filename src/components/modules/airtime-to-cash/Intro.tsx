"use client";
import { Button } from "@/components/common/Button";
import { DontDisturb } from "@/components/icon/DontDisturb";
import { PlayButton } from "@/components/icon/PlayButton";
import Link from "next/link";
import React, { useState } from "react";

const Intro = () => {
  const [number, setNumber] = useState(1000);
  const [result, setResult] = useState<number | null>(800);

  const convert = (e: {
    preventDefault: () => void;
    target: { value: any };
  }) => {
    e.preventDefault();
    let value = e.target.value;
    if (value.startsWith("0")) {
      value = value.slice(1);
    }
    if (value === "") {
      value = "0";
    }
    if (Number.isInteger(Number(value)) && Number(value) >= 100) {
      setNumber(value);
      setResult(Math.floor(value * 0.8));
    } else {
      setNumber(value);
      setResult(0);
    }
  };

  return (
    <>
      <div className="bg-primary-deepIndigo lg:flex hidden">
        <div className="max-container-width pt-[80px]">
          <div
            className="bg-small-screen pt-12 bg-no-repeat"
            // style={{
            //   backgroundImage: `url("/images/HeroSectionRing.svg")`,
            //   backgroundPosition: "right",
            // }}
          >
            <div className=" flex flex-col lg:flex-row items-center justify-center relative gap-10 md:gap-4 lg:gap-10 py-20 bg-contain">
              <div className="w-full text-white">
                <p className="opacity-70 text-center lg:text-left text-neutral-50 md:text-xl py-2 font-medium leading-normal">
                  Airtime to cash
                </p>
                <h1 className="text-3xl font-bold capitalize hidden lg:block text-text pb-5 md:text-[3.5rem] !leading-snug">
                  Sell your airtime
                  <br />
                  <span className="font-bold text-opacity-100">
                    and get cash
                  </span>
                </h1>
                <h1 className="text-4xl capitalize block lg:hidden text-center font-bold text-text pt-4 lg:pt-10 pb-5 md:text-5xl lg:text-7xl">
                  Sell your airtime
                  <br />
                  <span className="font-bold text-opacity-100 px-2">
                    and get cash
                  </span>
                </h1>
                <div className="flex lg:justify-start justify-center items-center">
                  <p className="max-w-[37.125rem] lg:mt-2 mt-2 text-xl text-center lg:text-left lg:text-xl text-text-white">
                    Excess or unused airtime? No worries. Trade that airtime for
                    money in your wallet at the click of a button on the
                    Tribapay app.
                  </p>
                </div>

                <Link
                  target="_blank"
                  href="https://www.youtube.com/embed/E2_zKv_--0w"
                >
                  <div className="flex justify-center lg:justify-start">
                    <div className="flex flex-row items-center justify-center bg-white w-[10.8rem] rounded-md lg:justify-start gap-3 mt-12 px-2 py-2.5">
                      <PlayButton className="bg-[#EFEFEF] w-6 h-6 rounded-full" />
                      <p className="text-lg font-bold text-primary-main">
                        Watch video
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="lg:display-inherit lg:ml-auto w-full">
                <div className=" w-full sm:h-[500px] lg:pl-20 md:mt-24 lg:mt-0 lg:ml-0 lg:mb-0 mb-[-20px]">
                  <div className="px-4 lg:px-9 py-[1.69rem] lg:py-[3.19rem] bg-white rounded-2xl shadow-2xl">
                    <div className="bg-[#F1EFFF] flex flex-row justify-between items-center rounded-lg md:p-6 p-4 py-5 lg:gap-[3rem]">
                      <label
                        htmlFor="input-field"
                        className="text-black w-[151px] text-lg lg:text-base font-medium"
                      >
                        Your airtime:
                      </label>
                      <input
                        className="bg-transparent text-black text-right lg:text-2xl text-lg font-bold lg:w-52 w-32 focus:outline-none focus:border-none"
                        type="number"
                        value={number}
                        onChange={convert}
                        pattern="^[0-9]*$"
                        title="Your airtime"
                        placeholder="Enter airtime amount"
                      />
                    </div>
                    <div className="my-6 text-xs lg:text-base flex flex-row justify-between items-center text-[#959595]">
                      <p>Amount we charge</p>
                      <div className="flex items-center gap-2">
                        <DontDisturb />
                        20%
                      </div>
                    </div>
                    <div className="bg-[#F1EFFF] flex flex-row justify-between items-center rounded-lg md:p-6 p-4 py-5 lg:gap-[2.94rem]">
                      <label
                        htmlFor="input-field"
                        className="text-black text-lg lg:text-base font-medium"
                      >
                        Amount you will get:
                      </label>
                      {result !== null && (
                        <p className=" text-black text-right lg:text-2xl text-lg font-bold lg:w-32 w-18">
                          {result}
                        </p>
                      )}
                    </div>
                    <div className="mt-6 text-[#959595] text-left text-xs lg:text-base">
                      <p>Estimated delivery time</p>
                      <p className="mt-4 mb-6 ">
                        Note: this charge/conversion fee is for all networks
                      </p>
                    </div>
                    <Link href="https://app.tribapay.com" target="_blank">
                      <Button className="w-full">Convert</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-small-screen pt-12 bg-primary-deepIndigo bg-no-repeat lg:hidden block"
        // style={{
        //   backgroundImage: `url("/images/HeroSectionRing.svg")`,
        //   backgroundPosition: "bottom right",
        // }}
      >
        <div className=" flex flex-col lg:flex-row items-center justify-center relative gap-10 md:gap-4 lg:gap-10 max-container-width lg:pt-36 py-20 bg-contain">
          <div className="w-full text-white">
            <p className="opacity-70 text-center lg:text-left text-neutral-50 md:text-xl py-2 font-medium leading-normal">
              Airtime to cash
            </p>
            <h1 className="text-3xl font-bold capitalize hidden lg:block text-text pb-5 md:text-[3.5rem] !leading-snug">
              Sell your airtime
              <br />
              <span className="font-bold text-opacity-100">and get cash</span>
            </h1>
            <h1 className="text-4xl capitalize block lg:hidden text-center font-bold text-text pt-4 lg:pt-10 pb-5 md:text-5xl lg:text-7xl">
              Sell your airtime
              <br />
              <span className="font-bold text-opacity-100 px-2">
                and get cash
              </span>
            </h1>
            <div className="flex lg:justify-start justify-center items-center">
              <p className="max-w-[37.125rem] lg:mt-2 mt-2 text-base text-center lg:text-left lg:text-xl text-text-white font-medium">
                Excess or unused airtime? No worries. Trade that airtime for
                money in your wallet at the click of a button on the Tribapay
                app.
              </p>
            </div>
            <Link
              target="_blank"
              href="https://www.youtube.com/embed/E2_zKv_--0w"
            >
              <div className="flex justify-center lg:justify-start">
                <div className="flex flex-row items-center justify-center bg-white w-[10.8rem] rounded-md lg:justify-start gap-3 mt-12 px-2 py-2.5">
                  <PlayButton className="bg-[#EFEFEF] w-6 h-6 rounded-full" />
                  <p className="text-lg font-bold text-primary-main">
                    Watch video
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="display-inherit w-full">
            <div className=" w-full sm:h-[500px] lg:pl-20 mt-24 lg:mt-0 lg:ml-0 lg:mb-0 mb-[-20px]">
              <div className="px-4 lg:px-9 py-[1.69rem] lg:py-[3.19rem] bg-white rounded-2xl shadow-2xl">
                <div className="bg-[#F1EFFF] flex flex-row justify-between items-center rounded-lg md:p-6 p-4 py-5 lg:gap-[3rem]">
                  <label
                    htmlFor="input-field"
                    className="text-black w-[151px] text-lg lg:text-base font-medium"
                  >
                    Your airtime:
                  </label>
                  <input
                    className="bg-transparent text-black text-right lg:text-2xl text-lg font-bold lg:w-52 w-32 focus:outline-none focus:border-none"
                    type="number"
                    value={number}
                    onChange={convert}
                    pattern="^[0-9]*$"
                    title="Your airtime"
                    placeholder="Enter airtime amount"
                  />
                </div>
                <div className="my-6 text-xs lg:text-base flex flex-row justify-between items-center text-[#959595]">
                  <p>Amount we charge</p>
                  <div className="flex items-center gap-2">
                    <DontDisturb />
                    20%
                  </div>
                </div>
                <div className="bg-[#F1EFFF] flex flex-row justify-between items-center rounded-lg md:p-6 p-4 py-5 lg:gap-[2.94rem]">
                  <label
                    htmlFor="input-field"
                    className="text-black text-lg lg:text-base font-medium"
                  >
                    Amount you will get:
                  </label>
                  {result !== null && (
                    <p className=" text-black text-right lg:text-2xl text-lg font-bold lg:w-32 w-18">
                      {result}
                    </p>
                  )}
                </div>
                <div className="mt-6 text-[#959595] text-left text-xs lg:text-base">
                  <p>Estimated delivery time</p>
                  <p className="mt-4 mb-6 ">
                    Note: this charge/conversion fee is for all networks
                  </p>
                </div>
                <Link href="https://app.tribapay.com" target="_blank">
                  <Button className="w-full">Convert</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
