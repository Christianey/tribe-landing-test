import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { ComponentType, ReactElement, ReactNode, useEffect } from "react";
import "swiper/css/bundle";
import "../styles/font.css";
import "../styles/globals.scss";
import { DM_Sans } from "@next/font/google";
import Script from "next/script";
// import PopUpModal from "@/components/common/PopUpModal";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType | any;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    function initFreshChat() {
      window.fcWidget.init({
        token: "67d5f3e0-6562-4c97-b977-98639cd37016",
        host: "https://wchat.freshchat.com",
      });
    }

    function loadFreshChatScript() {
      if (!document.getElementById("Freshchat-js-sdk")) {
        const script = document.createElement("script");
        script.id = "Freshchat-js-sdk";
        script.async = true;
        script.src = "https://wchat.freshchat.com/js/widget.js";
        script.onload = initFreshChat;
        document.head.appendChild(script);
      }
    }

    loadFreshChatScript();
  }, []);

  // function openFreshChat() {
  //   if (window.fcWidget) {
  //     setTimeout(() => {
  //       window.fcWidget.open();
  //     }, 1000);
  //   }
  // }

  return (
    <>
      {/* <PopUpModal /> */}
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script async src="//static.getclicky.com/101363991.js" />
      <NextNProgress
        height={4}
        color="#623ECA"
        options={{ showSpinner: false }}
      />
      <main
        style={{
          fontFamily: `Patron, ${dmSans.style.fontFamily}`,
        }}
      >
        {Component.layout ? (
          <Component.layout>
            <Component {...pageProps} />
          </Component.layout>
        ) : (
          <>{getLayout(<Component {...pageProps} />)}</>
        )}
      </main>
    </>
  );
}

export default App;
