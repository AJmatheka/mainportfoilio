import Navbar from './sections/Navbar'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Clients from './sections/Clients.jsx'
import Contacts from './sections/Contacts.jsx'
import Alert from './components/Alert.jsx';




const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contacts />
      

    </main>
  )
}

export default App