import React from "react";

export const Header = () => {
  return (
    <header className="">
      <div className="pt-44 pb-24 md:pb-48">
        <h1 className="max-w-[688px] mx-auto text-center text-zinc-900 text-3xl md:text-5xl lg:text-5xl font-bold !leading-snug">
          Account & Data Deletion Information
        </h1>
      </div>
      <div className="">
        <img
          className="w-full h-[59px] object-cover"
          src="/images/mosaic-banner.svg"
        />
      </div>
    </header>
  );
};
