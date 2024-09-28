import ionicLogo from '../assets/ionicLogo.png'
import YourBeat from '../assets/YourBeatLogo.png';
import UofW from "../assets/UofW.png";
import { useNavigate } from 'react-router-dom';
import { forwardRef } from "react";

const Experience = ({}, ref) =>{
    const navigate = useNavigate();
    return (
        <div ref={ref} className="w-full mt-5 h-fit flex flex-col items-center justify-center mb-[100px]">
           <div className="w-[90%] h-fit ">
                <h3 className="w-full text-center text-4xl mt-10 font-bold">Work Experience</h3>
                <p className="w-full text-center text-xl mt-6 mb-[70px]">Here are a couple of the companies I have worked for!</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 auto-rows-auto w-full h-[50%] justify-evenly gap-10">
                    <div className="aspect-[1.4/1] w-full rounded-xl relative group">
                        <div className='flex items-center justify-center w-full h-full rounded-xl bg-gradient-to-r from-green-700 via-green-800 to-green-900 absolute top-0 left-0 group-hover:opacity-0 opacity-100 transition-all duration-1000'>
                            <img src="https://glendor.com/wp-content/uploads/2022/09/logo-footersvg.svg" className='rounded-xl z-20 absolute group-hover:hidden transition-all duration-1000 scale-125'></img>
                        </div>
                        <div className='w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center text-white bg-black rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <div className='flex flex-col items-center gap-3 p-6'>
                                <h3 className='font-bold text-2xl font-Roboto text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text'>Glendor Inc.</h3>
                                <p className='text-md font-Roboto text-center font-thin'>
                                    Worked with state of the art face recognition models to see efficacy on MRI images and defaced MRI images.
                                </p>
                                <div className='flex flex-row gap-2'>
                                    <a target="_blank" rel="noopener" href="https://github.com/glendorinc/GlendorInternship_Summer2024">
                                        <button className="btn btn-sm">View</button>
                                    </a>
                                    <button onClick={() => navigate("/resume")} className="btn btn-sm bg-gradient-to-t text-black border-none from-green-400 via-green-500 to-green-600 hover:opacity-80">More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-[1.4/1] w-full rounded-xl relative flex items-center justify-center group">
                        <div className='w-full h-full rounded-xl bg-gradient-to-r from-[#1E90FF] to-black absolute top-0 left-0 z-10 group-hover:bg-black transition-all duration-1000'></div>
                        <img src={ionicLogo} className='rounded-xl z-20 absolute scale-75 group-hover:hidden transition-all duration-1000'></img>
                        <div className='w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center bg-black text-white rounded-xl opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 p-6 lg:p-0'>
                            <div className='flex flex-col items-center gap-3 p-6'>
                                <h3 className="font-bold text-2xl font-Roboto bg-[#1E90FF] text-transparent bg-clip-text">
                                    Ionic Studios Inc.
                                </h3>
                                <p className='text-md font-Roboto text-center font-thin'>Created a Full stack application to display Ionic Studio's new game CORE: Neurolink.</p>
                                <div className='flex flex-row gap-2'>
                                    <a target="_blank" rel="noopener" href="https://ionic-studios-test.netlify.app/">
                                        <button className="btn btn-sm">View</button>
                                    </a>
                                    <button onClick={() => navigate("/resume")} className="btn btn-sm bg-[#1E90FF] border-[#1E90FF] text-black hover:opacity-80 hover:bg-[#1E90FF] hover:border-[#1E90FF]">More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-[1.4/1] w-full rounded-xl relative group bg-black">
                        <img src={YourBeat} className='rounded-xl z-0 absolute w-full h-full group-hover:opacity-0 transition-all duration-1000'></img>
                        <div className='w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-1000'>
                            <div className='flex flex-col items-center gap-3 p-6'>
                                <h3 className='font-bold text-2xl font-Roboto bg-gradient-to-t text-transparent from-red-500 via-orange-500 to-yellow-500 bg-clip-text'>YourBeat Inc.</h3>
                                <p className='text-md font-Roboto text-center font-thin'>
                                    Created a map search functionality in Next.js to link Canadian music artists to venues.
                                </p>
                                <div className='flex flex-row gap-2'>
                                    <button onClick={() => navigate("/resume")} className="btn btn-sm bg-gradient-to-t text-black border-none from-red-500 via-orange-500 to-yellow-500 hover:opacity-80">More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-[1.4/1] w-full rounded-xl relative flex items-center justify-center group lg:col-start-2 lg:row-start-2 lg:justify-self-center">
                        <div className='w-full h-full rounded-xl bg-gradient-to-r from-[#004488] to-[#FFCC33] absolute top-0 left-0 z-10 group-hover:bg-black transition-all duration-1000'></div>
                        <img src={UofW} className='rounded-xl z-20 absolute group-hover:hidden transition-all duration-1000'></img>
                        <div className='w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center bg-black text-white rounded-xl opacity-0 group-hover:opacity-100 group-hover:flex transition-all duration-1000 p-6 lg:p-0'>
                            <div className='flex flex-col items-center gap-3 p-6'>
                                <h3 className="font-bold text-2xl font-Roboto bg-[#FFCC33] text-transparent bg-clip-text text-center">
                                    Research & Teaching Assistant
                                </h3>
                                <p className='text-md font-Roboto text-center font-thin'>Teaching Assistant for COMP 1410 and researching social media sentiment and wastewater analysis. </p>
                                <div className='flex flex-row gap-2'>
                                    <button onClick={() => navigate("/resume")} className="btn btn-sm bg-[#FFCC33] border-[#FFCC33] text-black hover:opacity-80 hover:bg-[#FFCC33] hover:border-[#FFCC33]">More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default forwardRef(Experience);