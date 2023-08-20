import { type ReactNode } from "react";
import Image from "next/image";

import { educations } from "~/constants";
import { type EducationTypes } from "~/types";

import SectionHeader from "../SectionHeader";

const Education = (): ReactNode => {
  const renderCollegeNameAndMajor = (
    collegeName: EducationTypes["collegeName"],
    major: EducationTypes["major"]
  ) => {
    return (
      <h3>
        <div className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300">
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span className="inline-block">
            {collegeName} · {major}
          </span>
        </div>
      </h3>
    );
  };

  const renderDescription = (description: EducationTypes["description"]) => {
    return <p className="mt-2 text-sm leading-normal">{description}</p>;
  };

  const collegeImage = () => {
    return (
      <Image
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        alt=""
        loading="lazy"
        decoding="async"
        data-nimg="1"
        style={{ color: "transparent" }}
        src="/UniversityOfUtah.png"
        width={200}
        height={48}
      />
    );
  };

  const renderEducation = () => {
    return (
      <>
        {educations.map((education) => (
          <li key={education.collegeName} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 order-2 sm:col-span-6 md:order-1 lg:order-1">
                {renderCollegeNameAndMajor(
                  education.collegeName,
                  education.major
                )}
                {renderDescription(education.description)}
              </div>
              {collegeImage()}
            </div>
          </li>
        ))}
      </>
    );
  };

  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <SectionHeader sectionName="Education" />
      <div>
        <ul className="group/list">{renderEducation()}</ul>
      </div>
    </section>
  );
};

export default Education;
