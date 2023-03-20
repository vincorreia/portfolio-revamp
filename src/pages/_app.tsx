import { Footer } from "@/components/organisms/Footer";
import { Nav } from "@/components/organisms/Nav";
import "@/styles/globals.css";
import "@/styles/md.css";
import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vinnicius Correia</title>
        <meta
          name="description"
          content="Vinnicius Correia's Frontend Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="container mx-auto h-full flex-grow overflow-auto px-6 sm:p-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
