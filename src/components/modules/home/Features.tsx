import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/common/Button";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import ExpandableComponent from "@/components/common/ExpandableComponent";

const data = [
  {
    id: "1",
    name: "Virtual Dollar Card",
    content:
      "Elevate your financial flexibility with Virtual Dollar Cards. Shop globally and transact online seamlessly with our virtual cards.",
    image: "/images/home/features/vCard.png",
  },
  {
    id: "2",
    name: "Cashpin",
    content:
      "Convert money to a token and surprise your loved ones, or anonymously reward your employees, friends, or associates.",
    image: "/images/home/features/Cashpin.png",
  },
  {
    id: "3",
    name: "Cashpin Wallet",
    content:
      "Plan, Personalise, and budget your spending using Cashpin wallet. Experience the convenience of managing your finances on the go.",

    image: "/images/home/features/Wallet.png",
  },
  {
    id: "4",
    name: "Airtime to Cash",
    content:
      "Transform your unused airtime into tangible cash with our Airtime to Cash feature. Say goodbye to wasted airtime credits. Available to Nigerian Subscribers Only.",

    image: "/images/home/features/AirtimeImage.png",
  },
];

const Features = () => {
  return (
    <section className="pt-[64px] lg:pt-[8.375rem] max-container-width">
      <div className="flex flex-col justify-between items-center">
        <ScrollAnimation>
          <h2 className="max-w-[40.625rem] mx-auto text-center font-bold text-2xl md:text-4xl lg:text-6xl leading-tight ">
            Features That Get You Results
          </h2>
          <p className="max-w-[48.625rem] text-text-gray-text mt-4 lg:mt-6 mb-[5rem] text-center font-medium text-base lg:text-lg font-dm-sans">
            Tribapay empowers you with a suite of dynamic features designed to
            deliver real results. From secure Cashpin transactions to
            transforming airtime into cash, Tribapay ensures your financial
            journey is seamless, efficient, and rewarding.
          </p>
        </ScrollAnimation>
      </div>

      <ExpandableComponent data={data} />

      <Link
        href="https://app.tribapay.com/"
        target="_blank"
        className="flex justify-center mt-[3.8rem]"
      >
        <Button
          rightIcon={
            <Image
              src="/icons/Arrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="w-[1.5rem] h-[1.5rem]"
            />
          }
        >
          Get Started Now
          <span></span>
        </Button>
      </Link>
    </section>
  );
};

export default Features;
