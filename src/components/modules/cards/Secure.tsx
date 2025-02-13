/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Secure = () => {
  return (
    <section className="pt-[5rem] pb-[1px] bg-primary-dark dark-custom text-white max-container-width">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="text-center md:text-left flex-1 self-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Accepted Globally{" "}
          </h1>
          <p className="text-base text-text-white md:text-lg lg:text-xl max-w-[40rem]">
            Tribapay Virtual Cards are your passport to hassle-free payments around the globe. From local shops to international websites, enjoy universal acceptance wherever your journey takes you.
          </p>
        </div>
        <Image
        width={100}
        height={100}
        quality={100}
         src="/images/cards/secure/Large1.svg"
          alt="Hero Image"
          className="w-full h-full hidden md:flex"
        />
        <Image 
        width={100}
        height={100}
        quality={100}
         src="/images/cards/secure/Image1.png"
          alt="Hero Image"
          className="w-full h-full flex md:hidden"
        />
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-10 mb-20">
      <div className="text-center md:text-left md:flex-col flex-1 self-center md:w-1/2">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
      Safe & Secure
    </h1>
    <p className="text-base text-text-white md:text-lg lg:text-xl">
      Experience the ultimate blend of convenience and security with Tribapay's Virtual Cards. Shop online, pay bills & subscriptions, and make international payments with confidence, knowing your transactions are protected every step of the way.
    </p>
  </div>
  
  <div className="hidden md:flex text-center md:text-right md:w-1/2">
    <Image
    width={100}
    height={100}
    quality={100}
      src="/images/cards/secure/Large2.svg"
      alt="Hero Image"
      className="w-full h-full"

    />
  </div>
  <div className="flex md:hidden text-center md:text-right md:w-1/2">
    <Image
    width={100}
    height={100}
    quality={100}
      src="/images/cards/secure/Image2.png"
      alt="Hero Image"
      className="w-full h-full"
    />
  </div>
</div>

    </section>
  );
};

export default Secure;
