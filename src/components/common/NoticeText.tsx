import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {
  value: string;
};

export const NoticeText = ({ value }: Props) => {
  return (
    <div className=" justify-start items-start gap-4 inline-flex">
      <div className="w-6 h-6 justify-center items-center flex">
        <div className=" relative pt-1">
          <BsFillArrowRightCircleFill className="w-5 h-5 " />
        </div>
      </div>
      <div className="text-zinc-500 text-sm md:text-base font-medium leading-[30px]">
        {value}
      </div>
    </div>
  );
};
