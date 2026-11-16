import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { Cadastro } from './pages/cadastro'
import { Login } from './pages/login'
import { Dashboard } from './pages/dashboard'
import { ProtectRoute } from './components/ProtectRoute'
import { RedirectIfAuth } from './components/RedirectIfAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas — se o usuário já estiver logado, vai direto pro dashboard */}
        <Route element={<RedirectIfAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Route>
        {/* Rotas protegidas — só passam com token no localStorage */}
        <Route element={<ProtectRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
