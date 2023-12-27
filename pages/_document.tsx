import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@250;400&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Explore the latest industry news, insightful interviews, and valuable resources to help your event business thrive. Visit Easeplan Blog today for expert insights and updates."
        />
  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Latest Industry News, Interviews, and Resources for Your Event Business | Easeplan Blog"
        />
        <meta
          property="og:description"
          content="Explore the latest industry news, insightful interviews, and valuable resources to help your event business thrive. Visit Easeplan Blog today for expert insights and updates."
        />
        <meta
          property="og:url"
          content="https://blog.easeplan.io"
        />
        <meta
          property="og:image"
          content="https://www.example.com/images/og-image.jpg"
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Latest Industry News, Interviews, and Resources for Your Event Business | Easeplan Blog"
        />
        <meta
          name="twitter:description"
          content="Explore the latest industry news, insightful interviews, and valuable resources to help your event business thrive. Visit Easeplan Blog today for expert insights and updates."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/images/twitter-image.jpg"
        />
        <meta
          name="keywords"
          content="event industry news, event business resources, event business interviews, Easeplan Blog"
        />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <body>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
