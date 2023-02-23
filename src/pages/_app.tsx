import { Footer } from "@/components/organisms/Footer";
import { Nav } from "@/components/organisms/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main className="container mx-auto flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
