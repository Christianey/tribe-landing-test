import React, { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";

type DataItem = {
  id: string;
  name: string;
  content: string;
  image: string;
};

type DataItemProps = {
  data: DataItem[];
};

const ExpandableComponent = ({ data }: DataItemProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(data[1].id);

  const handleClick = (id: string) => {
    setSelectedId(id);
  };

  return (
    <>
      <div className="md:flex md:flex-row hidden justify-center items-center lg:gap-28 md:gap-10">
        <ScrollAnimation>
          <ul className="flex flex-col gap-4 justify-center items-center">
            {data.map((item) => (
              <li
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`
            ${selectedId === item.id && "shadow-2xl"}
            `}
              >
                {selectedId !== item.id && (
                  <div className="ease-in duration-300 cursor-pointer lg:w-[531px] w-[300px] px-8 py-8 border border-primary-main border-solid rounded-xl  flex flex-row justify-between items-center font-medium lg:text-2xl text-base transition-all">
                    <p className="lg:text-3xl text-base font-bold">
                      {item.name}
                    </p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M27.06 11.9333L18.3667 20.6267C17.34 21.6534 15.66 21.6534 14.6333 20.6267L5.94 11.9333"
                        stroke="#292D32"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                {selectedId === item.id && (
                  <div className="bg-primary-main text-white transition-all ease-in duration-300 rounded-xl cursor-pointer lg:w-[590px] w-[350px] flex flex-col gap-[0.5rem] px-10 py-6">
                    <p className="lg:text-3xl text-base font-bold">
                      {item.name}
                    </p>
                    <p className="max-w-[512px] lg:text-[1.125rem] text-base font-medium leading-tight">
                      {item.content}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </ScrollAnimation>

        {data.map((item) => (
          <>
            {selectedId === item.id && (
              <div className="ease-in duration-300">
                <ScrollAnimation variant="slideUp" className="relative">
                  <Image
                    priority={true}
                    quality={100}
                    src={item.image}
                    width={550}
                    height={550}
                    alt="Hero Image"
                    className="lg:h-[30.5625rem] lg:w-[30rem] md:h-[29rem] md:w-[20rem]"
                  />
                </ScrollAnimation>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="flex flex-col md:hidden justify-center items-center lg:gap-28">
        <ScrollAnimation>
          <ul className="flex flex-col gap-4 justify-center items-center">
            {data.map((item) => (
              <li key={item.id} onClick={() => handleClick(item.id)}>
                {selectedId !== item.id && (
                  <div
                    className={`ease-in duration-300 cursor-pointer md:w-[531px] w-[300px] px-8 py-8 border border-primary-main border-solid rounded-xl flex flex-row justify-between items-center font-medium lg:text-2xl text-base transition-all ${
                      selectedId === item.id ? "bg-primary-main text-white" : ""
                    }`}
                  >
                    <p className="lg:text-3xl text-base font-bold">
                      {item.name}
                    </p>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 33 32"
                      fill="none"
                    >
                      <path
                        d="M27.06 11.9333L18.3667 20.6267C17.34 21.6534 15.66 21.6534 14.6333 20.6267L5.94 11.9333"
                        stroke="#292D32"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                {selectedId === item.id && (
                  <div className="bg-primary-main text-white transition-all ease-in duration-300 rounded-xl cursor-pointer md:w-[590px] w-[350px] flex flex-col gap-[0.5rem] px-10 py-6">
                    <p className="lg:text-3xl text-base font-bold">
                      {item.name}
                    </p>
                    <p className="max-w-[512px] lg:text-[1.125rem] text-base font-medium leading-tight">
                      {item.content}
                    </p>
                  </div>
                )}
                {selectedId === item.id && (
                  <div className="py-[21px] flex justify-center ease-in duration-300">
                    <div>
                      <Image
                        priority={true}
                        src={item.image}
                        width={550}
                        height={550}
                        alt="Hero Image"
                        className="lg:h-[30.5625rem] lg:w-[30rem] h-[20rem] w-[20rem]"
                      />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default ExpandableComponent;
