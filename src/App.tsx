import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsCarousel from './components/SkillsCarousel'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/ui/sticky-footer'

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SkillsCarousel />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
