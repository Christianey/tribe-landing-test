import { Button } from "@/components/common/Button";
import { Collapsible } from "@/components/common/Collapsible";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const faqList = [
  {
    id: "1",
    header: "What is the Airtime to Cash feature?",
    content: "The Airtime to Cash feature allows you to convert your unused mobile airtime balance into real cash that can be deposited into your bank account or wallet.",
  },
  {
    id: "2",
    header: " Is this feature available for all mobile carriers?",
    content: "Yes, the Airtime to Cash feature supports airtime conversions from selected network providers.",
  },
  {
    id: "3",
    header: "Would there be any charges for the airtime I sell?",
    content:
      "Yes, we will charge you a 20% commission, so that we can make some money to pay our own bills",
  },
  {
    id: "4",
    header: "Are there any fees associated with this service?",
    content: "There might be a nominal processing fee associated with the airtime to cash conversion. The exact fee will be shown to you during the conversion process.",
  },
];

export const Faq = () => {
  return (
    <ScrollAnimation>
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
