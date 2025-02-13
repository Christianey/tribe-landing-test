import React from "react";
import Main from "@/components/modules/information-policy/main";
import DownloadSection from "@/components/common/DownloadSection";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import Head from "next/head";

const InformationSecurity = () => {
  return (
    <>
      <Head>
        <title>Tribapay • Information Security Policy</title>
      </Head>
      <section className="bg-[#fef1f2]">
        <Main />
        <DownloadSection />
      </section>
    </>
  );
};

InformationSecurity.layout = MainLayout;
export default InformationSecurity;
