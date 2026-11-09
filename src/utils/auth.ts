/* ============================================================
   Sessão / usuário autenticado (localStorage)
   Token salvo como "token" · dados do usuário como "usuario"
   ============================================================ */

export interface Usuario {
  nome: string;
  email: string;
}

const USUARIO_KEY = "usuario";

/* ---------- Gravar / ler usuário ---------- */
export function salvarUsuario(usuario: Usuario | null): void {
  if (!usuario || !usuario.nome) return;
  localStorage.setItem(
    USUARIO_KEY,
    JSON.stringify({ nome: usuario.nome, email: usuario.email ?? "" }),
  );
}

export function obterUsuario(): Usuario | null {
  try {
    const bruto = localStorage.getItem(USUARIO_KEY);
    if (!bruto) return null;
    const dados = JSON.parse(bruto);
    if (!dados?.nome) return null;
    return {
      nome: String(dados.nome),
      email: typeof dados.email === "string" ? dados.email : "",
    };
  } catch {
    return null;
  }
}

/* ---------- Utilitários de tela ---------- */
export function inicialDoNome(nome: string): string {
  return nome.trim().charAt(0).toUpperCase() || "U";
}

/**
 * Usuário para exibição: usa o salvo no localStorage e, se não houver
 * (ex.: sessão criada antes de salvar os dados), resgata do payload do
 * token JWT e persiste — evita cair no fallback "Usuário".
 */
export function carregarUsuario(): Usuario | null {
  const salvo = obterUsuario();
  if (salvo) return salvo;

  const token = localStorage.getItem("token");
  if (!token) return null;

  const usuario = usuarioDoToken(token);
  salvarUsuario(usuario);
  return usuario;
}

/* ---------- Extração dos dados do usuário ---------- */

function primeiroTexto(...valores: unknown[]): string | null {
  for (const valor of valores) {
    if (typeof valor === "string" && valor.trim()) return valor.trim();
  }
  return null;
}

/**
 * Procura nome/e-mail na resposta da API, aceitando vários formatos
 * (ex.: `{ token, usuario: { nome, email } }`, `{ name: ... }`, etc.).
 */
export function extrairUsuario(data: unknown): Usuario | null {
  const raiz = data as Record<string, unknown> | null;
  if (!raiz || typeof raiz !== "object") return null;

  const candidatos = [
    raiz,
    raiz.usuario,
    raiz.user,
    raiz.Usuario,
    raiz.usuarioLogado,
  ];

  for (const item of candidatos) {
    if (!item || typeof item !== "object") continue;
    const alvo = item as Record<string, unknown>;
    const nome = primeiroTexto(
      alvo.nome,
      alvo.nomeCompleto,
      alvo.name,
      alvo.Name,
      alvo.Nome,
      alvo.fullName,
      alvo.username,
      alvo.userName,
      alvo.displayName,
    );
    const email = primeiroTexto(
      alvo.email,
      alvo.Email,
      alvo.emailAddress,
    );
    if (nome) return { nome, email: email ?? "" };
  }

  return null;
}

/**
 * Decodifica o payload de um token JWT para resgatar nome/e-mail,
 * usado quando a resposta de login só traz o token.
 */
export function usuarioDoToken(token: string): Usuario | null {
  try {
    const parte = token.split(".")[1];
    if (!parte) return null;

    // JWT usa base64url → converte para base64 padrão antes de decodificar
    const base64 = parte.replace(/-/g, "+").replace(/_/g, "/");
    const preenchido = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "=",
    );
    const payload = JSON.parse(atob(preenchido));

    const nome = primeiroTexto(
      payload?.nome,
      payload?.name,
      payload?.unique_name,
      payload?.username,
    );
    const email = primeiroTexto(payload?.email, payload?.Email);
    if (!nome && !email) return null;

    return {
      // Sem nome no payload, monta um a partir do e-mail ("marcos.souza" → "Marcos Souza")
      nome: nome || (email ? capitalizar(email.split("@")[0].replace(/[._-]+/g, " ")) : ""),
      email: email ?? "",
    };
  } catch {
    return null;
  }
}

function capitalizar(texto: string): string {
  return texto
    .split(" ")
    .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
    .join(" ");
}
