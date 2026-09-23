import { useEffect, useRef, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

interface NavItemProps {
  label: string
  href: string
}

const menuOptions: NavItemProps[] = [
  {
    label: 'Inicio',
    href: '#inicio',
  },
  {
    label: 'Proyectos',
    href: '#proyectos',
  },
  {
    label: 'Habilidades',
    href: '#habilidades',
  },
  {
    label: 'Sobre Mí',
    href: '#sobre-mi',
  },
  {
    label: 'Contacto',
    href: '#contacto',
  },
]

function NavItem({ label, href }: NavItemProps) {
  return (
    <li className="text-zinc-400 hover:text-red-500 transition-colors">
      <a className="block" href={href}>
        {label}
      </a>
    </li>
  )
}

export function NavBar() {
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
    const onClickOutside = (e: MouseEvent | TouchEvent) => {
      const element = e.target

      if (!(element instanceof Node)) return

      if (menuButtonRef.current && menuButtonRef.current.contains(element))
        return

      if (menuRef.current && !menuRef.current.contains(element)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('touchstart', onClickOutside)

    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('touchstart', onClickOutside)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-brand-dark/70 backdrop-blur-md border-b border-brand-border z-100">
      <div className="relative flex justify-between items-center gap-x-1 max-w-7xl mx-auto px-6 py-4">
        <a href="#inicio">
          <h1 className="font-bold text-lg text-white tracking-tight text-nowrap">
            Alexander <span className="text-red-500">Guacán</span>
          </h1>
        </a>

        {/* Desktop Mobile Menu */}
        <nav className="hidden list-none md:flex items-center gap-x-6 text-sm font-medium">
          {menuOptions.map((option, index) => (
            <NavItem key={index} label={option.label} href={option.href} />
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          className="text-zinc-400 hover:text-white focus:outline-none text-2xl md:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <IoMdMenu />
        </button>

        {/* Mobile Nav Menu */}
        <nav
          ref={menuRef}
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-[#18181b] px-6 py-4 space-y-2 list-none border-b border-brand-border md:hidden`}
        >
          {menuOptions.map((option, index) => (
            <NavItem key={index} label={option.label} href={option.href} />
          ))}
        </nav>
      </div>
    </header>
  )
}
