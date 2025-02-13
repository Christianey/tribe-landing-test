import React from "react";
import Main from "@/components/modules/acceptable-policy/main";
import DownloadSection from "@/components/common/DownloadSection";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import Head from "next/head";

const AcceptableUsage = () => {
  return (
    <>
      <Head>
        <title>Tribapay • Acceptable Usage Policy</title>
      </Head>
      <section className="bg-[#fef1f2]">
        <Main />
        <DownloadSection />
      </section>
    </>
  );
};

AcceptableUsage.layout = MainLayout;
export default AcceptableUsage;
