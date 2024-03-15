import './App.css'
import Navbar from './components/navbar.tsx'
import Hero from './components/hero.tsx'
import Projects from './components/Projects.tsx'
import About from './components/About.tsx'

function App() {
    return (
        <>
            {/* TODO : ADD : Typography and fonts */}
            <div className="bg-black">
                <div>
                    <Navbar></Navbar>
                </div>
                <div>
                    <Hero></Hero>
                </div>
                <div>
                    <About></About>
                </div>
                <div className="bg-black">
                    <Projects></Projects>
                </div>
            </div>
        </>
    )
}

export default App
