import { Link } from 'react-router-dom'
import '../../styles/recursos.css'

const arrowIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const cards = [
  {
    title: 'Gerenciamento de Projetos',
    text: 'Organize seus projetos de forma simples e visualize o progresso em tempo real.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    teaser: (
      <svg className="teaser-shapes" viewBox="0 0 150 96" aria-hidden="true">
        <polygon points="10,66 52,8 96,50" fill="rgba(134,102,255,0.28)" />
        <polygon points="40,78 88,26 132,66" fill="rgba(109,78,255,0.45)" />
      </svg>
    ),
  },
  {
    title: 'Kanban Inteligente',
    text: 'Arraste, organize e priorize suas tarefas com um fluxo de trabalho intuitivo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    teaser: (
      <span className="mini-kanban" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    ),
  },
  {
    title: 'Colaboração em Equipe',
    text: 'Trabalhe junto com seu time, compartilhe ideias e mantenha todos alinhados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    teaser: (
      <span className="teaser-team" aria-hidden="true">
        <span className="teaser-avatars">
          <i>A</i>
          <i>M</i>
          <i>L</i>
        </span>
        <span className="teaser-chip">+3</span>
      </span>
    ),
  },
  {
    title: 'Analytics Avançado',
    text: 'Acompanhe métricas, analise sua produtividade e tome decisões melhores.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <rect x="7" y="12" width="3" height="9" rx="1.2" />
        <rect x="12" y="8" width="3" height="13" rx="1.2" />
        <rect x="17" y="4" width="3" height="17" rx="1.2" />
      </svg>
    ),
    teaser: (
      <svg className="teaser-chart" viewBox="0 0 150 120" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="rcFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8666ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8666ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="rgba(255,255,255,0.12)" strokeDasharray="3 4">
          <line x1="0" y1="30" x2="150" y2="30" />
          <line x1="0" y1="60" x2="150" y2="60" />
          <line x1="0" y1="90" x2="150" y2="90" />
        </g>
        <path
          d="M0 92 C 25 80, 38 98, 58 86 C 80 72, 84 38, 108 40 C 126 42, 136 20, 150 14 L 150 120 L 0 120 Z"
          fill="url(#rcFill)"
        />
        <path
          d="M0 92 C 25 80, 38 98, 58 86 C 80 72, 84 38, 108 40 C 126 42, 136 20, 150 14"
          fill="none" stroke="#a394ff" strokeWidth="2.5"
        />
        <circle cx="128" cy="24" r="5" fill="#8666ff" stroke="#0b0a12" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Integrações Poderosas',
    text: 'Conecte com GitHub, Notion e outras ferramentas que você já usa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2h4a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v3h-2.5a2.5 2.5 0 0 0 0 5H21v3a2 2 0 0 1-2 2h-3v-2.5a2.5 2.5 0 0 0-5 0V21H8a2 2 0 0 1-2-2v-3H4a2 2 0 0 1 2-2h2.5a2.5 2.5 0 0 0 0-5H6V8a2 2 0 0 1 2-2h0z" />
      </svg>
    ),
    teaser: (
      <span className="teaser-integrations" aria-hidden="true">
        <span className="int">
          <svg viewBox="0 0 24 24" fill="#f2f1f7">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
          </svg>
        </span>
        <span className="int notion">N</span>
        <span className="int slack">
          <svg viewBox="0 0 24 24">
            <path d="M9.5 2.5a2 2 0 1 0 0 4H11.5v-2a2 2 0 0 0-2-2zm0 4h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4z" fill="#36c5f0" />
            <path d="M21.5 9.5a2 2 0 1 0-4 0V11.5h2a2 2 0 0 0 2-2zm-4 0v-4a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z" fill="#2eb67d" />
            <path d="M14.5 21.5a2 2 0 1 1 0-4H12.5v2a2 2 0 0 0 2 2zm0-4h4a2 2 0 1 0 0-4h-4a2 2 0 1 0 0 4z" fill="#ecb22e" />
            <path d="M2.5 14.5a2 2 0 1 0 4 0V12.5h-2a2 2 0 0 0-2 2zm4 0v4a2 2 0 1 0 4 0v-4a2 2 0 1 0-4 0z" fill="#e01e5a" transform="scale(-1,1) translate(-22,0)" />
          </svg>
        </span>
        <span className="int-plus">＋</span>
      </span>
    ),
  },
  {
    title: 'Segurança de Alto Nível',
    text: 'Seus dados sempre protegidos com criptografia e boas práticas de segurança.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    teaser: (
      <svg className="teaser-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2.5 3.5 6v6c0 5.5 7.3 9.5 8.5 10 1.2-.5 8.5-4.5 8.5-10V6L12 2.5z" />
        <path d="m8.8 11.8 2.2 2.2 4.2-4.4" />
      </svg>
    ),
  },
]

