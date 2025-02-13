/* eslint-disable react/no-unescaped-entities */

import ScrollAnimation from "@/components/common/ScrollAnimation";
import Image from "next/image";

const Empowering = () => {
  return (
    <section className="my-20 bg-[#9672FF]">
      <ScrollAnimation>
        <div className="">
          <div className="max-container-width py-24 col-span-3">
            <h3 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl !leading-snug mb-4">
              Partnering <br />
              with amazing businesses
            </h3>
            <p className="max-w-[627px] text-white text-sm md:text-lg lg:text-xl font-medium leading-normal">
              We're proud to be a catalyst for business success, helping
              businesses and individuals in Africa and beyond unlock their full
              potential.
            </p>
          </div>
          {/* 
          <div className="col-span-2 flex flex-row items-center justify-between">
            <div className="p-4 bg-yellow-400 ">
              <Image src="/images/MTN.png" width={150} height={150} alt={""} />
            </div>
            <Image src="/images/Kuda.png" width={150} height={150} alt={""} />
            <Image
              src="/images/Showmax.png"
              width={150}
              height={150}
              alt={""}
            />
          </div> */}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Empowering;
