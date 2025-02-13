import React from "react";

export const DontDisturb = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M7.94645 14.6663C11.6131 14.6663 14.6131 11.6663 14.6131 7.99967C14.6131 4.33301 11.6131 1.33301 7.94645 1.33301C4.27979 1.33301 1.27979 4.33301 1.27979 7.99967C1.27979 11.6663 4.27979 14.6663 7.94645 14.6663Z"
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.27979 8H10.6131"
        stroke="#959595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
