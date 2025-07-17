import { ScrollTrigger,SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import  gsap from 'gsap'
import React from 'react'
 gsap.registerPlugin(ScrollTrigger,SplitText);
const App = () => {
  return ( <main>
    <Navbar/> 
    <Hero/>
    <div className="h-dvh bg-black">

    </div>
  </main>
  )
  
}

export default App
