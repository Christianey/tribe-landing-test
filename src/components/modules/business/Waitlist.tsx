/* eslint-disable react/no-unescaped-entities */

import Btn from "@/components/common/Btn";
import { Button } from "@/components/common/Button";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { useResponsive } from "@/components/hooks/useResponsive";
import classNames from "classnames";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";

const Waitlist = () => {
  const { isMobile } = useResponsive();
  return (
    <ScrollAnimation>
      <section className="py-20 max-container-width flex flex-col items-center justify-center lg:pb-[160px] pb-[124px]">
        <h3 className="text-black mb-4 font-bold text-3xl md:text-5xl lg:text-5xl text-center leading-normal">
          Payments Solutions Tailored For You
        </h3>
        <p className="lg:px-20 pt-3 text-center text-primaryBlack-default/50 text-sm md:text-base font-medium leading-normal mb-[48px]">
          Tribapay provides a range of simple yet sophisticated payment
          products, tools, and infrastructure designed to cater to the diverse
          needs of individuals and businesses. Our aim is to break down payment
          barriers for consumers and contribute to the success of businesses,
          whether they operate locally or across Africa.
        </p>
        <div className="flex gap-4">
          <Link href={"https://app.tribapay.com"}>
            <Button
              intent={"primary-light"}
              rightIcon={<HiMiniArrowUpRight size={22} />}
              size={isMobile ? "sm" : "md"}
              className={classNames("", { "py-5": isMobile })}
            >
              Create account
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              intent={"light"}
              rightIcon={<MdOutlineCallMissedOutgoing size={22} />}
              size={isMobile ? "sm" : "md"}
              className={classNames("", { "py-5": isMobile })}
            >
              Speak to sales
            </Button>
          </Link>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Waitlist;
