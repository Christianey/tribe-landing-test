import { NoticeText } from "@/components/common/NoticeText";
import React from "react";

const steps = [
  "Log into your Tribapay account via the mobile or web app by entering your login credentials (email, password)",
  "Navigate to the MENU section within the mobile or web app",
  "Tap/click on the “CLOSE ACCOUNT” prompt",
  "Confirm that you would like to proceed with this action",
  "Once confirmed, account and associated data would be subsequently be deleted",
];

export const StepsToDelete = () => {
  return (
    <div className="max-container-width">
      <div className="py-10 pt-20">
        <h2 className="text-zinc-800 text-3xl lg:text-[40px] font-medium !leading-tight">
          Steps To Delete Your Tribapay Account/Data
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
