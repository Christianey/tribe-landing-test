import React from "react";

export const IconMenu = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect x="0.5" y="0.5" width="20" height="2" rx="1" fill="currentColor" />
      <rect x="0.5" y="5.5" width="20" height="2" rx="1" fill="currentColor" />
      <rect x="0.5" y="10.5" width="20" height="2" rx="1" fill="currentColor" />
    </svg>
  );
};
