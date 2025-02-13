import { Button } from "@/components/common/Button";
import { StoreButton } from "@/components/common/StoreButton";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const HeroNew = () => {
  return (
    <section className="relative flex flex-col items-center justify-between bg-[#0A0A0A] shadow-sm shadow-gray-100 lg:h-[100dvh] overflow-hidden">
      <div className="lg:pt-[9.5rem] pt-36 max-container-width relative z-20">
        <div className="gap-5 md:gap-9 items-center">
          <div className="flex mb-5 flex-col lg:justify-center lg:items-start gap-4">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-[4.25rem] leading-tight inline-block text-white">
              <span className="text-[#A597CD]">The Super Finance App</span> for
              Africa, <br />
              by Africans
            </h1>

            <p className="text-white lg:text-lg text-base font-medium leading-normal lg:mb-[60px] mb-10">
              Tribapay helps individuals and businesses collect and make
              payments both locally and internationally.
            </p>
            <div className="lg:hidden whitespace-nowrap flex items-center justify-start lg:justify-start gap-2 lg:gap-8">
              <StoreButton store="play-store" theme="dark" />
              <StoreButton theme="dark" />
            </div>
            <div className="hidden lg:flex">
              <Link target="_blank" href={"https://app.tribapay.com"}>
                <Button
                  intent={"primary-light"}
                  rightIcon={<HiMiniArrowUpRight size={24} />}
                  size={"lg"}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20">
        <img
          src="/images/hero-phones.png"
          alt="Description of the image"
        />
      </div>

      <img
        src="/images/hero-pattern-bg.png"
        alt="Description of the image"
        className="h-full w-full absolute z-10 mix-blend-screen"
      />
    </section>
  );
};

export default HeroNew;
