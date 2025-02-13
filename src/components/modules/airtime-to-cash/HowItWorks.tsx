import ScrollAnimation from "@/components/common/ScrollAnimation";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const steps = [
  {
    count: 1,
    heading: "Sign up and complete KYC",
    detail:
      "Launch the Tribapay app on your device, sign up and complete your KYC and Verification, and log in to your account using your credentials.",
  },
  {
    count: 2,
    heading: "Select Network Provider/Airtime Source",
    detail:
      "Select the network provider (for example, MTN) you want to sell your airtime from and input the corresponding phone number.",
  },
  {
    count: 3,
    heading: "Confirm and Complete Transaction",
    detail:
      "Review the transaction details, including the conversion rate and cash amount. If everything looks correct, confirm the transaction. Proceed to complete your transaction by entering your 4-digit transaction pin. Voila! Money is in your Tribapay wallet.",
  },
];

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="mt-[7.5rem] lg:mt-[148px] max-container-width flex flex-col text-center capitalize items-center justify-cneter">
        <h1 className="lg:text-5xl text-[2rem] font-bold">how to convert airtime to cash</h1>
        <div className="pt-4 lg:text-lg text-base text-text-gray-c">
          Excess or unused airtime? No worries. Trade that airtime for cash in your wallet with these few steps
        </div>
      </div>
      <div className=" flex md:px-20 flex-col lg:flex-row relative md:gap-4 lg:gap-10 max-container-width lg:pt-[4rem]">
        <div className="flex-1">
          <ul className="pt-14 flex flex-col space-y-12">
            <ScrollAnimation>
              {steps.map((step, index) => (
                <li
                  key={step.count.toString()}
                  className="flex gap-4 md:gap-7 mb-12"
                  style={{
                    fontWeight: currentStep === index ? "bold" : "normal",
                    opacity: currentStep === index ? 1 : 0.3,
                    transition: "opacity 0.3s, font-weight 0.3s",
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold text-text-gray-c">{`0${step.count}`}</h2>
                  <div className="flex flex-col">
                    <h1 className=" text-2xl md:text-3xl font-bold">
                      {step.heading}
                    </h1>
                    <p className="pt-4 font-medium text-sm md:text-base">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ScrollAnimation>
          </ul>
        </div>
        <ScrollAnimation>
          <div className="w-full md:w-[500px] lg:h-[500px] h-[400px] flex justify-center mx-auto min-h-full relative">
            <Image
              src="/images/airtime-to-cash/IphoneImage.svg"
              alt="Get card step"
              aria-label="Get card step"
              fill
              role="presentation"
              className="absolute top-0 object-contain"
            />
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default HowItWorks;
