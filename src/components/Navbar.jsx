import { Link, NavLink } from 'react-router-dom';
import { categories } from '../assets/constants';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import Sidebar from './Sidebar';

const NavLinks = ({ handleClick }) => (
  <div className='md:flex flex-row hidden'>
    {categories.map((category)=>(
      <button onClick={()=>{handleClick(category.pageName)}} key={category.pageName} 
              className="flex justify-left items-center
              my-1 text-sm selection: group ml-5">
              <p className='m-1 relative'>
                  <span className='flex flex-row justify-center items-center text-xl'>
                      {category.pageName}
                  </span>
                  <span className='absolute -bottom-1 rounded left-0 w-0 h-1 bg-gradient-109 from-[#3dedfd_44.2%] to-[#0388ee_95.6%] transition-all group-hover:w-full'></span>
              </p>
        </button>
    ))}
  </div>
)

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, handleClick })=>{
    return (
    <div className="navbar outline-none sm:px-10 px-5 py-7 bg-base-100">
        <div className="flex-1 flex flex-row">
          <button onClick={()=>{handleClick('Portfolio')}} className="btn btn-ghost text-3xl">Portfolio</button>
        </div>
        <div className={`flex-none ${mobileMenuOpen ? 'opacity-30' : 'opacity-100' }`}>
        { /* implement the on click the search bar comes out with an animation */ }
        <div className="btn btn-ghost rounded-full relative md:hidden cursor-pointer ">
            {!mobileMenuOpen && (<HiOutlineMenu className="w-10 h-10" onClick={() => setMobileMenuOpen(true)}/>)}
          </div>
        <NavLinks handleClick={handleClick}/>
        </div>
        <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleClick={handleClick}/>
      </div>
    )
};

export default Navbar;