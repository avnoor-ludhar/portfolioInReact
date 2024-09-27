import AboutMe from './AboutMe.jsx';
import Footer from './Footer.jsx';
import Portfolio from './Portfolio.jsx';
import SkillsSection from './SkillsSection.jsx';
import Experience from './Experience.jsx';
import Navbar from '../components/Navbar.jsx';
import Hero from './Hero.jsx';

const Home = ({mobileMenuOpen, setMobileMenuOpen, handleClick, addToRefs}) =>{
    
    return (
        <div>
            <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleClick={handleClick} />
            <Hero mobileMenuOpen={mobileMenuOpen}/>
            <AboutMe mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
            <SkillsSection mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
            <Experience ref={addToRefs}/>
            <Portfolio mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
            <Footer mobileMenuOpen={mobileMenuOpen} ref={addToRefs}/>
        </div>
    )
}

export default Home;