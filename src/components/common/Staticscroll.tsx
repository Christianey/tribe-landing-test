"use client";

import React, { useState } from "react";
import Image from "next/image";

interface DataItem {
  count: string;
  heading: string;
  detail: string;
  image: string;
}

interface Props {
  data: DataItem[];
}

const Component: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-container-width flex flex-col md:flex-row">
      <div>
        {data.map((item, index) => (
          <div
            key={item.count}
            style={{ opacity: index === activeIndex ? 1 : 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="">
              <p>{item.count}</p>
              <h2>{item.heading}</h2>
              <p className="max-w-[30rem]">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {data.map((item, index) => (
          <>
            {index === activeIndex && (
              <Image
                src={item.image}
                alt="Get card step"
                aria-label="Get card step"
                width={300}
                height={300}
                role="presentation"
                className="flex-1"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Component;
