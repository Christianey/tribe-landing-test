import React from "react";
import DefineUs from "@/components/modules/about/DefineUs";
import HeroSection from "@/components/modules/about/HeroSection";
import AmazingTeam from "@/components/modules/about/AmazingTeam";
import Circle from "@/components/modules/about/circle";
import AboutFAQ from "@/components/modules/about/AboutFAQ";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import DownloadSection from "@/components/common/DownloadSection";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#623ECA" />
        <title>Tribapay • About</title>
      </Head>
      <div className="w-full bg-[#fef1f2]">
        <HeroSection />
        <DefineUs />
        <AmazingTeam />
        {/* <AboutFAQ /> */}
        <DownloadSection />
      </div>
    </>
  );
};

About.layout = MainLayout;
export default About;
