import { Button } from "@/components/common/Button";
import { Collapsible } from "@/components/common/Collapsible";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const faqList = [
  {
    id: "1",
    header: "What is a Tribapay Virtual Card?",
    content:
      "Tribapay Virtual Card is a digital virtual prepaid card that you can use for online transactions and international payments.",
  },
  {
    id: "2",
    header: "How do I get a Tribapay Virtual Card?",
    content:
      "Log in to your Tribapay account, access your dashboard, and select the Card option. Follow the prompts to get your virtual card.",
  },
  {
    id: "3",
    header: " Can I use the virtual card for international transactions?",
    content:
      "Yes, Tribapay Virtual Cards are accepted globally, making them ideal for international purchases.",
  },
  {
    id: "4",
    header: "Are there different types of Tribapay Virtual Cards?",
    content:
      "Yes, Tribapay offers various virtual card types tailored to different needs, such as online shopping or travel.",
  },
];

export const Faq = () => {
  return (
    <ScrollAnimation>
      <div className="max-container-width pt-20 lg:pt-[204px]">
        <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <h1 className="text-3xl md:text-5xl font-medium text-center flex-1 pb-10">
            Got questions?
          </h1>
        </div>
        <div className="flex flex-col gap-4 mt-10 mb-2 lg:px-20">
          {faqList.map((v) => (
            <Collapsible key={v.id} header={v.header} content={v.content} />
          ))}
          <div className=" flex justify-center items-center mt-8">
            <Link href="/faq">
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
                View all FAQ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
