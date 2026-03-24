export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  outsourcedTo?: OutsourcedProject[];
  link?: string;
}

export interface OutsourcedProject {
  company: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  context: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  achievements?: string[];
}
