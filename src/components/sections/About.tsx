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
          As a part of my academic journey, I attended a small lecture where a
          guest speaker, a former software engineer at NASA, introduced his work
          on heat flow simulations. It was a captivating experience for me, as
          it marked my first exposure to the world of software development.
        </p>
        <p className="mb-4">
          Currently, my primary focus is on creating new features and optimizing
          performance at
          <CustomLink href="https://www.uxpin.com/" text=" UXPin" />. Beyond my
          professional responsibilities, I enjoy exploring cutting-edge
          technologies that push the boundaries of software development and make
          developers&apos; lives easier.
        </p>
        <p className="mb-4">
          When I&apos;m away from the keyboard, I enjoy spending time with my
          wife and friends. I casually practice beatboxing as a hobby and study
          Japanese, hoping to have a full conversation in Japanese with my
          Japanese wife some day.
        </p>
      </div>
    </section>
  );
};

export default About;
