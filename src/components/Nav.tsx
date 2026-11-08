import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

const links = [
  { label: 'Início', id: 'inicio' },
  { label: 'Recursos', id: 'recursos' },
  { label: 'Sobre', id: 'sobre' },
]

/**
 * Navbar com scroll-spy: observa as seções da página (por id)
 * e destaca o link da seção que está no meio do viewport.
 * Lógica simples e provisória — ajuste como preferir.
 */
function Nav() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#inicio">
          <span className="brand-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 7 9 12 4 17" />
              <polyline points="12 6 17 6 22 12 17 18 12 18" />
            </svg>
          </span>
          <span className="brand-name">DevFlow</span>
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'nav-link is-active' : 'nav-link'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="btn btn-ghost btn-sm" to="/entrar">Entrar</Link>
          <Link className="btn btn-primary btn-sm" to="/cadastro">
            Criar conta
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Nav
