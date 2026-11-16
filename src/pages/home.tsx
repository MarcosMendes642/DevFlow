import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Inicio from './sectionhome/Inico'
import Recurso from './sectionhome/Recurso'
import Recursos from './sectionhome/Recursos'
import Sobre from './sectionhome/Sobre'

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Inicio />
        <Recurso />
        <Recursos />
        <Sobre />
      </main>
      <Footer />
    </>
  )
}

export default Home
