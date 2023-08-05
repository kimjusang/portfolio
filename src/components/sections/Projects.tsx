import Image from "next/image";
import Link from "next/link";

interface ProjectTypes {
  projectTitle: string;
  projectDescription: string;
  projectUrl: string;
}

const Projects = (): JSX.Element => {
  const projects: ProjectTypes[] = [
    {
      projectTitle: "Project Number 1",
      projectDescription:
        " Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      projectUrl:
        "https://www.newline.co/courses/build-a-spotify-connected-app",
    },
    {
      projectTitle: "Project Number 2",
      projectDescription:
        " Video course that teaches how to build a web app with the Spotify Web API.",
      projectUrl: "https://www.youtube.com/",
    },
  ];

  const renderTitle = (
    projectTitle: ProjectTypes["projectTitle"],
    projectUrl: ProjectTypes["projectUrl"]
  ): JSX.Element => {
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

  const renderDescription = (
    projectDescription: ProjectTypes["projectDescription"]
  ): JSX.Element => {
    return <p className="mt-2 text-sm leading-normal">{projectDescription}</p>;
  };

  const projectImage = () => {
    return (
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
    );
  };

  const renderProjects = (): JSX.Element => {
    return (
      <>
        {projects.map((project) => (
          <li key={project.projectTitle} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                {renderTitle(project.projectTitle, project.projectUrl)}
                {renderDescription(project.projectDescription)}
              </div>
              {projectImage()}
            </div>
          </li>
        ))}
      </>
    );
  };

  const renderProjectArchiveLink = (): JSX.Element => {
    return (
      <div className="mt-12">
        <Link
          className="group inline-flex items-center font-semibold leading-tight text-slate-200"
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
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </Link>
      </div>
    );
  };

  return (
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
        <ul className="group/list">{renderProjects()}</ul>
        {renderProjectArchiveLink()}
      </div>
    </section>
  );
};

export default Projects;
