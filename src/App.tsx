import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes'
import Navbar from './components/Navbar'

import { BrowserRouter } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

    // <main className='text-gray-400 bg-gray-900 body-font'>
    //   <Navbar/>
    //   <Home/>
    //   <About/>
    //   <Projects/>
    //   <Skills/>
    // </main>

