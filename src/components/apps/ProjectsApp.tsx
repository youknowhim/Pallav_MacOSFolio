import { useState } from 'react';
import { ExternalLink, Github, Calendar, Sparkles, X } from 'lucide-react';
import { projects } from '@/data/portfolioData';
import { Project } from '@/types/desktop';
import { cn } from '@/lib/utils';

export function ProjectsApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
  ];

  return (
    <div className="h-full overflow-y-auto scrollbar-macos p-6">
      {selectedProject ? (
        <div className="animate-fade-in">
          {/* Back Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
            Close Project
          </button>

          {/* Project Detail */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className={cn(
                'w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center flex-shrink-0',
                projectColors[projects.findIndex(p => p.id === selectedProject.id) % 3]
              )}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{selectedProject.title}</h1>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar className="w-3 h-3" />
                  {selectedProject.duration}
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-4">
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="glass-panel rounded-xl p-4">
              <h3 className="font-medium mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-xl p-4">
              <h3 className="font-medium mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {selectedProject.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedProject.links && (
              <div className="flex gap-3">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <h2 className="text-xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-panel rounded-2xl p-4 text-left hover:scale-[1.02] transition-transform group"
              >
                <div className={cn(
                  'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4',
                  'group-hover:scale-110 transition-transform',
                  projectColors[index % 3]
                )}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{project.duration}</p>
                <p className="text-sm text-foreground/70 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/50 text-accent-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
