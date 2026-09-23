import './App.css'
import {
  AboutMe,
  Contact,
  Footer,
  Hero,
  NavBar,
  Projects,
  Skills,
} from './components'

function App() {
  return (
    <>
      <NavBar />
      <main className="">
        <Hero />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
