import { NoticeText } from "@/components/common/NoticeText";
import React from "react";

const steps = [
    "The right to have your personal data rectified or erased or place restrictions on processing your personal data;",
    "The right to object to the processing of your personal data e.g. where the processing is based on our legitimate interests. Please note that this may prevent us from continuing to provide Services to you;",
    "The right to have any information you provided to us on an automated basis returned to you in a structured, commonly used and machine-readable format, or sent directly to another organisation, where technically feasible (“data portability”);",
    "Where the processing of your personal data is based on your consent, the right to withdraw that consent subject to legal or contractual restrictions;",
    "The right to object to any decisions based on the automated processing of your personal data, including profiling; and",
    "The right to lodge a complaint with the supervisory authority responsible for data protection matters."
];

export const RightToData = () => {
  return (
    <div className="max-container-width">
      <div className="py-10 pt-20">
        <h2 className="text-zinc-800 text-3xl lg:text-[40px] font-medium !leading-tight">
          Your Right as a Data Subject
        </h2>
        <p className="py-7 md:text-lg font-medium text-zinc-500 leading-[30px]">
          At Tribapay, customers personal data are protected by legal rights
          enshrined in the Nigeria Data Protection Act 2023, and these rights
          include the following:The right to be told how we use your personal
          data and obtain access to your personal data;
        </p>
        <ul className="pt-6 space-y-3">
          {steps?.map((step, index) => (
            <li className="" key={index}>
              <NoticeText value={step} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
