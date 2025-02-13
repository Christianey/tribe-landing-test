import React from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const DefineUs = () => {
  return (
    <section className="max-container-width mt-20 lg:mt-28">
      <h1 className="font-semibold text-center lg:text-6xl text-4xl leading-snug capitalize">
        What defines us
      </h1>
      <div className="flex lg:flex-row flex-col gap-6 lg:mt-10 mt-6">
        <ScrollAnimation variant="slideUp">
          <div className="bg-white p-10 rounded-[20px]">
            <Image
              src="/icons/notifications.svg"
              width={100}
              height={100}
              alt={"notification icon"}
              className="w-10 h-10"
            />
            <h3 className="w-[80%] text-3xl font-bold capitalize leading-normal my-4">
              Possibility mentality
            </h3>
            <p className="text-text-gray-text text-base leading-normal">
              Our possibility mentality is the driving force behind our culture
              of innovation. At Tribapay, we believe in pushing boundaries and
              exploring new horizons. Our team of forward-thinkers is committed
              to turning possibilities into realities for a brighter financial
              landscape.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation>
          <div className="bg-white p-10 rounded-lg">
            <Image
              src="/icons/users.svg"
              width={100}
              height={100}
              alt={"user icon"}
              className="w-10 h-10"
            />
            <h3 className="w-[80%] text-3xl font-bold capitalize leading-normal my-4">
              Team collaboration
            </h3>
            <p className="text-text-gray-text text-base leading-normal">
              Collaboration is our cornerstone. Every member of our team brings
              a unique perspective and skillset, contributing to a collective
              brilliance that drives impactful solutions. At Tribapay, we
              understand that true success is achieved together.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-white p-10 rounded-lg">
            <Image
              src="/icons/support.svg"
              width={100}
              height={100}
              alt={"support icon"}
              className="w-10 h-10"
            />
            <h3 className="w-[80%] text-3xl font-bold capitalize leading-normal my-4">
              Customer satisfaction
            </h3>
            <p className="text-text-gray-text text-base leading-normal">
              Customer satisfaction is embedded in our DNA. At Tribapay, we see
              your success as our ultimate goal. Our dedicated team is driven to
              ensure your experience is nothing short of exceptional, making
              every interaction meaningful and every solution tailored to your
              needs.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DefineUs;
