import { Navigate, Outlet } from "react-router-dom";


export function ProtectRoute() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/entrar" replace />;
  }

  return <Outlet />;
}
