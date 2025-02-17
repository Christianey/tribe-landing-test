import Features from "@/components/modules/business/Features";
import Hero from "@/components/modules/business/Hero";
import Connect from "@/components/modules/business/Connect";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import React from "react";
import AiFeatures from "@/components/modules/business/AiFeatures";
import Code from "@/components/modules/business/Code";
import Switch from "@/components/modules/business/Switch";
import BusinessFeatures from "@/components/modules/business/BusinessFeatures";
// import QuicKredit from "@/components/modules/business/QuicKredit";
import CashFlow from "@/components/modules/business/CashFlow";
import Services from "@/components/modules/business/Services";
import Empowering from "@/components/modules/business/Empowering";
import Waitlist from "@/components/modules/business/Waitlist";
import Head from "next/head";
import DownloadSection from "@/components/common/DownloadSection";
import TabSection from "@/components/modules/business/TabSection";

const business = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#623ECA" />
        <title>Tribapay • Connecting Africa, one payment at a time</title>
      </Head>
      <div className="w-full bg-[#FEF1F1]">
        <Hero />
        <Services />
        <Features />
        <Connect />
        {/* <AiFeatures /> */}
        <Code />
        <TabSection />
        {/* <Switch /> */}
        {/* <BusinessFeatures /> */}
        {/* <QuicKredit /> */}
        {/* <CashFlow /> */}
        {/* <Empowering /> */}
        <DownloadSection isBusiness />
        {/* <Waitlist /> */}
      </div>
    </>
  );
};

business.layout = MainLayout;

export default business;
