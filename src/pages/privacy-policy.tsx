
import DownloadSection from "@/components/common/DownloadSection";
import Main from "@/components/modules/privacy-policy/main";
import { MainLayout } from "@/components/shared/layout/MainLayout";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#fef1f2]">
      <Main />
      <DownloadSection />
    </section>
  );
};

PrivacyPolicy.layout = MainLayout;
export default PrivacyPolicy;
