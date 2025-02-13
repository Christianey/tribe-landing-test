import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full">
      <Head>
        <meta
          name="description"
          content="Tribapay helps businesses and individuals collect and make payments both locally and internationally."
        />
        <meta name="keywords" content="Tribapay" />
        <meta
          property="og:title"
          content="Tribapay - Connecting Africa, one payment at a time."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Tribapay helps businesses and individuals collect and make payments both locally and internationally."
        />

        <meta
          property="twitter:title"
          content="Tribapay - Connecting Africa, one payment at a time."
        />

        <meta
          property="twitter:description"
          content="Tribapay helps businesses and individuals collect and make payments both locally and internationally."
        />
        <meta
          content="google-site-verification=EMWfpUYBDAfmHXKVM_XwqKcrWxAr81SDBjKu7gGg4n4"
          name="google-site-verification"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/favicon.ico" rel="icon" />
        <link
          href="https://fonts.googleapis.com"
          rel="preconnect"
          crossOrigin=""
        />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
