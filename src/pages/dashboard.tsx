import { useState } from "react";

import "../styles/dashboard.css";
import { carregarUsuario, inicialDoNome } from "../utils/auth";

/* ============================================================
   Ícones (SVG inline, estilo stroke — mesma linguagem do resto)
   ============================================================ */
function IconLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 9 12 4 17" />
      <polyline points="12 6 17 6 22 12 17 18 12 18" />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function IconPasta() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

function IconTarefa() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}

function IconEquipes() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconGrafico() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function IconRaio() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

function IconConfig() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconBusca() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4-4" />
    </svg>
  );
}

function IconSino() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}

function IconCalendario() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function IconMais() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function IconSetas() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  );
}

function IconPontos() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  );
}

/* ============================================================
   Dados estáticos (em breve virão da API)
   ============================================================ */
const menuWorkspace = [
  { label: "Dashboard", icone: <IconDashboard />, ativo: true },
  { label: "Projetos", icone: <IconPasta /> },
  { label: "Tarefas", icone: <IconTarefa />, contador: 8 },
  { label: "Equipes", icone: <IconEquipes /> },
  { label: "Analytics", icone: <IconGrafico /> },
  { label: "Integrações", icone: <IconRaio /> },
];

const resumo = [
  {
    icone: <IconPasta />,
    tom: "roxo",
    rotulo: "Projetos ativos",
    valor: "12",
    delta: "+2 este mês",
    positivo: true,
  },
  {
    icone: <IconTarefa />,
    tom: "verde",
    rotulo: "Tarefas concluídas",
    valor: "148",
    delta: "+18.2% vs última semana",
    positivo: true,
  },
  {
    icone: <IconRaio />,
    tom: "vermelho",
    rotulo: "Tarefas pendentes",
    valor: "24",
    delta: "8 vencem esta semana",
    positivo: false,
  },
  {
    icone: <IconSetas />,
    tom: "ambar",
    rotulo: "Produtividade semanal",
    valor: "86%",
    delta: "+4% vs última semana",
    positivo: true,
  },
];

const atividades = [
  {
    iniciais: "CL",
    tom: "ciano",
    nome: "Clara Lima",
    acao: "concluiu",
    alvo: '"Fluxo de autenticação"',
    tempo: "há 8 min",
  },
  {
    iniciais: "RS",
    tom: "vermelho",
    nome: "Rafael Souza",
    acao: "moveu",
    alvo: '"Limite da API" para Revisão',
    tempo: "há 2h",
  },
  {
    iniciais: "JL",
    tom: "ambar",
    nome: "Julia Lemos",
    acao: "comentou em",
    alvo: '"Interface do Dashboard"',
    tempo: "há 1h",
  },
  {
    iniciais: "MK",
    tom: "verde",
    nome: "Mika Kimura",
    acao: "criou",
    alvo: '"Onboarding mobile"',
    tempo: "há 2h",
  },
];

const projetos = [
  {
    letra: "D",
    tom: "roxo",
    nome: "DevFlow · Dashboard",
    atualizado: "Atualizado há 2h",
    progresso: 78,
    ritmo: "roxo",
    equipe: [
      { iniciais: "AM", tom: "roxo" },
      { iniciais: "CL", tom: "ciano" },
      { iniciais: "RS", tom: "vermelho" },
    ],
    prazo: "20 de dez",
  },
  {
    letra: "M",
    tom: "verde",
    nome: "Aplicativo Mobile",
    atualizado: "Atualizado há 5h",
    progresso: 54,
    ritmo: "verde",
    equipe: [
      { iniciais: "JL", tom: "ambar" },
      { iniciais: "MK", tom: "verde" },
      { iniciais: "AM", tom: "roxo" },
    ],
    prazo: "14 de jan",
  },
  {
    letra: "A",
    tom: "vermelho",
    nome: "Infraestrutura da API",
    atualizado: "Atualizado ontem",
    progresso: 32,
    ritmo: "vermelho",
    equipe: [
      { iniciais: "RS", tom: "vermelho" },
      { iniciais: "CL", tom: "ciano" },
    ],
    prazo: "08 de dez",
  },
];

const coresAvatar: Record<string, string> = {
  roxo: "avatar-roxo",
  verde: "avatar-verde",
  vermelho: "avatar-vermelho",
  ambar: "avatar-ambar",
  ciano: "avatar-ciano",
};

/* ============================================================
   Página: Dashboard (estrutura estática)
   ============================================================ */
