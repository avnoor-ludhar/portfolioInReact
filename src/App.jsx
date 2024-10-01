import './App.css';
import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

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
    if(revealRefs.current.length == 5){
      revealRefs.current = [];
    }
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }

  return (
    <>
      <Helmet>
          <title>Avnoor Ludhar's Portfolio</title>
          <meta name="description" content="Discover Avnoor Ludhar's projects including InterviewME and the Success Formula." />
          <link rel="icon" type="image/svg+xml" href="/Avnoor.svg" />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} addToRefs={addToRefs} handleClick={handleClick}/>} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
