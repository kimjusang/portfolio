import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "~/constants";
import { type ProjectTypes, type ProjectImageMap } from "~/types";

import SectionHeader from "../SectionHeader";

const Projects = (): ReactNode => {
  const renderProjectTitle = (
    projectTitle: ProjectTypes["projectTitle"],
    projectUrl: ProjectTypes["projectUrl"]
  ) => {
    return (
      <h3>
        <Link
          className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
          href={projectUrl}
          target="_blank"
          aria-label={projectTitle}
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          <span className="inline-block">
            {projectTitle}
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
      </h3>
    );
  };

  const renderProjectDescription = (
    projectDescription: ProjectTypes["projectDescription"]
  ) => {
    return <p className="mt-2 text-sm leading-normal">{projectDescription}</p>;
  };

  // Define a mapping of project titles to image file names
  const projectImageMap: ProjectImageMap = {
    "Kubernetes Monitoring System": "/KubernetesMonitoringSystem.png",
    "UXPin Merge": "/UxpinMerge.png",
    "UXPin Dashboard": "/UxpinDashboard.png",
    "Portfolio Website": "/PersonalPortfolio.png",
    // Add more mappings as needed
  };

  const renderProjectImage = (projectTitle: ProjectTypes["projectTitle"]) => {
    // Get the image source based on the project title
    const projectImageSrc = projectImageMap[projectTitle] ?? "/favicon.ico"; // Fallback to a default image if no match is found

    return (
      <Image
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        alt={projectTitle} // You might want to add an alt text for accessibility
        loading="lazy"
        decoding="async"
        data-nimg="1"
        style={{ color: "transparent" }}
        src={projectImageSrc}
        width={200}
        height={48}
      />
    );
  };

  const renderProjects = () => {
    return (
      <>
        {projects.map((project) => (
          <li key={project.projectTitle} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                {renderProjectTitle(project.projectTitle, project.projectUrl)}
                {renderProjectDescription(project.projectDescription)}
              </div>
              {renderProjectImage(project.projectTitle)}
            </div>
          </li>
        ))}
      </>
    );
  };

  // TO DO: Create a new page and add the project archive link when I have more than 4 or 5 projects that I can present

  // const renderProjectArchiveLink = () => {
  //   return (
  //     <div className="mt-12">
  //       <Link
  //         className="group inline-flex items-center font-semibold leading-tight text-slate-200"
  //         aria-label="View Full Project Archive"
  //         href="/archive"
  //       >
  //         <span>
  //           <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
  //             View Full Project&nbsp;
  //           </span>
  //           <span className="whitespace-nowrap">
  //             <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
  //               Archive
  //             </span>
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
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeader sectionName="Projects" />
      <div>
        <ul className="group/list">{renderProjects()}</ul>
        {/* {renderProjectArchiveLink()} */}
      </div>
    </section>
  );
};

export default Projects;
