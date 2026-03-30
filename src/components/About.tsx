import { GlassCard } from './ui/glass-card'
import { TechTag } from './ui/tech-tag'

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <GlassCard className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Column */}
            <div className="md:pr-8 md:border-r md:border-white/10">
              <h2 className="text-3xl md:text-5xl font-display text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I design in Framer and ship full-stack web apps.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From GPU particle systems to ML inference APIs —
                  I own every layer. Design, code, deployment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Open to internships and startup roles.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 md:pl-4">
              <div>
                <h3 className="text-lg font-display text-foreground mb-2">Design & 3D</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Framer', 'Spline', 'Adobe XD'].map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display text-foreground mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Three.js', 'WebGL'].map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display text-foreground mb-2">Backend & ML</h3>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'Python', 'Docker', 'AWS', 'LangChain'].map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
