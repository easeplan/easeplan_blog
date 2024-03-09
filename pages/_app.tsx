import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import  posthog from 'posthog-js'
import * as gtag from '@/lib/gtag';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === 'production';

  useEffect(() => {
    // Posthog Initialization
    posthog.init(`phc_ceUGCNpSGC0HkRcN8g1Hx8Sj0omIjEHz9w3kLdl9XpG`, {
      api_host: 'https://app.posthog.com',
      session_recording: { inlineStylesheet: false },
    });

    // Event Capturing
    const urlParams = new URLSearchParams(window.location.search);
    const referedBy = urlParams.get('referedBy');
    if (referedBy) {
      posthog.capture('referral-landing', {
        distinct_id: posthog.get_distinct_id(),
        referedBy: referedBy,
      });
      localStorage.setItem('referedBy', referedBy);
    }

    // Route Change Handling
    const handleRouteChange = (url: URL) => {
      if (isProduction) gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
