import { GraduationCap, Award, Clock } from 'lucide-react'
import { GlassCard } from './ui/glass-card'

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">
            Education & Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Education Card */}
          <GlassCard className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-foreground" size={20} />
              <h3 className="text-lg font-display text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="pb-3 border-b border-white/10">
                <h4 className="text-foreground font-display text-sm">B.Tech in Cybersecurity</h4>
                <p className="text-xs text-muted-foreground">University of Engineering & Management (UEM), Kolkata</p>
                <p className="text-xs text-muted-foreground mt-1">Expected May 2029</p>
              </div>
              <div>
                <h4 className="text-foreground font-display text-sm">Senior Secondary — Science (PCM)</h4>
                <p className="text-xs text-muted-foreground">Kendriya Vidyalaya</p>
                <p className="text-xs text-muted-foreground mt-1">2025</p>
              </div>
            </div>
          </GlassCard>

          {/* Achievements Card */}
          <GlassCard className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-foreground" size={20} />
              <h3 className="text-lg font-display text-foreground">Achievements</h3>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground">East India Blockchain Summit 2.0</span> — Finalist
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground">IIT Kharagpur Data Science Hackathon 2026</span> — Participant
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground">Deloitte Cyber Job Simulation</span> — Forage
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground">HCL GUVI Certificate</span> — AI Impact Track
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground">Buildathon</span> — Participant
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground">Convolve 4.0</span> — Participant
              </div>
            </div>
          </GlassCard>

          {/* Currently Card */}
          <GlassCard className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-foreground" size={20} />
              <h3 className="text-lg font-display text-foreground">Currently</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-foreground font-display text-sm">Building</span>
                <p className="text-xs text-muted-foreground">Open source projects</p>
              </div>
              <div>
                <span className="text-foreground font-display text-sm">Learning</span>
                <p className="text-xs text-muted-foreground">Advanced ML systems</p>
              </div>
              <div>
                <span className="text-foreground font-display text-sm">Reading</span>
                <p className="text-xs text-muted-foreground">System design</p>
              </div>
              <div>
                <span className="text-foreground font-display text-sm">Open to</span>
                <p className="text-xs text-muted-foreground">Internships & startup roles</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
