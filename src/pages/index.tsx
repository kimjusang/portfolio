import Head from "next/head";
import Link from "next/link";

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
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <Link href="/">Jusang Kim</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Software Engineer at UXPin
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </header>
          <main></main>
        </div>
      </div>
    </>
  );
}
