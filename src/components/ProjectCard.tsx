// components/ProjectCard.tsx
'use client';

import { Project } from '@/types/project';
import { Github, Globe, Play, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export function ProjectCard({ project }: { project: Project }) {
  const [showPreview, setShowPreview] = useState(true);

  const getImageUrl = () => {
    if (!project.images?.thumbnail) {
      return null;
    }
    return project.images.thumbnail;
  };

  const imageUrl = getImageUrl();

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 w-full">
      <div 
        className="w-full h-48 relative bg-zinc-800 cursor-pointer"
        onClick={() => project.links?.live && setShowPreview(!showPreview)}
      >
        {showPreview && project.links?.live ? (
          <iframe
            src={project.links.live}
            className="w-full h-full border-none"
            title={`Preview of ${project.title}`}
          />
        ) : imageUrl ? (
          <img 
            src={imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-zinc-600" />
          </div>
        )}
        {project.links?.live && (
          <div className="absolute bottom-2 right-2 text-xs bg-black/50 px-2 py-1 rounded">
            Click to {showPreview ? 'hide' : 'preview'}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.links?.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-400 hover:text-white transition-colors"
              >
                {project.links.live.replace(/(^\w+:|^)\/\//, '')}
              </a>
            )}
          </div>
          <span className="text-xs bg-zinc-800 px-2 py-1 rounded">
            {project.status}
          </span>
        </div>
        <p className="mt-2 text-zinc-400 text-sm">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span key={tech} className="text-xs bg-zinc-800 px-2 py-1 rounded">
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
          {project.links?.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Play className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}