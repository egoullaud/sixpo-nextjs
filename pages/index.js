import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sixpo.ca - Sexuality, Inclusion, Exploration</title>
        <meta
          name="description"
          content="Website for the SIXPO (Sexuality, Inclusion, Exploration) organization."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sixpo-logo.png" />
      </Head>
      <main></main>
    </>
  );
}
