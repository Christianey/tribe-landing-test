import { MainLayout } from "@/components/shared/layout/MainLayout";
import DownloadSection from "@/components/common/DownloadSection";
import Features from "@/components/modules/home/Features";
import HeroSection from "@/components/modules/home/HeroSection";
import Testimonal from "@/components/modules/home/Testimonal";
import UsersSection from "@/components/modules/home/UsersSection";
import { HomeVideo } from "@/components/modules/home/HomeVideo";
import React from "react";
import { Faq } from "@/components/modules/home/Faq";
import Head from "next/head";
import FeaturesNew from "@/components/modules/home/FeaturesNew";
import HeroNew from "@/components/modules/home/HeroNew";
import UsersSectionNew from "@/components/modules/home/UsersSectionNew";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#04020D" />
        <title>Tribapay • Super Finance App for Africans</title>
      </Head>
      <div className="w-full  !bg-white">
        <HeroNew />
        {/* <HeroSection /> */}
        <UsersSectionNew />
        {/* <UsersSection /> */}
        <FeaturesNew />
        {/* <Features /> */}
        <div className="max-container-width py-14 lg:py-[216px] md:px-20">
          <HomeVideo />
        </div>
        <Testimonal />
        <Faq />
        <DownloadSection />
      </div>
    </>
  );
};

Home.layout = MainLayout;
export default Home;
