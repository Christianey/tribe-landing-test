import DownloadSection from "@/components/common/DownloadSection";
import { AirtimeToCashVideo } from "@/components/modules/airtime-to-cash/AirtimeToCashVideo";
import { Faq } from "@/components/modules/airtime-to-cash/Faq";
import HowItWorks from "@/components/modules/airtime-to-cash/HowItWorks";
import Intro from "@/components/modules/airtime-to-cash/Intro";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import Head from "next/head";
import React from "react";

const AirtimeToCash = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#160840" />
        <meta
          name="description"
          content="Apply for a Virtual Dollar and/or Naira Card from Cashpin Tribapay, which allows you to conveniently make online purchases and transactions in USD and Naira. Learn more about how to get your own virtual USD card today."
        />
        <meta name="keywords" content="Tribapay, Dollar card, Virtual cards" />
        <title>Tribapay • Airtime to cash</title>
      </Head>
      <div className="w-full bg-white">
        {/* <Intro />
        <HowItWorks />
        <div className="max-container-width py-[164px] lg:py-[216px] md:px-20">
          <AirtimeToCashVideo />
        </div>
        <Faq />
        <DownloadSection /> */}
      </div>
    </>
  );
};

AirtimeToCash.layout = MainLayout;
export default AirtimeToCash;
