const features = [
  {
    title: 'Produtividade Real',
    text: 'Acompanhe seu progresso com métricas detalhadas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
    ),
  },
  {
    title: 'Trabalho em Equipe',
    text: 'Colabore com sua equipe em tempo real.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: 'Integrações Poderosas',
    text: 'Conecte com GitHub e outras ferramentas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2h4a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v3h-2.5a2.5 2.5 0 0 0 0 5H21v3a2 2 0 0 1-2 2h-3v-2.5a2.5 2.5 0 0 0-5 0V21H8a2 2 0 0 1-2-2v-3H4a2 2 0 0 1 2-2h2.5a2.5 2.5 0 0 0 0-5H6V8a2 2 0 0 1 2-2h0z"/></svg>
    ),
  },
  {
    title: 'Seguro e Confiável',
    text: 'Seus dados sempre protegidos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
  {
    title: 'Interface Moderna',
    text: 'Uma experiência fluida e intuitiva.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
    ),
  },
]

const checklist = [
  'Quadros Kanban intuitivos',
  'Calendário integrado',
  'Relatórios em tempo real',
]

function Recurso() {
  return (
    <section id="projetos" className="recursos-home">
      <div className="container">
        <div className="feature-strip">
          {features.map((feature) => (
            <article key={feature.title} className="feature">
              <span className="feature-icon">{feature.icon}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="showcase">
          <div className="showcase-visual" aria-hidden="true">
            <div className="kanban-window">
              <span className="window-dots">
                <i /><i /><i />
              </span>
              <div className="kanban-body">
                <div className="kanban-sidebar">
                  <strong>DevFlow</strong>
                  <ul>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg> Dashboard</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg> Projetos</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> Tarefas</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Equipes</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg> Configurações</li>
                  </ul>
                </div>

                <div className="kanban-main">
                  <header className="kanban-header">
                    <h4>Projetos</h4>
                    <span className="kanban-search">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4-4"/></svg>
                      Buscar projetos...
                    </span>
                    <span className="kanban-add">＋ Novo projeto</span>
                  </header>

                  <div className="kanban-columns">
                    <div className="kanban-col">
                      <header><span className="col-dot dot-red" /> A Fazer <em>12</em></header>
                      <div className="kanban-card">
                        <p>Interface do dashboard</p>
                        <div className="card-meta">
                          <span className="tag tag-red">● Alta</span>
                          <span className="avatars"><i /><i /><i /></span>
                        </div>
                      </div>
                      <div className="kanban-card">
                        <p>Campanha de e-mail</p>
                        <div className="card-meta">
                          <span className="tag tag-yellow">● Média</span>
                          <span className="avatars"><i /><i /><i /></span>
                        </div>
                      </div>
                    </div>

                    <div className="kanban-col">
                      <header><span className="col-dot dot-yellow" /> Em Progresso <em>8</em></header>
                      <div className="kanban-card is-highlight">
                        <p>API de pagamentos</p>
                        <div className="card-meta">
                          <span className="tag tag-yellow">● Média</span>
                          <span className="avatars"><i /><i /><i /></span>
                        </div>
                      </div>
                    </div>

                    <div className="kanban-col">
                      <header><span className="col-dot dot-green" /> Concluído <em>14</em></header>
                      <div className="kanban-card">
                        <p>Página de login</p>
                        <div className="card-meta">
                          <span className="tag tag-green">● Baixa</span>
                          <span className="avatars"><i /><i /><i /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-copy">
            <span className="badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
              Tudo o que você precisa
            </span>
            <h2 className="section-title">
              Gerencie seus projetos com total <span className="text-accent">liberdade</span>
            </h2>
            <p className="section-sub">
              Do planejamento à entrega, mantenha tudo organizado em um só lugar,
              com ferramentas poderosas e flexíveis.
            </p>
            <ul className="checklist">
              {checklist.map((item) => (
                <li key={item}>
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recurso
