// app/projects/page.tsx
import { Project } from '@/types/project';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/lib/utils';

export default function ProjectsPage() {
  const projects: Project[] = getProjects();
  
  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.date + "-01").getTime();
    const dateB = new Date(b.date + "-01").getTime();
    return dateB - dateA;
  });

  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-medium mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProjects.map((project) => (
          <div key={project.id} className="flex">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  );
}