import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './pages/Hero.jsx';
import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
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
    let index = 0;
    if(buttonClicked == 'About Me'){
      index = 0;
    } else if(buttonClicked == 'Skills'){
      index = 1;
    } else if(buttonClicked == 'Experience'){
      index = 2;
    } else if(buttonClicked == 'Portfolio'){
      index = 3;
    }else if(buttonClicked == "Contact Me"){
      index = 4;
    }

    const element = revealRefs.current[index];
    if (element) {
      let topOffset;
        if (index === 0) {
            // For "Hero" and "Game", center the element
            topOffset = window.innerHeight / 2 - element.clientHeight / 2;
        } else if(index == 1){
          topOffset = window.innerHeight / 2 - element.clientHeight / 4;
        } else if(index == 2) {
            // For "About" and "Contact", position slightly above the middle
            topOffset = window.innerHeight / 2 - element.clientHeight / 4;
        } else if(index == 3){
            topOffset = window.innerHeight / 8;
        } else if(index == 4){
          topOffset = 0;
        }

        window.scrollTo({
            top: element.offsetTop - topOffset,
            behavior: 'smooth'
        });
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
      <Helmet>
          <title>Avnoor Ludhar's Portfolio</title>
          <meta name="description" content="Discover Avnoor Ludhar's projects including InterviewME and the Success Formula." />
          <link rel="icon" type="image/svg+xml" href="../public/Avnoor.svg" />
      </Helmet>
      <div>
        <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleClick={handleClick} />
        <Hero mobileMenuOpen={mobileMenuOpen}/>
        <AboutMe mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
        <SkillsSection mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
        <Experience ref={addToRefs}/>
        <Portfolio mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
        <Footer mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
      </div>

    </>
  )
}

export default App
