import React from "react";
import Main from "@/components/modules/cookies/main";
import DownloadSection from "@/components/common/DownloadSection";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import Head from "next/head";

const Cookies = () => {
  return (
    <>
      <Head>
        <title>Tribapay • Cookies</title>
      </Head>
      <section className="bg-[#fef1f2]">
        <Main />
        <DownloadSection />
      </section>
    </>
  );
};

Cookies.layout = MainLayout;
export default Cookies;
