import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { extrairUsuario, salvarUsuario } from "../utils/auth";
import "../styles/cadastro.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export function Cadastro() {
  const navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cfsenha, setCfsenha] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [loading, setLoading] = useState(false);

  const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

  const handlecadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (!nome.trim()) {
      setErro("Informe seu nome.");
      return;
    }
    if (!regexNome.test(nome.trim())) {
      setErro("O nome só pode conter letras e espaços.");
      return;
    }
    if (!email) {
      setErro("Informe seu e-mail.");
      return;
    }
    if (!regexEmail.test(email)) {
      setErro("Informe um e-mail válido.");
      return;
    }
    if (!senha) {
      setErro("Informe uma senha.");
      return;
    }
    if (!regexSenha.test(senha)) {
      setErro(
        "A senha precisa ter no mínimo 8 caracteres, 1 letra maiúscula, 1 número e 1 símbolo (@$!%*?&_)."
      );
      return;
    }
    if (senha !== cfsenha) {
      setErro("As senhas não coincidem.");
      return;
    }
    if (!aceitouTermos) {
      setErro("Você precisa aceitar os Termos e Condições.");
      return;
    }

    setLoading(true);
    try {
     
      const res = await fetch(`${API_BASE_URL}/cadastro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nome.trim(), email, senha }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErro(data?.erro ?? "Não foi possível criar sua conta. Tente novamente.");
        return;
      }

      setSucesso(data?.mensagem ?? "Usuário criado com sucesso!");

      /* Se o cadastro já retornar token, entra direto no dashboard.
         Senão, manda para o login para o usuário gerar o token. */
      const token = data?.token ?? data?.accessToken ?? null;
      if (token) {
        localStorage.setItem("token", token);
        // Dados da API têm prioridade; senão usa o que foi digitado
        salvarUsuario(extrairUsuario(data) ?? { nome: nome.trim(), email });
        navigate("/dashboard", { replace: true });
        return;
      }
      salvarUsuario({ nome: nome.trim(), email });
      navigate("/entrar", { replace: true });
      setNome("");
      setEmail("");
      setSenha("");
      setCfsenha("");
      setAceitouTermos(false);
    } catch {
      setErro("Erro de conexão com o servidor. O back está rodando?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro">
      <Link to="/" className="btn btn-ghost btn-sm cadastro-voltar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar
      </Link>

      <div className="cadastro-card">
        {/* Painel visual (lado esquerdo na referência) */}
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
            <h1 className="cadastro-titulo">
              Crie sua <span className="grad-text">conta</span>
            </h1>
            <p className="cadastro-sub">
              Organize seus projetos e <strong>alcance mais</strong>.
            </p>

            <div className="cadastro-chips">
              <span className="cadastro-chip">Kanban</span>
              <span className="cadastro-chip">Calendário</span>
              <span className="cadastro-chip">Relatórios</span>
            </div>
          </div>
        </aside>

        {/* Formulário (lado direito na referência) */}
        <div className="cadastro-formulario">
          <h2 className="cadastro-form-titulo">Cadastre-se</h2>

          <form className="cadastro-form" onSubmit={handlecadastro} noValidate>
            <div className="cadastro-field">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                className="cadastro-input"
                type="text"
                placeholder="Seu nome"
                autoComplete="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

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
                  autoComplete="new-password"
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

            <div className="cadastro-field">
              <label htmlFor="cfsenha">Confirmar senha</label>
              <input
                id="cfsenha"
                className="cadastro-input"
                type={mostrarSenha ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="new-password"
                value={cfsenha}
                onChange={(e) => setCfsenha(e.target.value)}
              />
            </div>

            <label className="cadastro-termos">
              <input
                type="checkbox"
                checked={aceitouTermos}
                onChange={(e) => setAceitouTermos(e.target.checked)}
              />
              Aceito os <strong>Termos &amp; Condições</strong>
            </label>

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
              {loading ? "Criando conta..." : "Criar conta"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          <div className="cadastro-divisor">
            <span>ou</span>
          </div>

          <p className="cadastro-rodape">
            Já tem uma conta? <Link to="/">Entrar</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
