import { categories } from '../assets/constants.js';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { FaBriefcase } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";;


const SideLinks = ({handleClick}) => (
    <div className='flex flex-col md:hidden absolute items-start top-[10vh] p-5 w-full'>
        <div className='w-full flex flex-col'>
            <FaBriefcase className='w-[80px] h-[80px] self-center m-5 '/>
                {categories.map((category)=>(
                <button onClick={()=>{handleClick(category.pageName)}} key={category.pageName} 
                        className="flex justify-left items-center
                        my-5 selection: group ml-10">
                        <category.icon className='mr-5 scale-[2]'/>
                        <p className='m-1 relative'>
                            <span className='flex flex-row justify-center items-center text-2xl'>
                                {category.pageName}
                            </span>
                            <span className='absolute -bottom-1 rounded left-0 w-0 h-1 bg-gradient-109 from-[#3dedfd_44.2%] to-[#0388ee_95.6%] transition-all group-hover:w-full'></span>
                        </p>
                    </button>
                ))}
        </div>
    </div>
  )

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen, handleClick })=>{
    return (
    <>
        <div className={`fixed flex flex-col gap-5 top-0 h-screen w-2/3 backdrop-blur-lg
       z-10 p-6 md:hidden transition-all ${mobileMenuOpen ? 'left-0' :
        '-left-full'}`}>
            { mobileMenuOpen && (<RiCloseLine className="delay-75 w-[80px] rounded-full absolute right-0 btn btn-ghost" onClick={() => setMobileMenuOpen(false)}/>) }
          <SideLinks handleClick={handleClick}/>
        </div>
    </>
    )
};

export default Sidebar;