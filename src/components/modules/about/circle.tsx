import { Button } from "@/components/common/Button";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import Link from "next/link";
import React from "react";

const circle = () => {
  return (
    <ScrollAnimation variant="slideRight">
      <section className="max-container-width mt-20 lg:mt-24">
        <h3 className="text-center md:text-5xl text-3xl font-medium capitalize">
          Join <span className="font-semibold">our circle</span>
        </h3>
        <p className="mt-6 text-start leading-normal font-medium text-lg lg:text-2xl opacity-[0.69]">
          Join our tribe where individuality and humour are valued, and where a
          love for unique products are at the core.
        </p>
        <p className="my-6 text-start leading-normal font-medium text-lg lg:text-2xl opacity-[0.69]">
          We occasionally gather in person for company events and offer the
          flexibility to work remotely.
        </p>
        <p className="mb-12 text-start leading-normal font-medium text-lg lg:text-2xl opacity-[0.69]">
          We are currently not recruiting but if you believe you would be a
          great fit and want to be part of our team, please sell yourself
          through the provided email link and who knows in a few weeks, you
          could be the next human of tribapay working from home in your pyjamas.
        </p>
        <Link href="/signup">
          <Button>Get started now</Button>
        </Link>
      </section>
    </ScrollAnimation>
  );
};

export default circle;
