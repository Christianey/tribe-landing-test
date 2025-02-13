import DownloadSection from "@/components/common/DownloadSection";
import { Deletion } from "@/components/modules/recovery/Deletion";
import { Header } from "@/components/modules/recovery/Header";
import { Retention } from "@/components/modules/recovery/Retention";
import { RightToData } from "@/components/modules/recovery/RightToData";
import { StepsToDelete } from "@/components/modules/recovery/StepsToDelete";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import Head from "next/head";
import React from "react";

const RecoveryPage = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#04020D" />
        <title>Tribapay • Recovery page</title>
      </Head>
      <Header />
      <StepsToDelete />
      <RightToData />
      <Retention />
      <Deletion />
      <div className="">
        <DownloadSection />
      </div>
    </>
  );
};

RecoveryPage.layout = MainLayout;
export default RecoveryPage;
