import React from "react";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import DownloadSection from "@/components/common/DownloadSection";
import Main from "@/components/modules/contact/Main";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#623ECA" />
        <title>Tribapay • Contact</title>
      </Head>
      <div className="w-full bg-stone-50 ">
        <Main />
        <DownloadSection />
      </div>
    </>
  );
};

Contact.layout = MainLayout;
export default Contact;
