import { useState } from 'react'
import { ExternalLink, Globe, ArrowUpRight, X } from 'lucide-react'
import { projects } from '@/lib/data'
import { GlassCard } from './ui/glass-card'
import { TechTag } from './ui/tech-tag'

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <GlassCard 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={20} className="text-white" />
        </button>
        
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs text-foreground border border-white/20 rounded-full bg-white/5">
              {project.tag}
            </span>
          </div>
          
          <h2 className="text-2xl font-display text-foreground mb-4">
            {project.title}
          </h2>
          
          <p className="text-muted-foreground mb-6 whitespace-pre-line leading-relaxed">
            {project.fullDescription || project.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-sm font-display text-foreground mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <TechTag key={tech}>
                  {tech}
                </TechTag>
              ))}
            </div>
          </div>
          
          <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-foreground">
              <ArrowUpRight size={16} />
              <span className="font-display">Impact</span>
            </div>
            <p className="text-muted-foreground mt-2">{project.impact}</p>
          </div>
          
          <div className="flex gap-4">
            {project.href !== '#' && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-display text-sm hover:bg-white/90 transition-colors"
              >
                <ExternalLink size={16} />
                View Live
              </a>
            )}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg font-display text-sm hover:bg-white/10 transition-colors"
              >
                <Globe size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <section id="projects" className="relative z-10 py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end projects from ML systems to interactive 3D experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <GlassCard
                  className="p-6 flex flex-col group hover:border-white/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 text-xs text-foreground border border-white/20 rounded-full bg-white/5">
                      {project.tag}
                    </span>
                    <div className="flex gap-2">
                      {project.href !== '#' && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-display text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <TechTag key={tech}>
                        {tech}
                      </TechTag>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-foreground border-t border-white/10 pt-4 mt-auto">
                    <ArrowUpRight size={14} />
                    <span>{project.impact}</span>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  )
}
