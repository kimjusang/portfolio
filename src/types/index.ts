import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface WorkExperiencesTypes {
  companyName: string;
  jobTitle: string;
  employmentPeriod: string;
  jobDescription: string;
  techStacks: string[];
  url: string;
  ariaLabelForCompanyNameAndJobTitle: string;
  ariaLabelForEmploymentPeriod: string;
}

export interface ProjectTypes {
  projectTitle: string;
  projectDescription: string;
  projectUrl: string;
}

export interface EducationTypes {
  collegeName: string;
  major: string;
  description: string;
}

export interface SectionHeaderTypes {
  sectionName: string;
}
