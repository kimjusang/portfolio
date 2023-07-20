import Head from "next/head";
import Image from "next/image";
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
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">Jusang Kim</Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Engineer at UXPin
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, inclusive products and digital experiences
                for the web.
              </p>
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <Link
                      className="group flex items-center py-3"
                      href="#about"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <Link
                  className="block hover:text-slate-200"
                  href="https://github.com/kimjusang"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  Back in 2012, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and
                  I&apos;ve had the privilege of building software for an&nbsp;
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    advertizing agency
                  </Link>
                  , a&nbsp;
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    start-up
                  </Link>
                  , a&nbsp;
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    student-led design studio
                  </Link>
                  , and a&nbsp;
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    huge corporation
                  </Link>
                  .
                </p>
                <p className="mb-4">
                  My main focus these days is building products and leading
                  projects for our clients at&nbsp;
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Upstatement
                  </Link>
                  . In my free time I&apos;ve also released an&nbsp;
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    online video course
                  </Link>
                  &nbsp;that covers everything you need to know to build a web
                  app with the Spotify API.
                </p>
                <p className="mb-4">
                  When I’m not at the computer, I’m usually rock climbing,
                  hanging out with my wife and two cats, or running around
                  Hyrule searching for&nbsp;
                  <Link
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://us.mullenlowe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Korok seeds
                  </Link>
                  .
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label="2018 to Present"
                      >
                        2018 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <Link
                              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                              href="https://upstatement.com"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Lead Engineer at Upstatement"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Lead Engineer ·&nbsp;
                                <span className="inline-block">
                                  Upstatement
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div>
                            <div className="text-slate-500" aria-hidden="true">
                              Senior Engineer
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-500" aria-hidden="true">
                              Engineer
                            </div>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Deliver high-quality, robust production code for a
                          diverse array of projects for clients including
                          Harvard Business School, Everytown for Gun Safety,
                          Pratt Institute, Koala Health, Vanderbilt University,
                          The 19th News, and more. Provide leadership within
                          engineering department through close collaboration,
                          knowledge shares, and mentorship.
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React Native
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              SCSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              WordPress
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              PHP
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label="2018 to Present"
                      >
                        2018 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <Link
                              className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                              href="https://upstatement.com"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Lead Engineer at Upstatement"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                Lead Engineer ·&nbsp;
                                <span className="inline-block">
                                  Upstatement
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div>
                            <div className="text-slate-500" aria-hidden="true">
                              Senior Engineer
                            </div>
                          </div>
                          <div>
                            <div className="text-slate-500" aria-hidden="true">
                              Engineer
                            </div>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Deliver high-quality, robust production code for a
                          diverse array of projects for clients including
                          Harvard Business School, Everytown for Gun Safety,
                          Pratt Institute, Koala Health, Vanderbilt University,
                          The 19th News, and more. Provide leadership within
                          engineering department through close collaboration,
                          knowledge shares, and mentorship.
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React Native
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              SCSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              WordPress
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              PHP
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                <div className="mt-12">
                  <Link
                    className="group inline-flex items-center font-medium font-semibold leading-tight text-slate-200 text-slate-200"
                    aria-label="View Full Resume"
                    href="/resume.pdf"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full&nbsp;
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                          Resume
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </section>
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <Link
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://www.newline.co/courses/build-a-spotify-connected-app"
                            target="_blank"
                            aria-label="Build a Spotify Connected App"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Build a Spotify Connected
                              <span className="inline-block">
                                App
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Video course that teaches how to build a web app with
                          the Spotify Web API. Topics covered include the
                          principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.
                        </p>
                      </div>
                      <Image
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/favicon.ico"
                        width={200}
                        height={48}
                      />
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <Link
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                            href="https://www.newline.co/courses/build-a-spotify-connected-app"
                            target="_blank"
                            aria-label="Build a Spotify Connected App"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Build a Spotify Connected
                              <span className="inline-block">
                                App
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Video course that teaches how to build a web app with
                          the Spotify Web API. Topics covered include the
                          principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.
                        </p>
                      </div>
                      <Image
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        src="/favicon.ico"
                        width={200}
                        height={48}
                      />
                    </div>
                  </li>
                </ul>
                <div className="mt-12">
                  <Link
                    className="group inline-flex items-center font-medium font-semibold leading-tight text-slate-200 text-slate-200"
                    aria-label="View Full Project Archive"
                    href="/archive"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full Project&nbsp;
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                          Archive
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </section>
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Loosely designed in&nbsp;
                <Link
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Figma
                </Link>
                &nbsp;and coded in&nbsp;
                <Link
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visual Studio Code
                </Link>
                &nbsp;by yours truly. Built with&nbsp;
                <Link
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Next.js
                </Link>
                &nbsp;and&nbsp;
                <Link
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </Link>
                , deployed with&nbsp;
                <Link
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vercel
                </Link>
                . All text is set in the&nbsp;
                <Link
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inter
                </Link>
                &nbsp;typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
