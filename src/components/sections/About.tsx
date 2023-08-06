import { type ReactNode } from "react";

import CustomLink from "../CustomLink";
import SectionHeader from "../SectionHeader";

const About = (): ReactNode => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeader sectionName="About" />
      <div>
        <p className="about-paragraph">
          As a part of my academic journey, I attended a small lecture where a
          guest speaker, a former software engineer at NASA, introduced his work
          on heat flow simulations. It was a captivating experience for me, as
          it marked my first exposure to the world of software development.
        </p>
        <p className="about-paragraph">
          Currently, my primary focus is on creating new features and optimizing
          performance at
          <CustomLink href="https://www.uxpin.com/" text=" UXPin" />. Beyond my
          professional responsibilities, I enjoy exploring cutting-edge
          technologies that push the boundaries of software development and make
          developers&apos; lives easier.
        </p>
        <p className="about-paragraph">
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
