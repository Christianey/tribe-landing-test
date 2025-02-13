import { ProgressBar } from "@/components/ProgressBar";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
