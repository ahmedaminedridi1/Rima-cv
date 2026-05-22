import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Profil from './components/Profil.jsx'
import Experience from './components/Experience.jsx'
import Formation from './components/Formation.jsx'
import Competences from './components/Competences.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Nav />
      <div id="top">
        <Hero />
        <Profil />
        <Experience />
        <Formation />
        <Competences />
        <Contact />
      </div>
    </>
  )
}

export default App