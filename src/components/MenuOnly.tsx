import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function MenuOnly() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 flex justify-end">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-40 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md overflow-hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
