import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="max-container-width pt-36 lg:pt-48 flex flex-col justify-center items-center text-text-default">
      <h1 className="font-semibold lg:text-6xl text-4xl text-center leading-snug capitalize">
        The Best of hands
      </h1>
      <p className="pt-4 md:w-[41.125rem] text-base lg:text-xl text-center font-medium opacity-[0.699] text-primaryBlack-default/60">
        At Tribapay, our seasoned team of experts is dedicated to guiding you on
        your journey with knowledge, experience, and a commitment to ensuring
        your financial success.
      </p>
      <div className="mt-10 w-full h-[350px] md:h-[550px] border shadow-2xl relative rounded-2xl">
        <Image
          src="/images/team/part.png"
          quality={100}
          fill
          alt="Team"
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
