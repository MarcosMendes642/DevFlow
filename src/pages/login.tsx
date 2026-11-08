import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/cadastro.css";
import "../styles/login.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [loading, setLoading] = useState(false);

  const handlelogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (!email.trim()) {
      setErro("Informe seu e-mail.");
      return;
    }
    if (!senha) {
      setErro("Informe sua senha.");
      return;
    }

    setLoading(true);
    try {
      
      const res = await fetch(`${API_BASE_URL}/Login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), senha }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErro(data?.erro ?? "Não foi possível fazer login. Verifique e-mail e senha.");
        return;
      }

      const token = data?.token ?? data?.accessToken ?? null;
      if (!token) {
        setErro("Resposta da API não retornou token.");
        return;
      }

      localStorage.setItem("token", token);
      setSucesso("Login realizado!");
     
    } catch {
      setErro("Erro de conexão com o servidor. O back está rodando?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro login">
      <Link to="/" className="btn btn-ghost btn-sm cadastro-voltar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar
      </Link>

      <div className="cadastro-card login-card">
        {/* Painel visual (lado esquerdo, igual ao cadastro) */}
        <aside className="cadastro-visual">
          <svg className="cadastro-visual-marca" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="4 7 9 12 4 17" />
            <polyline points="12 6 17 6 22 12 17 18 12 18" />
          </svg>
          <Link to="/" className="cadastro-logo">
            <span className="cadastro-logo-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 7 9 12 4 17" />
                <polyline points="12 6 17 6 22 12 17 18 12 18" />
              </svg>
            </span>
            Dev<span className="text-accent">Flow</span>
          </Link>

          <div className="cadastro-visual-corpo">
            <h1 className="cadastro-titulo login-titulo">
              Bem-vindo <span className="grad-text">de volta</span>
            </h1>
            <p className="cadastro-sub login-sub">Entre e continue de onde parou.</p>

            <div className="cadastro-chips">
              <span className="cadastro-chip">Kanban</span>
              <span className="cadastro-chip">Calendário</span>
              <span className="cadastro-chip">Relatórios</span>
            </div>
          </div>
        </aside>

        {/* Formulário (lado direito) */}
        <div className="cadastro-formulario">
          <h2 className="cadastro-form-titulo">Entrar</h2>

          <form className="cadastro-form" onSubmit={handlelogin} noValidate>
          <div className="cadastro-field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              className="cadastro-input"
              type="email"
              placeholder="voce@email.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="cadastro-field">
            <label htmlFor="senha">Senha</label>
            <div className="cadastro-senha">
              <input
                id="senha"
                className="cadastro-input"
                type={mostrarSenha ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="button"
                className="cadastro-toggle"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          {erro && (
            <p className="cadastro-feedback cadastro-erro" role="alert">
              {erro}
            </p>
          )}
          {sucesso && (
            <p className="cadastro-feedback cadastro-sucesso" role="status">
              {sucesso}
            </p>
          )}

          <button type="submit" className="btn btn-primary cadastro-submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>

        <div className="cadastro-divisor">
          <span>ou</span>
        </div>

        <p className="cadastro-rodape">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
        </div>
      </div>
    </div>
  );
}
