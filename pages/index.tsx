import Head from "next/head";
import Features from "../sections/features";
import Gallery from "../sections/gallery";
import Main from "../sections/main";

export default function Home() {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Portion - Simple. Good. Food.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-14 md:space-y-28">
        <section id="top" className="mt-24">
          <Main />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
      </div>
    </div>
  );
}
