import { type ReactNode } from "react";
import Link from "next/link";

import { workExperiences } from "~/constants";
import { type WorkExperiencesTypes } from "~/types";

import SectionHeader from "../SectionHeader";

const Experience = (): ReactNode => {
  const renderEmploymentPeriod = (
    employmentPeriod: WorkExperiencesTypes["employmentPeriod"],
    ariaLabelForEmploymentPeriod: WorkExperiencesTypes["ariaLabelForEmploymentPeriod"]
  ) => {
    return (
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label={ariaLabelForEmploymentPeriod}
      >
        {employmentPeriod}
      </header>
    );
  };

  const renderCompanyNameAndJobTitle = (
    companyName: WorkExperiencesTypes["companyName"],
    jobTitle: WorkExperiencesTypes["jobTitle"],
    url: WorkExperiencesTypes["url"],
    ariaLabelForCompanyNameAndJobTitle: WorkExperiencesTypes["ariaLabelForCompanyNameAndJobTitle"]
  ) => {
    return (
      <h3 className="font-medium leading-snug text-slate-200">
        <div>
          <Link
            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={ariaLabelForCompanyNameAndJobTitle}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            {jobTitle} · {companyName}
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </h3>
    );
  };

  const renderJobDescription = (
    jobDescription: WorkExperiencesTypes["jobDescription"]
  ) => {
    return <p className="mt-2 text-sm leading-normal">{jobDescription}</p>;
  };

  const renderTechStacks = (techStacks: WorkExperiencesTypes["techStacks"]) => {
    return (
      <>
        {techStacks.map((stack) => (
          <li key={stack} className="mr-1.5 mt-2">
            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              {stack}
            </div>
          </li>
        ))}
      </>
    );
  };

  const renderWorkExperiences = () => {
    return (
      <>
        {workExperiences.map((experience) => (
          <li key={experience.companyName} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              {renderEmploymentPeriod(
                experience.employmentPeriod,
                experience.ariaLabelForEmploymentPeriod
              )}
              <div className="z-10 sm:col-span-6">
                {renderCompanyNameAndJobTitle(
                  experience.companyName,
                  experience.jobTitle,
                  experience.url,
                  experience.ariaLabelForCompanyNameAndJobTitle
                )}
                {renderJobDescription(experience.jobDescription)}
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {renderTechStacks(experience.techStacks)}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  };

  // TO DO: Add the resume link when it's ready to be presented

  // const renderResumeLink = () => {
  //   return (
  //     <div className="mt-12">
  //       <Link
  //         className="group inline-flex items-center font-semibold leading-tight text-slate-200"
  //         aria-label="View Full Resume"
  //         href="/resume.pdf"
  //       >
  //         <span>
  //           <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
  //             View Full Resume
  //           </span>
  //           <span className="whitespace-nowrap">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               viewBox="0 0 20 20"
  //               fill="currentColor"
  //               className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
  //               aria-hidden="true"
  //             >
  //               <path
  //                 fillRule="evenodd"
  //                 d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
  //                 clipRule="evenodd"
  //               ></path>
  //             </svg>
  //           </span>
  //         </span>
  //       </Link>
  //     </div>
  //   );
  // };

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeader sectionName="Experience" />
      <div>
        <ol className="group/list">{renderWorkExperiences()}</ol>
        {/* {renderResumeLink()} */}
      </div>
    </section>
  );
};

export default Experience;
