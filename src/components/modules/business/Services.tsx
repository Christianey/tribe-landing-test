/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/common/Button";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useMemo, useRef } from "react";
import { useResponsive } from "@/components/hooks/useResponsive";
import classNames from "classnames";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import Image from "next/image";

const features = [
  {
    title: "APIs for Startups/SMEs/Entrepreneurs",
    desc: "Every stage of your startup growth, we provide the right payment tools to help you succeed.",
  },
  {
    title: "APIs for Global Organizations",
    desc: "We help global brands process and settle payments from African corridors in their preferred currency",
  },
  {
    title: "APIs for Enterprise Companies",
    desc: "We help Pan African businesses receive global payments in local currencies.",
  },
  {
    title: "APIs for Large Organisations/Institutions",
    desc: "We help schools (home & abroad),  non-profits,",
  },
];
// Modifications needed in the morning

// 1. For Consumer & For Business on the navbar of mobile (probably the way you show in on moniepoint)
// 2. Under the "Removing Payment Barriers for Everyone" where you have the

// >> For General Consumers
// >> For Growing Businesses
// >> For Small Businesses
// >> For Enterprise Companies.

// The contents are all the same.. (Update the content)

// => For Consumer:
// Use our payment app for all your everyday financial needs, such as sending money, receiving payments, paying bills, buying airtime, making cashpin transactions, and managing international transactions with a dollar card.

// => For Small Businesses
// Start your small business quickly and easily by accepting local and international payments with just a few taps using Tribapay. Our user-friendly app makes it simple for you to set up and running in no time, allowing you to start collecting payments swiftly.

// => For Growing Businesses
// Effortlessly manage large transaction volumes and streamline your financial processes as your business grows with our scalable payment infrastructure. No need to worry – we've got you covered

// => For Enterprise
// You can tailor Tribapay's payment solutions to suit your unique requirements and simplify your financial processes with advanced features and API integrations

const serviceSection = [
  {
    title: "For General Consumers",
    desc: "Use our payment app for all your everyday financial needs, such as sending money, receiving payments, paying bills, buying airtime, making cashpin transactions, and managing international transactions with a dollar card.",
    image: "/images/business-service/consumer.png",
  },
  {
    title: "For Growing Businesses",
    desc: "Effortlessly manage large transaction volumes and streamline your financial processes as your business grows with our scalable payment infrastructure. No need to worry – we've got you covered.",
    image: "/images/business-service/growing-business.png",
  },
  {
    title: "For Small Businesses",
    desc: "Start your small business quickly and easily by accepting local and international payments with just a few taps using Tribapay. Our user-friendly app makes it simple for you to set up and running in no time, allowing you to start collecting payments swiftly.",
    image: "/images/business-service/small-business.png",
  },
  {
    title: "For Enterprise Companies",
    desc: "You can tailor Tribapay's payment solutions to suit your unique requirements and simplify your financial processes with advanced features and API integrations.",
    image: "/images/business-service/enterprice.png",
  },
];

const Services = () => {
  const paginationRef = useRef(null);
  const { isMobile } = useResponsive();
  const pagePerView = useMemo(() => (isMobile ? 1.1 : 2.3), [isMobile]);

  return (
    <>
      <section className="relative py-10 lg:py-20 max-container-width overflow-hidden rounded-[40px] bg-white mt-8">
        <div className="p-4 rounded-full max-w-md bg-violet-50 text-center font-bold mb-6 text-primary-main">
          Seamless Payments, No Matter Your Size
        </div>
        <ScrollAnimation>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-2xl md:text-5xl !leading-tight mb-6">
              Removing Payment <br /> Barriers for Everyone
            </h3>
            <p className="max-w-[880px] text-primaryBlack-default/50 lg:text-lg text-base leading-normal font-dm-sans">
              We recognize that there is no one-size-fits-all solution for
              payment needs. Therefore, we have developed our platform to be
              flexible and adaptable to a wide variety of payment scenarios.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            {features.map((feature, idx) => (
              <div
                className="flex flex-col gap-4 basis-full lg:basis-[calc(50%-1rem)]"
                key={idx}
              >
                <Feature key={idx} title={feature.title} desc={feature.desc} />
              </div>
            ))}
          </div>
        </ScrollAnimation>
        <div className="absolute right-0 -top-20 opacity-10 md:opacity-100">
          <Image
            priority={true}
            src="/images/map.svg"
            width={550}
            height={550}
            alt="Hero Image"
          />
        </div>

        {/* service cards */}
        {/* <div className="flex pt-20">
        <ServiceCards />
      </div> */}
      </section>
    </>
  );
};

type Props = {
  item: {
    title: string;
    desc: string;
    image: string;
  };
  cls?: string;
  isActive?: boolean;
};

{
  /* <div className="flex flex-col gap-4 p-6 rounded-2xl border border-[#E3D9FF] bg-white shadow-sm hover:shadow-md transition-all duration-200">
  <div className="h-1 w-12 bg-[#6A35FF] rounded-full" />

  <h3 className="text-2xl font-semibold text-[#0A0A0A]">
    {title}
  </h3>

  <p className="text-[#0A0A0A]/60 leading-relaxed">
    {desc}
  </p>
</div> */
}

type FeatureProps = {
  title: string;
  desc: string;
};

const Feature = ({ title, desc }: FeatureProps) => {
  return (
    <div className="flex flex-col gap-4 grow shrink-0  pb-8 border shadow-sm hover:shadow-md transition-all duration-200 p-6 rounded-2xl">
      {/* <div className="h-2 w-32 bg-[#0A0A0A] rounded-full"></div> */}

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="font-normal text-zinc-500">{desc}</p>
    </div>
  );
};
const ServiceCards = ({ cls = "", isActive = false, item }: Props) => {
  return (
    <div
      className={classNames(
        "w-full group h-full hover:bg-[#9672FF] hover:cursor-pointer max-w-lg px-7 py-8 sm:px-10 sm:py-12 bg-white rounded-[20px] flex-col justify-start items-start gap-5 md:gap-16 inline-flex border border-gray-100 shadow-md shadow-gray-100",
        {
          "group-[active] bg-[#9672FF]": isActive,
        }
      )}
    >
      <div className="flex-col justify-start items-start gap-5 flex text-left">
        <div className="flex-col justify-start items-start gap-4 flex">
          <h2 className="break-words text-zinc-900 group-hover:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {item?.title}
          </h2>
          <div className=" text-zinc-500 text-sm md:text-base font-medium group-hover:text-white font-dm-sans">
            {item?.desc}
          </div>
        </div>
        {/* <div className="py-2">
          <Button
            intent={"primary-light"}
            rightIcon={<HiMiniArrowUpRight size={20} />}
            // size={"lg"}
          >
            Learn more
          </Button>
        </div> */}
      </div>
      <div className="mt-auto">
        <img
          className="w-full h-56 sm:h-[317px] rounded-[10px] object-cover"
          src={item?.image}
          alt={item.image}
        />
      </div>
    </div>
  );
};

export default Services;
