"use client";

import { Project } from '@/types/project';
import { Github, Globe, Pin } from 'lucide-react';

export function MiniProjectCard({ project }: { project: Project }) {
  return (
    <div className={`
      p-4 md:p-6 
      ${project.pinned 
        ? 'bg-white border-[#1a73e8] shadow-md hover:shadow-lg' 
        : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
      }
      border
      transition-all duration-200
      cursor-pointer
    `}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={`font-medium ${project.pinned ? 'text-[#1a73e8]' : 'text-white'}`}>
              {project.title}
            </h3>
            {project.pinned && (
              <Pin className="w-4 h-4 text-[#1a73e8]" />
            )}
          </div>
          <div className="h-20 overflow-y-auto mt-1 pr-2 custom-scrollbar">
            <p className={`text-sm ${project.pinned ? 'text-[#5f6368]' : 'text-zinc-400'}`}>
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex gap-3 ml-4">
          {project.links?.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${project.pinned 
                  ? 'text-[#5f6368] hover:text-[#1a73e8]' 
                  : 'text-zinc-400 hover:text-white'
                }
                transition-colors
              `}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.links?.live && (
            <a 
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                ${project.pinned 
                  ? 'text-[#5f6368] hover:text-[#1a73e8]' 
                  : 'text-zinc-400 hover:text-white'
                }
                transition-colors
              `}
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}