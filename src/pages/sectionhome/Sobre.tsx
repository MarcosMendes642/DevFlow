import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/sobre.css'

const pontos = [
  'Feedback da comunidade vira feature',
  'Código limpo e documentação em dia',
  'Comunidade ativa e código aberto',
]

const stats = [
  { value: '12', suffix: 'k+', label: 'desenvolvedores usando o DevFlow' },
  { value: '3.4', suffix: 'M', label: 'tarefas organizadas até hoje' },
  { value: '98', suffix: '%', label: 'de satisfação dos usuários' },
  { value: '24', suffix: '/7', label: 'de disponibilidade e suporte' },
]

const values = [
  {
    title: 'Transparência',
    text: 'Roadmap público, changelog aberto e comunidade participando de cada decisão do produto.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Foco no desenvolvedor',
    text: 'Cada recurso nasce de necessidades reais de quem desenvolve — sem burocracia, sem fricção.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 8 5 12 9 16" />
        <polyline points="15 8 19 12 15 16" />
      </svg>
    ),
  },
  {
    title: 'Evolução contínua',
    text: 'Melhorias semanais guiadas por métricas e feedback — o DevFlow nunca para de fluir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-2.64-6.36" />
        <path d="M21 3v6h-6" />
      </svg>
    ),
  },
]

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <span className="arc arc-1" aria-hidden="true" />
      <span className="arc arc-2" aria-hidden="true" />

      <div className="container">
        <header className="sobre-head">
          <span className="badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5" />
              <path d="M12 8h.01" />
            </svg>
            Sobre o DevFlow
          </span>
          <h1 className="sobre-title">
            Construído para manter seu fluxo <span className="grad-text">em movimento</span>
          </h1>
          <p className="sobre-sub">
            Nascemos da frustração de gerenciar projetos em dez ferramentas diferentes.
            O DevFlow une tudo em um só lugar — simples, rápido e feito para devs.
          </p>
        </header>

        <div className="sobre-story">
          <div className="sobre-copy">
            <h2>
              Nossa <span className="text-accent">missão</span>
            </h2>
            <p>
              Acreditamos que <strong>boas ferramentas não devem atrapalhar o trabalho</strong>.
              Nosso objetivo é dar ao desenvolvedor um fluxo de trabalho claro, do planejamento
              à entrega, sem perda de contexto.
            </p>
            <p>
              Desde 2024, o DevFlow evolui junto com a comunidade: cada sugestão é avaliada,
              cada lançamento é documentado e cada métrica é usada para melhorar o produto.
            </p>
            <ul className="checklist">
              {pontos.map((ponto) => (
                <li key={ponto}>
                  <span className="check">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  {ponto}
                </li>
              ))}
            </ul>
          </div>

          <div className="sobre-visual" aria-hidden="true">
            <span className="sobre-float st-heart">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
              Feito com carinho
            </span>
            <span className="sobre-float st-star">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />
              </svg>
              4.9/5 na comunidade
            </span>

            <div className="manifesto">
              <div className="manifesto-brand">
                <i>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 7 9 12 4 17" />
                    <polyline points="12 6 17 6 22 12 17 18 12 18" />
                  </svg>
                </i>
                DevFlow · Manifesto
              </div>

              <p className="manifesto-hand">
                <em>menos ferramentas,</em>
                <span>mais <span className="text-accent">fluxo</span>. ✦</span>
              </p>

              <div className="manifesto-bars">
                <div className="mbar">
                  <header>
                    <strong>Produtividade do time</strong>
                    +124%
                  </header>
                  <i style={{ '--v': '86%' } as CSSProperties} />
                </div>
                <div className="mbar">
                  <header>
                    <strong>Tarefas no prazo</strong>
                    92%
                  </header>
                  <i style={{ '--v': '68%' } as CSSProperties} />
                </div>
                <div className="mbar">
                  <header>
                    <strong>Retenção de usuários</strong>
                    87%
                  </header>
                  <i style={{ '--v': '74%' } as CSSProperties} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="sobre-stats">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>
                {stat.value}
                <span>{stat.suffix}</span>
              </strong>
              <small>{stat.label}</small>
            </article>
          ))}
        </section>

        <section className="sobre-values">
          {values.map((value) => (
            <article key={value.title} className="value-card">
              <span className="value-card-icon">{value.icon}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="sobre-cta">
          <h3>
            Faça parte dessa <span className="text-accent">história</span>
          </h3>
          <p>Junte-se a milhares de devs que já organizam seus projetos com o DevFlow.</p>
          <div className="cta-actions">
            <Link to="/cadastro" className="btn btn-primary">
              Criar conta grátis
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a href="#recursos" className="btn btn-ghost">Ver recursos</a>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Sobre
