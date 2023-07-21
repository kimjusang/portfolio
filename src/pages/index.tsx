import Head from "next/head";
import Link from "next/link";
import { About, Experience, Layout, Projects } from "~/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jusang Kim</title>
        <meta
          name="description"
          content="Jusang Kim is a software engineer who builds web applications with a focus on user experience and performance."
        />
      </Head>
      <Layout>
        <About />
        <Experience />
        <Projects />
      </Layout>
    </>
  );
}
