import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import { Cadastro } from './pages/cadastro'
import { Login } from './pages/login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
