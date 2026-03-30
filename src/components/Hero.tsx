import { ChevronDown } from 'lucide-react'
import { StarButton } from './ui/star-button'

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] min-h-screen">
      <h1 className="animate-fade-rise text-3xl sm:text-5xl md:text-7xl leading-[1.1] tracking-tight max-w-7xl font-display font-normal text-foreground">
        Krrish Kumar
        <br />
        <em className="not-italic text-muted-foreground">I build interfaces people actually want to use.</em>
      </h1>

      <div className="animate-fade-rise-delay flex flex-col sm:flex-row gap-8 mt-12">
        <a href="/resumes/krrish_uiux_resume (5).pdf" target="_blank" rel="noopener noreferrer">
          <StarButton lightColor="#3ca2fa" className="bg-black/40">
            UI/UX RESUME
          </StarButton>
        </a>
        <a href="/resumes/krrish_final_resume.pdf" target="_blank" rel="noopener noreferrer">
          <StarButton lightColor="#FFFFFF" className="bg-transparent">
            FULL STACK RESUME
          </StarButton>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  )
}
