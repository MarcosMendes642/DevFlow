import Nav from '../components/Nav'
import Inicio from './sectionhome/Inico'
import Recurso from './sectionhome/Recurso'
import Recursos from './sectionhome/Recursos'
import Sobre from './sectionhome/Sobre'

function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Início → hero + faixa de features */}
        <Inicio />
        {/* Gerencie seus projetos (transição para Recursos) */}
        <Recurso />
        {/* Recursos → grid de cards + CTA */}
        <Recursos />
        <Sobre />
      </main>
    </>
  )
}

export default Home
