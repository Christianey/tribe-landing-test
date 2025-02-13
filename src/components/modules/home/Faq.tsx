import { Button } from "@/components/common/Button";
import { Collapsible } from "@/components/common/Collapsible";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const faqList = [
  {
    id: "1",
    header: "How do I sign up for Tribapay?",
    content:
      "To sign up for Tribapay, simply download the app from the  Playstore or  App store, open it, and follow the guided registration process. It's quick and easy!",
  },
  {
    id: "2",
    header: "Is my personal information secure with Tribapay?",
    content:
      "Yes, absolutely. We prioritize the security of your data. Tribapay employs advanced encryption and security measures to ensure your personal information is safe at all times.",
  },
  {
    id: "3",
    header: "What is a Cashpin and how does it work?",
    content:
      "A Cashpin is a unique encrypted 25 digit code that holds money. It's allows you send and receive money without any need to have the recipient’s account number.",
  },
  {
    id: "4",
    header: "How can I convert airtime to cash using Tribapay?",
    content:
      "Converting airtime to cash is simple with Tribapay. Just select the Airtime to Cash feature, provide all requested info, and execute your transaction. You'll receive the stated equivalent value in cash. ",
  },
];

export const Faq = () => {
  return (
    <ScrollAnimation>
      <div className="max-container-width pb-20">
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
