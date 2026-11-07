function Inicio() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            Sua produtividade, em outro nível
          </span>

          <h1 className="hero-title">
            Organize seus projetos, <span className="text-accent">alcance mais.</span>
          </h1>

          <p className="hero-sub">
            DevFlow é a plataforma completa para desenvolvedores gerenciarem
            projetos, tarefas e equipes de forma simples, intuitiva e eficiente.
          </p>

          <div className="hero-actions">
            <a href="#comecar" className="btn btn-primary">
              Comece agora
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>    
          </div>
        </div>

        {/* Mockup do dashboard */}
        <div className="hero-visual" aria-hidden="true">
          <span className="float-icon float-github">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
          </span>
          <span className="float-icon float-figma">
            <span className="dot dot-red" /><span className="dot dot-purple" />
            <span className="dot dot-blue" /><span className="dot dot-green" />
            <span className="dot dot-orange" />
          </span>
          <span className="float-icon float-code">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 8 5 12 9 16" />
              <polyline points="15 8 19 12 15 16" />
            </svg>
          </span>

          <div className="dash">
            <div className="dash-sidebar">
              <div className="dash-brand">
                <span className="dash-brand-logo">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 7 9 12 4 17" />
                    <polyline points="12 6 17 6 22 12 17 18 12 18" />
                  </svg>
                </span>
                DevFlow
              </div>
              <nav className="dash-menu">
                <span className="dash-item is-active">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
                  Dashboard
                </span>
                <span className="dash-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>
                  Projetos
                </span>
                <span className="dash-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  Tarefas
                </span>
                <span className="dash-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Equipes
                </span>
                <span className="dash-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  Analytics
                </span>
                <span className="dash-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
                  Integrações
                </span>
                <span className="dash-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  Configurações
                </span>
              </nav>
              <div className="dash-user">
                <span className="dash-avatar">M</span>
                <span>
                  <strong>Marcos Mendes</strong>
                  <small>Desenvolvedor</small>
                </span>
              </div>
            </div>

            <div className="dash-main">
              <div className="dash-topbar">
                <span className="dash-search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4-4"/></svg>
                  Buscar algo...
                </span>
                <span className="dash-bell">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>
                </span>
                <span className="dash-avatar dash-avatar-sm">M</span>
              </div>

              <div className="dash-welcome">
                <p className="hand">
                  <em>Bem-vindo de volta,</em>
                  <span>Marcos! 👋</span>
                </p>
                <span className="pill pill-green">↑ +12.5%</span>
              </div>

              <div className="dash-chart">
                <svg viewBox="0 0 320 110" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7c6cff" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#7c6cff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 85 C 25 70, 40 92, 60 86 C 85 78, 95 38, 120 44 C 145 50, 150 82, 175 76 C 200 70, 205 22, 235 28 C 262 33, 268 58, 290 48 C 302 42, 312 38, 320 40 L 320 110 L 0 110 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 85 C 25 70, 40 92, 60 86 C 85 78, 95 38, 120 44 C 145 50, 150 82, 175 76 C 200 70, 205 22, 235 28 C 262 33, 268 58, 290 48 C 302 42, 312 38, 320 40"
                    fill="none" stroke="#a394ff" strokeWidth="2.5"
                  />
                  <circle cx="235" cy="28" r="4" fill="#0b0a12" stroke="#b9adff" strokeWidth="2.5" />
                </svg>
              </div>

              <div className="dash-stats">
                <div className="dash-stat">
                  <span className="stat-icon stat-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>
                  </span>
                  <span>
                    <small>Projetos Ativos</small>
                    <strong>12</strong>
                  </span>
                </div>
                <div className="dash-stat">
                  <span className="stat-icon stat-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="m8 12 3 3 5-6"/></svg>
                  </span>
                  <span>
                    <small>Tarefas Concluídas</small>
                    <strong>148</strong>
                  </span>
                </div>
                <div className="dash-stat">
                  <span className="stat-icon stat-violet">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
                  </span>
                  <span>
                    <small>Produtividade</small>
                    <strong>92%</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
