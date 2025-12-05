export type WindowId = 'resume' | 'projects' | 'experience' | 'contact';

export interface WindowState {
  id: WindowId;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  duration: string;
  highlights: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  techStack: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: Education[];
  skills: {
    technical: string[];
    tools: string[];
  };
  certifications: string[];
  achievements: string[];
}
