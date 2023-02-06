import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
    </main>
  )
}

export default App
