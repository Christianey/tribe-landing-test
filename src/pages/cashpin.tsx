import DownloadSection from "@/components/common/DownloadSection";
import { CashpinIntro } from "@/components/modules/cashpin/CashpinIntro";
import { Faq } from "@/components/modules/cashpin/Faq";
import { Features } from "@/components/modules/cashpin/Features";
import { Hero } from "@/components/modules/cashpin/Hero";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import Head from "next/head";
import React from "react";

const Cashpin = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#623ECA" />
        <meta
          name="description"
          content="Cashpin is a unique 16-digit pin offered by Tribapay that enables users to efficiently save or lock their money. Discover how this innovative financial tool can help you achieve your savings goals and secure your funds."
        />
        <meta name="keywords" content="Tribapay, Cashpin" />
        <title>Tribapay • Cashpin</title>
      </Head>
      <div className="w-full">
        <Hero />
        <Features />
        <div className="max-container-width py-[164px] lg:py-[216px] md:px-20">
          <CashpinIntro />
        </div>
        <Faq />
        <DownloadSection />
      </div>
    </>
  );
};

Cashpin.layout = MainLayout;
export default Cashpin;
