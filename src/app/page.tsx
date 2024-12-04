import { getProjects } from '@/lib/utils';
import { MiniProjectCard } from '@/components/MiniProjectCard';

export default async function Home() {
  const projects = await getProjects();
  
  // Separate pinned and unpinned projects
  const pinnedProjects = projects.filter(project => project.pinned);
  const unpinnedProjects = projects.filter(project => !project.pinned);
  
  // Sort unpinned projects by date and get the latest ones
  const latestUnpinnedProjects = unpinnedProjects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3 - pinnedProjects.length); // Adjust slice to account for pinned projects
    
  // Combine pinned and latest projects
  const displayProjects = [...pinnedProjects, ...latestUnpinnedProjects];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 md:mb-8 p-4 md:p-6 bg-zinc-900 border border-zinc-800">
        <h1 className="text-xl md:text-2xl font-medium mb-2 md:mb-3">Welcome</h1>
        <p className="text-zinc-400 text-sm md:text-base">Building digital experiences & sharing my journey</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Latest Projects</h2>
        <div className="space-y-4">
          {displayProjects.map((project) => (
            <MiniProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="p-4 md:p-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-700">
          <h2 className="text-lg font-medium mb-2 md:mb-3">Latest Post</h2>
          <p className="text-zinc-400 text-sm md:text-base">Thoughts on minimal design</p>
        </div>

        <div className="p-4 md:p-6 bg-zinc-900 border border-zinc-800 hover:border-zinc-700">
          <h2 className="text-lg font-medium mb-2 md:mb-3">Get in Touch</h2>
          <p className="text-zinc-400 text-sm md:text-base">Let's collaborate on your next project</p>
        </div>
      </div>
    </div>
  );
}