function Recursos() {
  return (
    <section id="recursos" className="recursos">
      <span className="arc arc-1" aria-hidden="true" />
      <span className="arc arc-2" aria-hidden="true" />

      <div className="container">
        <header className="recursos-head">
          <span className="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            Recursos
          </span>
          <h1 className="recursos-title">
            Tudo o que você precisa para ser <span className="grad-text">mais produtivo</span>
          </h1>
          <p className="recursos-sub">
            Uma plataforma completa com ferramentas poderosas para gerenciar seus
            projetos, colaborar com sua equipe e acompanhar seu progresso.
          </p>
        </header>

        <section className="recursos-grid">
          {cards.map((card) => (
            <article key={card.title} className="rcard">
              <div className="rcard-top">
                <span className="rcard-icon">{card.icon}</span>
                {card.teaser}
              </div>
              <div className="rcard-bottom">
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
                <button className="rcard-arrow" type="button" aria-label={`Saiba mais sobre ${card.title}`}>
                  {arrowIcon}
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="cta">
          <div className="cta-copy">
            <span className="cta-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
                <path d="M2 9h20M12 3l-4 6M12 3l4 6M8 9l4 12 4-12" />
              </svg>
              Mais produtividade, menos caos
            </span>
            <h2 className="cta-title">
              Pronto para levar seus projetos para o <span className="text-accent">próximo nível?</span>
            </h2>
            <p className="cta-sub">Comece agora e descubra todo o potencial do DevFlow.</p>
            <div className="cta-actions">
              <Link to="/cadastro" className="btn btn-primary">
                Criar conta grátis
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="cta-visual" aria-hidden="true">
            <div className="cta-stat">
              <strong>
                +124%
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 17l6-6 4 4 6-8" />
                  <path d="M15 7h5v5" />
                </svg>
              </strong>
              <small>de produtividade</small>
            </div>

            <svg className="cta-orbit" viewBox="0 0 320 140" fill="none">
              <ellipse cx="160" cy="70" rx="150" ry="56" stroke="rgba(134,102,255,0.5)" strokeWidth="1.5" />
            </svg>
            <span className="cta-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 7 9 12 4 17" />
                <polyline points="12 6 17 6 22 12 17 18 12 18" />
              </svg>
            </span>

            <div className="cta-phone">
              <div className="cta-phone-brand">
                <i>⟩</i>
                DevFlow
              </div>
              <div className="cta-phone-menu">
                <span>▤ Dashboard</span>
                <span>▢ Projetos</span>
                <span>☑ Tarefas</span>
                <span>☷ Equipes</span>
                <span>▲ Analytics</span>
              </div>
              <p className="cta-phone-hand">
                <em>Bem-vindo de volta,</em>
                <span>Marcos! 👋</span>
              </p>
              <div className="cta-phone-chart">
                <svg viewBox="0 0 220 60" preserveAspectRatio="none">
                  <path d="M0 46 C 25 34, 35 52, 55 42 C 80 30, 85 12, 110 16 C 135 20, 140 38, 165 28 C 185 20, 205 14, 220 16" fill="none" stroke="#a394ff" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Recursos
