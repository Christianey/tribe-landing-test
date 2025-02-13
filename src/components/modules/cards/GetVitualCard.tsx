import React, { useEffect, useState } from "react";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import Image from "next/image";

const data = [
  {
    count: "01",
    heading: "Sign Up or Log In",
    detail: "If you're new to Tribapay, sign up, complete your KYC and verify your account. If you're an existing user, simply log in to your account.",
    image: "/images/airtime-to-cash/IphoneImage2.svg",
  },
  {
    count: "02",
    heading: "Create/Purchase Virtual Card",
    detail:
      "Proceed to create your selected virtual card by  paying a non-refundable nominal fee for your selected card type. Price is set in USD ($$) but you’ll be charged and debited in your local currency (for example, Naira) from your Tribapay wallet.",
    image: "/images/airtime-to-cash/IphoneImage2.svg",
  },
  {
    count: "03",
    heading: "Start Using Your Virtual Card",
    detail:
      "Congratulations! Your Tribapay Virtual Card is now ready to use. Simply enter the card details during checkout on any website or platform that accepts card payments",
    image: "/images/airtime-to-cash/IphoneImage2.svg",
  },
];

const GetVitualCard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % data.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="md:mt-[10rem] mt-[64px] pb-4 max-container-width flex flex-col items-center justify-center">
      <h1 className="lg:text-5xl capitalize text-center text-[2rem] font-bold">
          How to get a <br className="md:hidden"/> virtual card
        </h1>
        <div className="pt-4 lg:text-lg text-base text-primaryBlack-default/50">
          Steps on getting a tribapay virtual card
        </div>
        {/* <Staticscroll data={data} /> */}
      </div>
      <div className=" flex md:px-20 flex-col lg:flex-row relative md:gap-4 lg:gap-10 max-container-width">
        <div className="flex-1">
          <ul className="pt-14 flex flex-col space-y-12">
            <ScrollAnimation>
              {data.map((step, index) => (
                <li
                  key={step.count.toString()}
                  className="flex gap-4 md:gap-7 mb-12"
                  style={{
                    fontWeight: currentStep === index ? "bold" : "normal",
                    opacity: currentStep === index ? 1 : 0.3,
                    transition: "opacity 0.3s, font-weight 0.3s",
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold text-text-gray-c">{`${step.count}`}</h2>
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
          <div className="w-full md:w-[500px] lg:h-[500px] h-[400px] lg:flex hidden justify-center mx-auto min-h-full relative">
            <Image
            width={100}
            height={100}
            quality={100}
              src="/images/virtual-card/IphoneMockup.svg"
              alt="Get card step"
              aria-label="Get card step"
              role="presentation"
              className="w-full h-full absolute top-0 object-contain"
            />
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="w-full md:w-[500px] lg:h-[500px] h-[400px] flex lg:hidden justify-center mx-auto min-h-full relative">
            <Image
            width={100}
            height={100}
            quality={100}
              src="/images/virtual-card/IphoneSm.png"
              alt="Get card step"
              aria-label="Get card step"
              role="presentation"
              className="w-full h-full absolute top-0 object-contain"
            />
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default GetVitualCard;
