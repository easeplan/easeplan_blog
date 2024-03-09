import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";
import { CONFIG } from "../site.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="shortcut icon" href="/easeplanlogo.png"></link>
        <link rel="apple-touch-icon" href="/easeplanlogo.png"></link>
        <link
          rel="apple-touch-icon-precomposed"
          href="/easeplanlogo.png"
        ></link>
        <meta name="next-head-count" content="24"></meta>
        <meta name="theme-color" content="#134153" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@250;400&display=swap"
          rel="stylesheet"
        />
        {/* google search console */}
        {CONFIG.googleSearchConsole.enable === true && (
          <>
            <meta
              name="google-site-verification"
              content={CONFIG.googleSearchConsole.config.siteVerification}
            />
          </>
        )}
        {/* naver search advisor */}
        {CONFIG.naverSearchAdvisor.enable === true && (
          <>
            <meta
              name="naver-site-verification"
              content={CONFIG.naverSearchAdvisor.config.siteVerification}
            />
          </>
        )}
      </Head>
      {/* <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <link rel="shortcut icon" href="/easeplanlogo.png"></link>
          <link rel="apple-touch-icon" href="/easeplanlogo.png"></link>
          <link
            rel="apple-touch-icon-precomposed"
            href="/easeplanlogo.png"
          ></link>
          <meta name="next-head-count" content="24"></meta>
          <meta name="theme-color" content="#134153" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta
          name="google-site-verification"
          content="lUaVCkoNpMHRTdWtbNnBrMl0585RRJlDTTKFhZ0Itfw"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@250;400&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
      </Head> */}

      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
