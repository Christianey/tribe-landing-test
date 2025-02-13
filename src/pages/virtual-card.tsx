import { Hero } from "@/components/modules/cards/Hero";
import { Faq } from "@/components/modules/cards/Faq";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import React from "react";
import Secure from "@/components/modules/cards/Secure";
import GetVitualCard from "@/components/modules/cards/GetVitualCard";
import DownloadSection from "@/components/common/DownloadSection";

const Cards = () => {
  return (
    <div className="w-full bg-[#fef1f2]">
      <Hero />
      <Secure />
      <GetVitualCard />
      <Faq />
      <DownloadSection />
    </div>
  );
};

Cards.layout = MainLayout;
export default Cards;
