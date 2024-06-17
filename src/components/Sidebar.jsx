import { categories } from '../assets/constants.js';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { FaPerson } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
;


const SideLinks = ({handleClick, setMobileMenuOpen}) => (
    <div className='flex flex-col md:hidden relative items-start w-full'>
        <RiCloseLine className="delay-75 w-[80px] rounded-full btn btn-ghost self-end mb-2" onClick={() => setMobileMenuOpen(false)}/>
        <div className='w-full flex flex-col border-[1px] border-x-0 border-black mt-3'>
                {categories.map((category)=>(
                <button onClick={()=>{handleClick(category.pageName)}} key={category.pageName} 
                        className="flex items-center group p-6 pl-10 border-black border-[1px] border-x-0 text-black hover:text-white bg-white hover:bg-black transition-all duration-200">
                        <p className='m-1 relative'>
                            <span className='flex flex-row justify-center items-center text-2xl'>
                                {category.pageName}
                            </span>
                        </p>
                    </button>
                ))}
        </div>
    </div>
  )

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen, handleClick })=>{
    return (
    <>
        <div className={`fixed flex flex-col gap-5 top-0 h-screen w-2/3 bg-white pt-4
       z-10 md:hidden transition-all justify-between ${mobileMenuOpen ? 'left-0' :
        '-left-full'}`}>
          <SideLinks handleClick={handleClick} setMobileMenuOpen={setMobileMenuOpen}/>
          <nav className='relative mb-10'>
            <div className="grid grid-flow-col gap-8 relative">
                <a href="https://github.com/avnoor-ludhar" target="_blank" rel="noopener" >
                <div className='w-12 h-12 rounded-full border-[2px] border-black flex items-center justify-center hover:bg-black hover:text-white text-black'>
                    <FaGithub className='w-8 h-8'/>
                </div>
                </a>
                <a href="https://www.linkedin.com/in/avnoor-ludhar-2028012a1/" target="_blank" rel="noopener" >
                    <div className='w-12 h-12 rounded-full border-[2px] border-black flex items-center justify-center hover:bg-black hover:text-white text-black'>
                        <FaLinkedinIn className='w-7 h-7'/>
                    </div>
                </a>
                <a href='https://www.instagram.com/avnoor_ludhar/' target="_blank" rel="noopener">
                    <div className='w-12 h-12 rounded-full border-[2px] border-black flex items-center justify-center hover:bg-black hover:text-white text-black'>
                        <FaInstagram className= 'w-8 h-8'/>
                    </div>
                </a>
            </div>
            </nav>
        </div>
    </>
    )
};

export default Sidebar;