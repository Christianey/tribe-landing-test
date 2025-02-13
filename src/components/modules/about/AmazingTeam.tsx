/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useResponsive } from "@/components/hooks/useResponsive";
import classNames from "classnames";

const teams = [
  {
    id: 1,
    name: "Jesse Croffie",
    img: "/images/team/jesse.png",
    title: "Product manager",
    bg: "y",
  },
  {
    id: 2,
    name: "Bolu Oluwagbesan",
    img: "/images/team/bolu.png",
    title: "Ceo",
    bg: "g",
  },
  {
    id: 3,
    name: "Danny Maine",
    img: "/images/team/danny.png",
    title: "Digital marketer",
    bg: "i",
  },
];
const AmazingTeam = () => {
  const paginationRef = useRef(null);
  const { isMobile } = useResponsive();

  const pagePerView = useMemo(() => (isMobile ? 1.4 : 2 || 1), [isMobile]);

  return (
    <section className="max-container-width mt-32 lg:mt-40">
      <div className="max-container-width mt-32 mb-0 lg:mt-48 flex flex-col justify-center items-center text-text-default">
        <h1 className="font-bold lg:text-5xl text-4xl leading-snug capitalize text-center">
          A Team Of Amazing People
        </h1>
        <p className="pt-4 md:w-[52.125rem] text-base lg:text-xl text-center font-medium opacity-[0.699] text-primaryBlack-default/60">
          At Tribapay, our success story is written by the incredible
          individuals who make up our team of amazing people. We're more than
          just colleagues; we're a TRIBE of dedicated professionals who share a
          common goal: to empower your financial journey with unwavering passion
          and unmatched expertise.
        </p>
      </div>
      {/* <div className="py-20" id="team-swipe">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={pagePerView}
          pagination={{
            el: paginationRef.current,
            clickable: false,
          }}
          loop={true}
          onInit={(swiper) => {
            setTimeout(() => {
              // eslint-disable-next-line no-param-reassign
              // swiper?.pagination?.el = paginationRef.current || 0;
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            }, 3000);
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          breakpoints={
            {
              // 0: { slidesPerView: isMobile ? 1 : 2 },
              // 768: { slidesPerView: 2 },
            }
          }
        >
          {teams &&
            teams.map((team, i) => (
              <SwiperSlide key={i}>
                <div
                  className={classNames(
                    "w-full h-[300px] md:h-[450px] shadow-lg rounded-lg",
                    {
                      "bg-[#AAE2D3] ": team.bg === "g",
                      "bg-[#F79E1A] ": team.bg === "y",
                      "bg-[#CAB7FF] ": team.bg === "i",
                    }
                  )}
                >
                  <div className="flex justify-center">
                    <div className="w-full h-full">
                      <Image
                        src={team.img}
                        fill
                        className="w-full h-full pt-5 flex justify-center items-center object-contain"
                        alt={""}
                        quality={100}
                      />
                    </div>
                    <article className="absolute px-3 sm:px-12 py-3.5 bg-white rounded-lg bottom-5 flex flex-col justify-center items-center text-center">
                      <small className="text-[0.5rem] sm:text-xs pb-1">
                        {team.title}
                      </small>
                      <p className="sm:text-xl text-sm font-semibold">
                        {team.name}
                      </p>
                    </article>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex justify-center">
          <div
            ref={paginationRef}
            className="flex justify-center !space-x-4 mt-10 text-gray-400"
          />
        </div>
      </div> */}
    </section>
  );
};

export default AmazingTeam;
