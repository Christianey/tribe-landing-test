"use client";

import { StoreButton } from "@/components/common/StoreButton";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { forwardRef, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Cashpin",
    desc: "Cashpin is a 25 digit token generated in replacement of cash. It can be redeemed in any country where tribapay is active. Cashpin also has a wallet function which allows users to save money in different wallets",
    img: "/images/cashpin-feature.png",
    bgColor: "bg-white",
  },
  {
    title: "Dollar Card",
    desc: "Cashpin is a 25 digit token generated in replacement of cash. It can be redeemed in any country where tribapay is active. Cashpin also has a wallet function which allows users to save money in different wallets",
    img: "/images/dollar-card-feature.png",
    bgColor: "bg-[#FDF0F0]",
    // textColor: "text-white",
  },
  {
    title: "Savings",
    desc: "Cashpin is a 25 digit token generated in replacement of cash. It can be redeemed in any country where tribapay is active. Cashpin also has a wallet function which allows users to save money in different wallets",
    img: "/images/cashpin-feature.png",
    bgColor: "bg-[#ECFAFD]",
    // textColor: "text-white",
  },
  {
    title: "Pay Bills",
    desc: "Cashpin is a 25 digit token generated in replacement of cash. It can be redeemed in any country where tribapay is active. Cashpin also has a wallet function which allows users to save money in different wallets",
    img: "/images/cashpin-feature.png",
    bgColor: "bg-[#F8DBF4]",
    // textColor: "text-white",
  },

  {
    title: "Payment Link",
    desc: "Cashpin is a 25 digit token generated in replacement of cash. It can be redeemed in any country where tribapay is active. Cashpin also has a wallet function which allows users to save money in different wallets",
    img: "/images/cashpin-feature.png",
    bgColor: "bg-[#9672FF]",
    textColor: "text-white",
  },
];

const Feature = forwardRef<
  HTMLDivElement,
  { feature: (typeof features)[number] }
>(({ feature }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        "flex flex-col p-14 gap-6 h-[80dvh]",
        feature.bgColor
      )}
    >
      <div className="flex justify-center">
        <Image
          src={feature.img}
          alt={feature.title}
          width={332}
          height={550}
          className="w-auto"
        />
      </div>
      <h3 className={classNames("text-2xl font-semibold", feature?.textColor)}>
        {feature.title}
      </h3>
      <p className={classNames("font-dm-sans", feature?.textColor)}>{feature.desc}</p>
    </div>
  );
});

Feature.displayName = "Feature";

const FeaturesNew = () => {
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const rightColumnRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(leftColumnRef.current, {
      scrollTrigger: {
        trigger: rightColumnRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColumnRef.current,
        scrub: true,
      },
    });
  });

  return (
    <div>
      {/* Two Column Layout */}
      <div className="flex min-h-screen">
        {/* Fixed Column */}
        <div
          ref={leftColumnRef}
          className="hidden lg:flex w-full lg:w-1/2 p-8 bg-gray-100 justify-center flex-col gap-4 h-screen"
        >
          <h2 className="text-5xl font-bold">Features that get you results</h2>
          <p className="font-dm-sans">
            Tribapay empowers you with a suite of dynamic features designed to
            deliver real results. From secure Cashpin transactions to
            transforming airtime into cash, Tribapay ensures your financial
            journey is seamless, efficient, and rewarding.
          </p>
          <div className="flex gap-2">
            <StoreButton theme="primary" />
            <StoreButton theme="primary" store="play-store" />
          </div>
        </div>

        {/* Scrollable Column */}
        <div
          ref={rightColumnRef}
          className="w-full lg:w-1/2 flex flex-col"
          data-scroll
          data-scroll-speed="1"
        >
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              feature={feature}
              ref={(el) => {
                if (el) featureRefs.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesNew;
