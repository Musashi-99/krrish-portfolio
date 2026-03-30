import { GlassCard } from './ui/glass-card'
import { TechTag } from './ui/tech-tag'

const skillCategories = [
  { 
    title: 'Backend & APIs', 
    items: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'Python'
    ] 
  },
  { 
    title: 'AI & ML', 
    items: [
      'Scikit-learn',
      'XGBoost',
      'SHAP',
      'Pandas',
      'NumPy'
    ] 
  },
  { 
    title: 'Cloud & DevOps', 
    items: [
      'AWS',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Vercel',
      'GCP',
      'Linux'
    ] 
  },
  { 
    title: 'Frontend', 
    items: [
      'React',
      'Next.js',
      'Three.js',
      'Tailwind CSS',
      'GLSL',
      'TypeScript',
      'WebGL',
      'MediaPipe'
    ] 
  },
  { 
    title: 'Design', 
    items: [
      'Figma',
      'Framer',
      'Adobe XD',
      'Spline 3D',
      'Canva'
    ] 
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full-stack capabilities across backend, AI/ML, cloud, and design.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillCategories.map((category) => (
            <GlassCard key={category.title} className="p-5 h-full">
              <h3 className="text-base font-display text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <TechTag key={skill}>
                    {skill}
                  </TechTag>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
