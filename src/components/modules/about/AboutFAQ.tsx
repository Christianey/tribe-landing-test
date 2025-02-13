import { Button } from "@/components/common/Button";
import { Collapsible } from "@/components/common/Collapsible";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const faqList = [
  {
    id: "1",
    header: "Sign up and complete KYC",
    content: "answer to question 1",
  },
  {
    id: "2",
    header: "Sign up and complete KYC",
    content: "answer to question 2",
  },
  {
    id: "3",
    header: "Sign up and complete KYC",
    content: "answer to question 3",
  },
  {
    id: "4",
    header: "Sign up and complete KYC",
    content: "answer to question 4",
  },
];

const AboutFAQ = () => {
  return (
    <div className="max-container-width pt-20">
      <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
        <h1 className="text-3xl md:text-5xl font-medium text-center flex-1 pb-10">
          Got questions?
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-10 mb-8 lg:px-20">
        {faqList.map((v) => (
          <Collapsible key={v.id} header={v.header} content={v.content} />
        ))}
      </div>
      <div className=" flex justify-center items-center">
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
  );
};

export default AboutFAQ;
