import { Navigate, Outlet } from "react-router-dom";

/* ============================================================
   ProtectRoute
   Protege rotas que exigem autenticação.
   Verifica se existe token salvo no localStorage (o mesmo
   que Login salva). Sem token → redireciona para /entrar.
   ============================================================ */
export function ProtectRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/entrar" replace />;
  }

  return <Outlet />;
}
