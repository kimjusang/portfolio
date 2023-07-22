import CustomLink from "../CustomLink";

const About: React.FC = () => {
  return (
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
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I&apos;ve had the privilege of
          building software for an&nbsp;
          <CustomLink
            href="https://us.mullenlowe.com/"
            text="advertising agency"
          />
          , a&nbsp;
          <CustomLink href="https://us.mullenlowe.com/" text="start-up" />,
          a&nbsp;
          <CustomLink
            href="https://us.mullenlowe.com/"
            text="student-led design studio"
          />
          , and a&nbsp;
          <CustomLink
            href="https://us.mullenlowe.com/"
            text="huge corporation"
          />
          .
        </p>
        <p className="mb-4">
          My main focus these days is building products and leading projects for
          our clients at&nbsp;
          <CustomLink href="https://us.mullenlowe.com/" text="Upstatement" />
          . In my free time I&apos;ve also released an&nbsp;
          <CustomLink
            href="https://us.mullenlowe.com/"
            text="online video course"
          />
          &nbsp;that covers everything you need to know to build a web app with
          the Spotify API.
        </p>
        <p className="mb-4">
          When I’m not at the computer, I’m usually rock climbing, hanging out
          with my wife and two cats, or running around Hyrule searching
          for&nbsp;
          <CustomLink href="https://us.mullenlowe.com/" text="Korok seeds" />.
        </p>
      </div>
    </section>
  );
};

export default About;
