import './App.css'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

function App() {
    return (
        <>
            {/* TODO : ADD : Typography and fonts */}
            <div className="bg-black fill-current">
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    <Hero></Hero>
                </div>
                <div>
                    <About></About>
                </div>
                <div>
                    <Projects></Projects>
                </div>
                <div>
                    <Contact></Contact>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default App
