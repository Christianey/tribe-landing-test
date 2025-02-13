import Main from "@/components/modules/faq/main";
import DownloadSection from "@/components/common/DownloadSection";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import React from "react";
import Head from "next/head";

const Faq = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#623ECA" />
        <title>Tribapay • Faq</title>
      </Head>
      <Main />
      <DownloadSection />
    </>
  );
};

Faq.layout = MainLayout;
export default Faq;
