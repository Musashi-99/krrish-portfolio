"use client";
import { Globe, Mail } from "lucide-react";

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/krrishbuilds', icon: <Globe size={16} /> },
  { name: 'GitHub', href: 'https://github.com/Musashi-99', icon: <Globe size={16} /> },
  { name: 'Email', href: 'mailto:musashikk99@gmail.com', icon: <Mail size={16} /> },
]

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative mx-auto w-fit rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-2">
          <div className="flex items-center gap-1">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-white/40 mt-6">
          &copy; {new Date().getFullYear()} Krrish Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
