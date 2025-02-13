import React from "react";
import Main from "@/components/modules/terms/main";
import DownloadSection from "@/components/common/DownloadSection";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import Head from "next/head";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Tribapay • Terms</title>
      </Head>
      <section className="bg-[#fef1f2]">
        <Main />
        <DownloadSection />
      </section>
    </>
  );
};

Terms.layout = MainLayout;
export default Terms;
