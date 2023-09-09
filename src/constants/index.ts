import {
  type EducationTypes,
  type ProjectTypes,
  type WorkExperiencesTypes,
} from "~/types";

export const workExperiences: WorkExperiencesTypes[] = [
  {
    companyName: "UXPin",
    jobTitle: "Software Engineer",
    employmentPeriod: "2021 — Present",
    jobDescription:
      "Develop new features and maintain infrastructures for the UI/UX design tool of UXPin, enabling clients like PayPal, Porsche, Texas Instruments, and others to create final product-looking prototypes with advanced interactions. Additionally, improve performance by refactoring and analyzing technical metrics.",
    techStacks: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Ruby on Rails",
      "MySQL",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "React",
      "Redux",
      "SCSS",
      "LESS",
    ],
    url: "https://www.uxpin.com/",
    ariaLabelForCompanyNameAndJobTitle: "Software Engineer at UXPin",
    ariaLabelForEmploymentPeriod: "2021 to Present",
  },
];

export const projects: ProjectTypes[] = [
  {
    projectTitle: "jusangkim.com",
    projectDescription:
      "My personal portfolio website that showcases what I have done and experienced as a software engineer. Built with Next.js and Tailwind CSS",
    projectUrl: "https://www.jusangkim.com/",
  },
];

export const educations: EducationTypes[] = [
  {
    collegeName: "University of Utah",
    major: "Information Systems, B.S.",
    description:
      "Learned fundamentals of computer science, including algorithms, data structures, and computer organization. Also, developed practical skills in programming and software design. (Go Utes!)",
  },
];
