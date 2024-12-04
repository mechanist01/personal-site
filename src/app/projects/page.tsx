import { Project } from '@/types/project';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/lib/utils';

export default function ProjectsPage() {
  const projects: Project[] = getProjects();
  
  const sortedProjects = projects.sort((a, b) => {
    // First, compare status - 'in-progress' should come before 'completed'
    if (a.status !== b.status) {
      return a.status === 'in-progress' ? -1 : 1;
    }
    
    // For projects with the same status, sort by date (newest first)
    // Adding "-01" to create a valid date from YYYY-MM format
    const dateA = new Date(a.date + "-01").getTime();
    const dateB = new Date(b.date + "-01").getTime();
    return dateB - dateA;
  });

  // Group projects by status for better visual organization
  const inProgressProjects = sortedProjects.filter(p => p.status === 'in-progress');
  const completedProjects = sortedProjects.filter(p => p.status === 'completed');

  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-medium mb-6">Projects</h1>
      
      {/* Show in-progress projects section if any exist */}
      {inProgressProjects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">In Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressProjects.map((project) => (
              <div key={project.id} className="flex">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Completed projects section */}
      <section>
        <h2 className="text-xl font-medium mb-4">Completed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedProjects.map((project) => (
            <div key={project.id} className="flex">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}