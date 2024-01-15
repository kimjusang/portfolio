import { type ReactNode } from "react";

import CustomLink from "../CustomLink";
import SectionHeader from "../SectionHeader";

const About = (): ReactNode => {
  const commonProps: { linkType: "about" } = { linkType: "about" };

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
          it opened my eyes to what coding can achieve.
        </p>
        <p className="about-paragraph">
          Currently, my primary focus is on creating new features and improving
          infrastructures at{" "}
          <CustomLink
            {...commonProps}
            href="https://www.uxpin.com/"
            text="UXPin"
          />
          . Beyond my professional responsibilities, I enjoy exploring
          cutting-edge technologies that push the boundaries of software
          development and make developers&apos; lives easier.
        </p>
        <p className="about-paragraph">
          When I&apos;m away from the keyboard, I love spending time with my
          wife and friends. Also, I enjoy beatboxing, chess, and learning
          Japanese as hobbies.
        </p>
      </div>
    </section>
  );
};

export default About;
