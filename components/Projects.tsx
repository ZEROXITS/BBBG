
import React from 'react';

const projects = [
  {
    title: 'Project Neptune',
    description: 'An interactive underwater exploration simulator using WebGL and real-time physics.',
    imageUrl: 'https://picsum.photos/seed/neptune/600/400',
    tags: ['WebGL', 'Three.js', 'Physics Engine']
  },
  {
    title: 'Cyber Dashboard',
    description: 'A futuristic data visualization dashboard for monitoring complex systems.',
    imageUrl: 'https://picsum.photos/seed/cyber/600/400',
    tags: ['React', 'D3.js', 'Data Viz']
  },
  {
    title: 'Aura UI Kit',
    description: 'A design system focused on accessibility and neon aesthetics for modern web apps.',
    imageUrl: 'https://picsum.photos/seed/aura/600/400',
    tags: ['UI/UX', 'Figma', 'Component Library']
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-6xl scroll-mt-20">
      <h2 className="text-5xl font-bold text-cyan-300 text-center mb-12 tracking-wider">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-[0_0_30px_theme(colors.cyan.500)] hover:-translate-y-2">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-200 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-cyan-900/50 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
