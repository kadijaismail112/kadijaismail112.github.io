export interface Personal {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: string;
}

export interface Config {
  personal: Personal;
  projects: Project[];
  skills: Skill[];
  blog: BlogPost[];
}