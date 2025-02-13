import ScrollAnimation from "@/components/common/ScrollAnimation";
import React from "react";
import {
  FiCheckSquare,
  FiGlobe,
  FiKey,
  FiRepeat,
  FiShield,
  FiUserX,
} from "react-icons/fi";

type Feature = {
  icon: React.JSX.Element;
  head: string;
  content: string;
};

type FeatureCardsProps = {
  feature: Feature;
};

const cashpinFeatures = [
  {
    icon: <FiUserX size={32} />,
    head: "Anonymous transactions",
    content:
      "Experience the power of privacy with Cashpin. Send and receive money discreetly, ensuring your transactions are confidential.",
  },
  {
    icon: (
      <FiRepeat className="text-[#7EDFB7] group-hover:text-white" size={32} />
    ),
    head: "Flexibility",
    content:
      "Cashpin offers unparalleled flexibility. Generate multiple unique 25-digit tokens to send money to multiple recipients simultaneously.",
  },
  {
    icon: (
      <FiShield className="text-[#FF6477] group-hover:text-white" size={32} />
    ),
    head: "Security",
    content:
      "Trust is our priority. Cashpin employs cutting-edge cryptographic encryption, safeguarding your funds and sensitive data.",
  },
  {
    icon: (
      <FiGlobe className="text-[#FFDCC4] group-hover:text-white" size={32} />
    ),
    head: "Available Everywhere",
    content:
      "Wherever you are, Cashpin is ready to serve you. Our feature is available around the clock, allowing you to send and receive money at your convenience",
  },
  {
    icon: (
      <FiCheckSquare
        className="text-[#00D3FF] group-hover:text-white"
        size={32}
      />
    ),
    head: "Ease Of Use",
    content:
      "Say goodbye to the hassle of sharing bank account numbers. Cashpin streamlines the process by converting money into a simple 25-digit token.",
  },
  {
    icon: <FiKey className="text-[#FFD900] group-hover:text-white" size={32} />,
    head: "Convenience",
    content:
      "Seamlessly send money to your friends, family, or anyone else with Cashpin's unparalleled convenience. No more waiting in line or dealing with complex processes.",
  },
];

export const Features = () => {
  return (
    <div className="pt-[158px]  max-container-width">
      <div className="">
        <h1 className="text-4xl lg:text-5xl leading-snug block text-center font-bold text-text-dark">
          Gifting money anonymously?
        </h1>
        <p className="text-center text-text-gray  max-w-4xl mx-auto mt-5">
          With cashpin, you can generate a pin for the amount of money you want
          to send to the recepient. The creator can also lock the cashpin so it
          will be inaccessible to a third party umtil the recepient wants to
          redeem it.
        </p>
      </div>

      <div className="pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cashpinFeatures?.map?.((feature, idx) => (
          <FeatureCards feature={feature} key={idx.toString()} />
        ))}
      </div>
    </div>
  );
};

const FeatureCards = ({ feature }: FeatureCardsProps) => {
  return (
    <ScrollAnimation variant="slideUp">
      <div className="h-[320px] lg:h-[300px] relative group shadow-sm bg-white hover:bg-violet-500 transition-all duration-150 rounded-[30px] border border-neutral-50 px-5 py-6">
        <div className="my-5 text-violet-500 group-hover:text-neutral-50">
          {feature?.icon}
        </div>
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <div className=" text-black group-hover:text-neutral-50 text-2xl font-bold capitalize leading-9">
            {feature?.head}
          </div>
          <span className="w-full text-text-gray/80 group-hover:text-neutral-50/80 text-base font-medium leading-normal">
            {feature?.content}
          </span>
        </div>
      </div>
    </ScrollAnimation>
  );
};
