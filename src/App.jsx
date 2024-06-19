import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './pages/Hero.jsx';
import { useState, useRef } from 'react';
import AboutMe from './pages/AboutMe.jsx';
import Footer from './pages/Footer.jsx';
import Portfolio from './pages/Portfolio.jsx';
import SkillsSection from './pages/SkillsSection.jsx';
import Experience from './pages/Experience.jsx';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const handleClick = (buttonClicked) =>{
    if(mobileMenuOpen){
      setMobileMenuOpen(false);
    }
    if(buttonClicked == 'About Me'){
      revealRefs.current[0]?.scrollIntoView({ behavior: 'smooth' });
    } else if(buttonClicked == 'Skills'){
      revealRefs.current[1]?.scrollIntoView({ behavior: 'smooth' });
    } else if(buttonClicked == 'Portfolio'){
      revealRefs.current[2]?.scrollIntoView({ behavior: 'smooth' });
    } else if(buttonClicked == 'Contact Me'){
      revealRefs.current[3]?.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const addToRefs = (el) =>{
    console.log(el);
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }

  return (
    <>
      <div>
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleClick={handleClick} />
        <Hero mobileMenuOpen={mobileMenuOpen}/>
        <AboutMe mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
        <SkillsSection mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
        <Experience />
        <Portfolio mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
        <Footer mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
      </div>

    </>
  )
}

export default App
