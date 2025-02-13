import { NoticeText } from "@/components/common/NoticeText";
import React from "react";

const steps = [
  "If the data is not required anymore for statutory or contractual obligations, your data will be deleted.If you choose to delete your Tribapay account, we will delete any data you have previously given us. However this is subject to the retention regulations that apply to such data in accordance with the provisions of the h Nigeria Data Protection Act, 2023.",
];

export const Deletion = () => {
  return (
    <div className="max-container-width">
      <div className=" pt-20">
        <h2 className="text-zinc-800 text-3xl lg:text-[40px] font-medium !leading-tight">
          DELETING OF DATA
        </h2>
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
