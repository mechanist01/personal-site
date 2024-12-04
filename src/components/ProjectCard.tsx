// components/ProjectCard.tsx
'use client';

import { Project } from '@/types/project';
import { Github, Globe, Play } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 w-full hover:border-zinc-700">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1 max-w-[75%]">
            <h3 className="text-lg font-semibold break-words">{project.title}</h3>
            {project.links?.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-400 hover:text-white transition-colors break-all"
              >
                {project.links.live.replace(/(^\w+:|^)\/\//, '')}
              </a>
            )}
          </div>
          <span className="text-xs bg-zinc-800 px-2 py-1 shrink-0">
            {project.status}
          </span>
        </div>
        <div className="h-20 overflow-y-auto mt-2 pr-2 custom-scrollbar">
          <p className="text-zinc-400 text-sm">{project.description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span key={tech} className="text-xs bg-zinc-800 px-2 py-1">
              {tech}
            </span>
          )) || null}
        </div>
        <div className="mt-4 flex gap-3">
          {project.links?.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="View GitHub repository"
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
              aria-label="Visit live site"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
          {project.links?.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Watch demo"
            >
              <Play className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}