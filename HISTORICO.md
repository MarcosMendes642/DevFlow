# 📜 Histórico de Desenvolvimento — DevFlow

Registro do que foi feito no projeto, por dia.

---

## 📅 07/11/2026

### 🎨 Landing page (home) — versão 1 completa

- **Hero (`sectionhome/Inico.tsx`)**
  - Badge "Sua produtividade, em outro nível"
  - Título "Organize seus projetos, alcance mais." com destaque em roxo
  - Botão "Comece agora" (o "Ver demonstração" foi removido do hero depois)
  - Mockup 3D do dashboard construído em código: sidebar (Dashboard, Projetos, Tarefas...), "Bem-vindo de volta, Marcos! 👋" em fonte manuscrita, gráfico SVG com curva roxa, cards de stats (Projetos Ativos 12, Tarefas Concluídas 148, Produtividade 92% +12.5%), busca, sino, avatar
  - Ícones flutuantes: GitHub, paleta estilo Figma (cores) e `</>`

- **Faixa de features + showcase (`sectionhome/Recurso.tsx`)**
  - 5 features: Produtividade Real, Trabalho em Equipe, Integrações Poderosas, Seguro e Confiável, Interface Moderna
  - Seção "Gerencie seus projetos com total liberdade" com checklist (Kanban, Calendário, Relatórios)
  - Mockup de janela kanban: colunas A Fazer / Em Progresso / Concluído, cards com tags de prioridade e avatares

- **Navbar (`components/Nav.tsx`)**
  - Logo DevFlow + links de seção com indicador roxo sublinhado
  - Botões "Entrar" e "Criar conta →"

### 🗂️ Organização de CSS (padrão estabelecido)

```
src/styles/
├─ global.css   → tokens (cores, tipografia, espaçamento, radios, sombras) + reset/base + primitivas (.btn, .badge, .container, .grad-text)
├─ nav.css      → exclusivo da navbar
├─ index.css    → exclusivo da home (hero, faixa de features, showcase)
└─ recursos.css → exclusivo da seção Recursos
```

Convenção combinada: cada página/seção nova = componente TSX + CSS próprio que faz `@import './global.css'` no topo. Globo centraliza tudo para padronizar cores e fontes. **Divisão de trabalho: design eu, back/banco/lógica do front o Marcos.**

### 🧩 Seção Recursos (`sectionhome/Recursos.tsx`)

- Header centralizado com título gradiente "mais produtivo"
- 6 cards com teaser visual cada: Gerenciamento de Projetos (formas abstratas), Kanban Inteligente (mini quadro), Colaboração em Equipe (avatares + chip "+3"), Analytics Avançado (gráfico SVG), Integrações Poderosas (GitHub, Notion, Slack, "+"), Segurança de Alto Nível (escudo com glow)
- Card CTA grande: badge 💎 "Mais produtividade, menos caos", título "próximo nível?" em roxo, botão "Criar conta grátis →" (o "Ver demonstração" saiu depois)
- Visual: celular com mini dashboard rotacionado, chip flutuante "+124% de produtividade", logo roxa com anel orbital
- Arco decorativos no fundo da seção

### 🔀 Decisão de navegação

- O site é uma **landing única com scroll contínuo**: Início → Recursos → Sobre são seções da mesma página, acessadas por âncora + scroll suave
- O react-router **não** entra na landing; ficará para páginas independentes futuras (ex.: `/cadastro`) — combinado que o roteamento fica com o Marcos

- **Scroll-spy leve na Nav** (`IntersectionObserver`): destaca o link da seção que está no meio a tela conforme se desce (lógica provisória, property o Marcos pode substituir)

### 🐛 Correções

1. **Navbar duplicada** — cache de hot-reload do Vite acumulou DOM velho após o refator das rotas; nenhuma dupla no código (confirmado por grep). Resolvido reiniciando o dev server (`vite --force`); server dev roda em :5173
2. **Brilho (glow) cortado nas emendas entre seções** — os `::before` de cada seção eram clipados pelo `overflow: hidden` da seção e o gradiente concentrava intensidade na borda do box (linha reta visível)
   - Solução: removido `overflow: hidden` das seções, glow com `inset: -260px 0` (vaza além da seção) e **`mask-image` com gradiente linear** que força alpha = 0 nas bordas do box → transição sempre suave, sem linha
3. Classe `.recursos` (da section) renomeada testes de `.recursos-home` (section showcase) para liberar o id `recursos` para a section nova de cards

### 🗑️ Removidos (pedido do Marcos)

- Link "Preços" da navbar (+ âncora vazia `#precos`)
- Botão "Ver demonstração" do CTA de Recursos (o do hero já havia sido tirado)
- Botão de tema claro/escuro da navbar (+ CSS `.theme-toggle`)

Navbar final: logo • Início • Recursos • Sobre • Entrar • Criar conta →

### 📝 Status / pendências

- [x] Home: hero + features + showcase + Recursos + CTA
- [ ] Seção "Sobre" — aguardando design (link na navbar aponta pra âncora vazia)
- [ ] Página de cadastro — ideia de rota `/cadastro` com react-router no futuro; aguardando design (podendo ser card escuro centralizado no tema da landing)
- [ ] Modo claro — tokens prontos no `global.css` para virar `[data-theme='light']` quando quiser
