import './App.css'
import Navbar from './components/navbar.tsx'
import Hero from './components/hero.tsx'
import Projects from './components/Projects.tsx'

function App() {
    return (
        <>
            <div className='bg-black'>
                <div className=" bg-palewhite">
                    <Navbar></Navbar>
                </div>
                <div >
                    <Hero></Hero>
                </div>\
                <div>
                    <Projects></Projects>
                </div>
            </div>
        </>
    )
}

export default App
