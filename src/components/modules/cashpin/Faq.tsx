import { Button } from "@/components/common/Button";
import { Collapsible } from "@/components/common/Collapsible";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const faqList = [
  {
    id: "1",
    header: "How do I get started with Cashpin?",
    content:
      "Getting started is easy! Just download the Tribapay app, register and verify your account, and access the Cashpin feature. From there, you can start generating tokens and enjoying secure transactions.",
  },
  {
    id: "2",
    header: "How does Cashpin work?",
    content: "Cashpin is an innovative feature on the Tribapay app that transforms money into a secure 25-digit token. This token can be sent to others, allowing for anonymous transactions, gifting money discreetly, and more.",
  },
  {
    id: "3",
    header: "Is Cashpin secure?",
    content: "Absolutely. Cashpin prioritizes security by employing state-of-the-art encryption technology. Tokens can also be locked by the creator as an added layer of security and can only be redeemed when unlocked.",
  },
  {
    id: "4",
    header: "Can I send money anonymously?",
    content: "Yes, Cashpin allows you to send money without asking for the recipient’s banking details ie account number. It's the perfect way to gift money anonymously or surprising your friends and loved ones. They can only know how much the token contains after it has being redeemed.",
  },
];

export const Faq = () => {
  return (
    <div className="max-container-width">
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
            <Button rightIcon={
              <Image
                src="/icons/Arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-[1.5rem] h-[1.5rem]"
              />
            }>View all FAQ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
