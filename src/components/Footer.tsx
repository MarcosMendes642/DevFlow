import { Link } from 'react-router-dom'
import '../styles/footer.css'

const columns = [
  {
    title: 'Produto',
    links: [
      { label: 'Início', href: '#inicio' },
      { label: 'Recursos', href: '#recursos' },
      { label: 'Sobre', href: '#sobre' },
    ],
  },
  {
    title: 'Conta',
    links: [
      { label: 'Criar conta grátis', href: '/cadastro', accent: true },
      { label: 'Entrar', href: '/entrar' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de ajuda', href: '#' },
      { label: 'Contato', href: '#' },
      { label: 'Status do sistema', href: '#' },
    ],
  },
]

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#inicio">
              <span className="brand-logo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 7 9 12 4 17" />
                  <polyline points="12 6 17 6 22 12 17 18 12 18" />
                </svg>
              </span>
              <span className="brand-name">DevFlow</span>
            </a>

            <p className="footer-tagline">
              A plataforma completa para desenvolvedores gerenciarem projetos,
              tarefas e equipes — com menos fricção e mais fluxo.
            </p>

            <div className="footer-social">
              <a href="#" aria-label="GitHub do DevFlow" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter) do DevFlow" title="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.2 21H.9l7.7-8.8L1 3h6.8l4.7 6.2L17.5 3zm-1.2 16h1.8L6.8 4.9H4.9L16.3 19z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn do DevFlow" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.16h4.56V23H.22V8.16zM8.34 8.16h4.37v2.03h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v8.18h-4.55v-7.26c0-1.73-.03-3.96-2.41-3.96-2.42 0-2.79 1.89-2.79 3.83V23H8.34V8.16z" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className="footer-col" aria-label={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => {
                  const isRoute = link.href.startsWith('/')
                  return (
                    <li key={link.label}>
                      {isRoute ? (
                        <Link
                          to={link.href}
                          className={link.accent ? 'is-accent' : undefined}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={link.accent ? 'is-accent' : undefined}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {year} DevFlow · <span className="hand-note">feito com <i>💜</i> por Marcos Mendes</span>
          </p>
          <div className="footer-legal">
            <a href="#">Termos de uso</a>
            <a href="#">Privacidade</a>
            <a href="#">Licença</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
