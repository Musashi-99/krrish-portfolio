import { Globe, Link, Mail } from 'lucide-react'
import { navLinks } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display text-foreground">
              Krrish<sup className="text-xs">.dev</sup>
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Backend Engineer & UI/UX Designer. Open to Internships & Startup Roles.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Musashi-99"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Globe size={20} />
              </a>
              <a
                href="https://linkedin.com/in/krrishbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Link size={20} />
              </a>
              <a
                href="mailto:musashikk99@gmail.com"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Krrish Kumar. All rights reserved.</p>
          <p>Designed & Built by Krrish</p>
        </div>
      </div>
    </footer>
  )
}
