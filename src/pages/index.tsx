import Head from "next/head";

import { About, Experience, Layout, Projects, Education } from "~/components";

const Home = () => {
  return (
    <>
      <Head>
        <title>Jusang Kim</title>
        <link rel="icon" href="/ThumbsUp.ico" />

        {/* Open Graph Meta Tags */}

        {/* Twitter Card Meta Tags */}
        <meta
          name="description"
          content="Jusang Kim is a software engineer who builds web applications with a focus on user experience and performance."
        />
      </Head>
      <Layout>
        <About />
        <Experience />
        <Education />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
