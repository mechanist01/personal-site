// components/MiniProjectCard.tsx
import { Project } from '@/types/project';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

export function MiniProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-4 md:p-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-700">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-sm text-zinc-400 mt-1">{project.description}</p>
        </div>
        <div className="flex gap-3">
          {project.links?.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.links?.live && (
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}