export function Dashboard() {
  /* Sidebar vira drawer no mobile, controlada pelo hamburger do topbar */
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const usuario = carregarUsuario();
  const nomeUsuario = usuario?.nome || "Usuário";
  const inicialUsuario = inicialDoNome(nomeUsuario);

  return (
    <div className="dashboard">
      {/* ------------- Sidebar ------------- */}
      <aside className={`dashboard-sidebar${sidebarAberta ? " is-aberto" : ""}`}>
        <div className="dashboard-brand">
          <span className="dashboard-brand-logo">
            <IconLogo />
          </span>
          DevFlow
        </div>

        <nav
          className="dashboard-menu"
          onClick={() => setSidebarAberta(false)}
        >
          <div className="dashboard-menu-grupo">
            <span className="dashboard-menu-label">Workspace</span>
            {menuWorkspace.map((item) => (
              <a
                key={item.label}
                className={`dashboard-item${item.ativo ? " is-active" : ""}`}
              >
                {item.icone}
                {item.label}
                {item.contador && (
                  <span className="dashboard-item-contador">
                    {item.contador}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="dashboard-menu-grupo">
            <span className="dashboard-menu-label">Gerenciar</span>
            <a className="dashboard-item">
              <IconConfig />
              Configurações
            </a>
          </div>
        </nav>

        <div className="dashboard-lateral-rodape">
          <button type="button" className="dashboard-pro">
            <span className="dashboard-pro-icon">
              <IconSetas />
            </span>
            <span>
              <strong>Upgrade para Pro</strong>
              <small>Desbloqueie mais recursos</small>
            </span>
            <IconChevron />
          </button>

          <div className="dashboard-user">
            <span className="dashboard-avatar">{inicialUsuario}</span>
            <span>
              <strong>{nomeUsuario}</strong>
              <small>{usuario?.email}</small>
            </span>
            <span className="dashboard-item-dots">
              <IconPontos />
            </span>
          </div>
        </div>
      </aside>

      {/* Fundo escurecido atrás do drawer (só no mobile) */}
      <div
        className={`dashboard-overlay${sidebarAberta ? " is-aberto" : ""}`}
        onClick={() => setSidebarAberta(false)}
      />

      {/* ------------- Coluna principal ------------- */}
      <div className="dashboard-principal">
        {/* Topbar */}
        <header className="dashboard-topbar">
          <button
            type="button"
            className={`dashboard-menu-btn${sidebarAberta ? " is-open" : ""}`}
            aria-label={sidebarAberta ? "Fechar menu" : "Abrir menu"}
            aria-expanded={sidebarAberta}
            onClick={() => setSidebarAberta((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <span className="dashboard-topbar-marca">
            <IconLogo />
            DevFlow
          </span>
          <span className="dashboard-busca">
            <IconBusca />
            Buscar algo...
            <span className="dashboard-busca-teclas">
              <kbd>Ctrl</kbd>
              <kbd>K</kbd>
            </span>
          </span>
          <button
            type="button"
            className="dashboard-sino"
            aria-label="Notificações"
          >
            <IconSino />
          </button>
          <span className="dashboard-avatar dashboard-avatar-sm">{inicialUsuario}</span>
        </header>

        {/* Conteúdo */}
        <main className="dashboard-conteudo">
          {/* Cabeçalho */}
          <div className="dashboard-head">
            <div>
              <p className="dashboard-data">Segunda-feira, 15 de dezembro</p>
              <h1 className="dashboard-ola">
                <em>Bom dia,</em>
                <span>{nomeUsuario.split(" ")[0]}! 👋</span>
              </h1>
            </div>
            <div className="dashboard-acoes">
              <button type="button" className="btn btn-ghost btn-sm">
                <IconCalendario />
                Esta semana
                <IconChevron />
              </button>
              <button type="button" className="btn btn-primary btn-sm">
                <IconMais />
                Novo projeto
              </button>
            </div>
          </div>

          {/* Cards de resumo */}
          <section className="dashboard-stats">
            {resumo.map((item) => (
              <article key={item.rotulo} className="dashboard-stat">
                <div className="dashboard-stat-topo">
                  <span className={`stat-icon stat-${item.tom}`}>
                    {item.icone}
                  </span>
                  <span className="dashboard-stat-rotulo">{item.rotulo}</span>
                  <span className="dashboard-item-dots">
                    <IconPontos />
                  </span>
                </div>
                <div className="dashboard-stat-corpo">
                  <strong className="dashboard-stat-valor">{item.valor}</strong>
                  <small
                    className={`dashboard-stat-delta${item.positivo ? "" : " is-alerta"}`}
                  >
                    {item.delta}
                  </small>
                </div>
              </article>
            ))}
          </section>

          {/* Gráfico + Atividade */}
          <section className="dashboard-grade">
            <article className="dashboard-card">
              <div className="dashboard-card-topo">
                <div>
                  <h2 className="dashboard-card-titulo">Produtividade geral</h2>
                  <p className="dashboard-card-sub">
                    Progresso da sua equipe nos últimos 7 dias
                  </p>
                </div>
                <div className="dashboard-card-destaque">
                  <strong>86%</strong>
                  <span className="pill pill-green">↗ +6.4%</span>
                </div>
              </div>

              <div className="dashboard-chart-corpo">
                <div className="dashboard-chart-eixo-y">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>
                <svg
                  className="dashboard-chart-svg"
                  viewBox="0 0 600 220"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="dashboardChartFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#7c6cff"
                        stopOpacity="0.45"
                      />
                      <stop offset="100%" stopColor="#7c6cff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Linhas guia */}
                  {[10, 61, 112, 163, 214].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="600"
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeDasharray="4 6"
                    />
                  ))}

                  {/* Preenchimento */}
                  <path
                    d="M0 190 C 40 178, 70 166, 100 160 C 140 152, 160 168, 190 150 C 230 126, 250 96, 290 104 C 330 112, 350 60, 390 64 C 420 68, 430 96, 460 90 C 500 82, 520 40, 560 38 C 580 37, 592 40, 600 42 L 600 220 L 0 220 Z"
                    fill="url(#dashboardChartFill)"
                  />

                  {/* Linha */}
                  <path
                    d="M0 190 C 40 178, 70 166, 100 160 C 140 152, 160 168, 190 150 C 230 126, 250 96, 290 104 C 330 112, 350 60, 390 64 C 420 68, 430 96, 460 90 C 500 82, 520 40, 560 38 C 580 37, 592 40, 600 42"
                    fill="none"
                    stroke="#a394ff"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Marca do pico */}
                  <circle
                    cx="390"
                    cy="64"
                    r="5"
                    fill="#100e1b"
                    stroke="#b9adff"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <div className="dashboard-chart-eixo-x">
                <span>Seg</span>
                <span>Ter</span>
                <span>Qua</span>
                <span>Qui</span>
                <span>Sex</span>
                <span>Sáb</span>
                <span>Dom</span>
              </div>
            </article>

            <article className="dashboard-card">
              <div className="dashboard-card-topo">
                <div>
                  <h2 className="dashboard-card-titulo">Atividade da equipe</h2>
                  <p className="dashboard-card-sub">
                    Últimas atualizações do workspace
                  </p>
                </div>
                <a className="dashboard-link">
                  Ver tudo
                  <IconChevron />
                </a>
              </div>

              <ul className="dashboard-atividades">
                {atividades.map((item) => (
                  <li key={item.nome} className="dashboard-atividade">
                    <span
                      className={`dashboard-mini-avatar ${coresAvatar[item.tom]}`}
                    >
                      {item.iniciais}
                    </span>
                    <div>
                      <p className="dashboard-atividade-texto">
                        <strong>{item.nome}</strong> {item.acao}{" "}
                        <span>{item.alvo}</span>
                      </p>
                      <time className="dashboard-atividade-tempo">
                        {item.tempo}
                      </time>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          {/* Projetos recentes */}
          <section className="dashboard-card">
            <div className="dashboard-card-topo">
              <div>
                <h2 className="dashboard-card-titulo">Projetos recentes</h2>
                <p className="dashboard-card-sub">
                  Acompanhe o andamento dos seus trabalhos
                </p>
              </div>
              <a className="dashboard-link">
                Ver todos os projetos
                <IconChevron />
              </a>
            </div>

            <ul className="dashboard-projetos">
              {projetos.map((projeto) => (
                <li key={projeto.nome} className="dashboard-projeto">
                  <div className="dashboard-projeto-info">
                    <span
                      className={`dashboard-projeto-icone ${coresAvatar[projeto.tom]}`}
                    >
                      {projeto.letra}
                    </span>
                    <span>
                      <strong>{projeto.nome}</strong>
                      <small>{projeto.atualizado}</small>
                    </span>
                  </div>

                  <div className="dashboard-progresso">
                    <div className="dashboard-progresso-topo">
                      <small>Progresso</small>
                      <small>{projeto.progresso}%</small>
                    </div>
                    <div
                      className={`dashboard-barra dashboard-barra-${projeto.ritmo}`}
                    >
                      <span style={{ width: `${projeto.progresso}%` }} />
                    </div>
                  </div>

                  <div className="dashboard-avatares">
                    {projeto.equipe.map((membro) => (
                      <span
                        key={membro.iniciais}
                        className={`dashboard-mini-avatar ${coresAvatar[membro.tom]}`}
                      >
                        {membro.iniciais}
                      </span>
                    ))}
                  </div>

                  <span className="dashboard-prazo">
                    <IconCalendario />
                    {projeto.prazo}
                  </span>

                  <span className="dashboard-item-dots">
                    <IconPontos />
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
