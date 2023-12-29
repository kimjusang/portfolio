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
      "Develop new features and improve infrastructures for the UI/UX design tool of UXPin, enabling clients like PayPal, Porsche, Texas Instruments, and others to create final product-looking prototypes with advanced interactions. Additionally, improve performance by refactoring and analyzing technical metrics.",
    techStacks: [
      "Docker",
      "Kubernetes",
      "AWS",
      "MySQL",
      "PostgreSQL",
      "Ruby",
      "Ruby on Rails",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Redux",
      "SCSS",
      "LESS",
      "Prometheus",
      "Grafana",
    ],
    url: "https://www.uxpin.com/",
    ariaLabelForCompanyNameAndJobTitle: "Software Engineer at UXPin",
    ariaLabelForEmploymentPeriod: "2021 to Present",
  },
];

export const projects: ProjectTypes[] = [
  {
    projectTitle: "Kubernetes Monitoring System",
    projectDescription:
      "In multiple Kubernetes clusters, created a monitoring system that checks the health of applications and resources using Prometheus and Grafana. This monitoring system continuously collects data on system performance and stores it in a time-series database. This enables the identification and diagnosis of problems, the setup of alerts, and the optimization of systems for maximum efficiency.",
    projectUrl: "hhttps://github.com/prometheus-operator/kube-prometheus",
  },
  {
    projectTitle: "UXPin Merge",
    projectDescription:
      "Merge offers an innovative approach, enabling users to seamlessly integrate and synchronize React.js components, sourced from GIT repositories, directly into the UXPin Editor. These imported components are exact replicas of the ones used in development, ensuring that their appearance, behavior, and functionality (including interactions and data handling) mirror the actual product as encountered by end-users.",
    projectUrl: "https://www.uxpin.com/docs/merge/what-is-uxpin-merge/",
  },
  {
    projectTitle: "UXPin Dashboard",
    projectDescription:
      "UXPin Dashboard provides a comprehensive interface for accessing and managing all prototypes, including wireframes, mockups, and designs. This centralized system not only facilitates viewing and organizing these components but also controls user permissions, ensuring that every aspect of the project mirrors the quality and functionality of the final product as it would appear to end-users.",
    projectUrl: "https://www.uxpin.com/docs/dashboard/projects/",
  },
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
