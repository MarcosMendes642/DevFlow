import { Navigate, Outlet } from "react-router-dom";

/* Inverso do ProtectRoute: se já existe sessão (token no localStorage),
   manda direto para o dashboard em vez de mostrar as rotas públicas. */
export function RedirectIfAuth() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
