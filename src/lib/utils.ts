import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Project } from '@/types/project';
import fs from 'fs';
import path from 'path';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProjects(): Project[] {
  try {
    const projectsDirectory = path.join(process.cwd(), 'src/app/data/projects');
    
    const projectFiles = fs.readdirSync(projectsDirectory)
      .filter(file => file.endsWith('.json') && !file.startsWith('.'));
    
    const projects = projectFiles.flatMap(filename => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(fileContents);
      return parsed.default || [];
    });
  
    return projects;
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}