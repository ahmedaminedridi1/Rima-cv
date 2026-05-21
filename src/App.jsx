import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Profil from './components/Profil'
import Experience from './components/Experience'
import Formation from './components/Formation'
import Competences from './components/Competences'
import Contact from './components/Contact'

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