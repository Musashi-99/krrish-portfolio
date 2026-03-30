import { SocialIcons } from './ui/social-icons'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="relative px-2 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pl-2">
            <SocialIcons />
          </div>
        </div>
      </div>
    </nav>
  )
}
