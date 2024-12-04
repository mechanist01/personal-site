// types/project.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    images: {
      thumbnail: string;
      gallery: string[];
    };
    links?: {
      github?: string;
      live?: string;
      demo?: string;
    };
    date: string;
    status: 'completed' | 'in-progress';
    category: string;
    featured: boolean;
    pinned?: boolean;  // Added the pinned property as optional
  }
  
  // Example project:
  const exampleProject: Project = {
    id: "personal-website",
    title: "Personal Portfolio Website",
    description: "A modern portfolio website built with Next.js and TypeScript",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    images: {
      thumbnail: "/projects/portfolio-thumb.jpg",
      gallery: ["/projects/portfolio-1.jpg", "/projects/portfolio-2.jpg"]
    },
    links: {
      github: "https://github.com/username/project",
      live: "https://website.com"
    },
    date: "2024-03",
    status: "completed",
    category: "web",
    featured: true
  }