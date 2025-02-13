/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/common/Button";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { useResponsive } from "@/components/hooks/useResponsive";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Switch = () => {
  const { isMobile } = useResponsive();

  return (
    <section className="lg:my-20 my-[60px] max-container-width">
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse lg:gap-[106px] gap-9 items-center">
        <div>
          <div className="max-w-2xl mb-10">
            <ScrollAnimation>
              <h4 className="lg:text-5xl text-[27px] sm:text-4xl leading-[1.2] font-bold mb-6">
                Cashpin for Business
              </h4>
              <p className="text-primaryBlack-default/50 mb-4 font-medium text-sm md:text-base lg:text-lg">
                Easily accept payments at your physical store and terminals
                using our CashPin QR code scanner, powered by lightning-fast
                peer-to-peer instant payments.
              </p>
              <Link target="_blank" href={"https://app.tribapay.com"}>
                <Button
                  intent={"primary-light"}
                  rightIcon={<HiMiniArrowUpRight size={24} />}
                  size={isMobile ? "sm" : "md"}
                  className={classNames("", { "py-5": isMobile })}                >
                  Get Started
                </Button>
              </Link>
            </ScrollAnimation>
          </div>
          {/* 
          <Button
            rightIcon={
              <Image
                src="/icons/arrow-up-right.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-[1.5rem] h-[1.5rem] !fill-[#623ECA]"
              />
            }
            intent="outlined"
            className="!font-bold !text-lg !bg-[#EBE6FB] !border-[#EBE6FB]"
          >
            Learn More
          </Button> */}
        </div>

        <div>
          <ScrollAnimation>
            <img
              src="/images/business/CrossPayment.png"
              alt="Description of the image"
              className="h-full w-full max-h-[600px] object-contain"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Switch;
