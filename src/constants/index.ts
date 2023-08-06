import { type ProjectTypes, type WorkExperiencesTypes } from "~/types";

export const workExperiences: WorkExperiencesTypes[] = [
  {
    companyName: `UXPin`,
    jobTitle: "Software Engineer",
    employmentPeriod: "2021 — Present",
    jobDescription:
      "Develop new features for the UI/UX design tool of UXPin, enabling clients like PayPal, Porsche, Texas Instruments, and others to create final product-looking prototypes with advanced interactions. Additionally, improve performance by refactoring and analyzing technical metrics.",
    techStacks: [
      "React",
      "Redux",
      "Node.js",
      "Ruby on Rails",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "LESS",
      "MySQL",
    ],
    url: "https://www.uxpin.com/",
    ariaLabelForCompanyNameAndJobTitle: "Software Engineer at UXPin",
    ariaLabelForEmploymentPeriod: "2021 to Present",
  },
];

export const projects: ProjectTypes[] = [
  {
    projectTitle: "Project Number 1",
    projectDescription:
      " Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    projectUrl: "https://www.newline.co/courses/build-a-spotify-connected-app",
  },
  {
    projectTitle: "Project Number 2",
    projectDescription:
      " Video course that teaches how to build a web app with the Spotify Web API.",
    projectUrl: "https://www.youtube.com/",
  },
];
