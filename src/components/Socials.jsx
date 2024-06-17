import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Socials = () =>{
    return (
        <nav className='bottom-10 relative'>
          <div className="grid grid-flow-col gap-8 relative">
            <a href="https://github.com/avnoor-ludhar" target="_blank" rel="noopener" className="cursor-pointer">
              <div className='w-12 h-12 rounded-full border-[2px] border-white flex items-center justify-center hover:bg-white hover:text-[#40A2D8] text-white'>
                <FaGithub className='w-8 h-8'/>
              </div>
            </a>
            <a target="_blank" rel="noopener" className="cursor-pointer" href="https://www.linkedin.com/in/avnoor-ludhar-2028012a1/">
              <div className='w-12 h-12 rounded-full border-[2px] border-white flex items-center justify-center hover:bg-white hover:text-[#40A2D8] text-white'>
                <FaLinkedinIn className=' w-7 h-7'/>
              </div>
            </a>
            <a href='https://www.instagram.com/avnoor_ludhar/' target="_blank" rel="noopener" className="cursor-pointer">
              <div className='w-12 h-12 rounded-full border-[2px] border-white flex items-center justify-center hover:bg-white hover:text-[#40A2D8] text-white'>
                <FaInstagram className= 'w-8 h-8'/>
              </div>
            </a>
          </div>
        </nav>
    )
}

export default Socials;