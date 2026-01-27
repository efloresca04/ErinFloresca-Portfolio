export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  duties: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  date: string;
  gpa?: string;
  coursework?: string;
  honors?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  isPrimary?: boolean;
}