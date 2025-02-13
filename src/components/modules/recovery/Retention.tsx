import { NoticeText } from "@/components/common/NoticeText";
import React from "react";

const steps = [
  "We will not retain your personal data for longer than is necessary for the purposes for which such personal data is collected and processed. This implies that your personal data will only be retained for as long as it is still required to provide you with the Services or is necessary for legal reasons. When calculating the appropriate retention period of your personal data we consider the nature and sensitivity of the personal data, the purposes for which we are processing such personal data, and any applicable statutory/regulatory retention periods.",
  "When we ascertain that personal data can no longer be retained or where you request that we delete your personal data in accordance with your rights contained in the Nigeria Data Protection Act, 2023, we ensure that such personal data is securely deleted, anonymized or destroyed. However, please note that, in some circumstances we may decide to retain your personal data as may be reasonably necessary in accordance with the provisions of the Nigeria Data Protection Act, 2023. In such circumstances, your personal data will be anonymized before retaining same.",
];

export const Retention = () => {
  return (
    <div className="max-container-width">
      <div className="py-10 pt-20">
        <h2 className="text-zinc-800 text-3xl lg:text-[40px] font-medium !leading-tight">
          RETENTION OF YOUR DATA
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
