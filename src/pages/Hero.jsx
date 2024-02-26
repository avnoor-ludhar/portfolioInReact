import bitmoji from "../assets/bitmoji.png";
import {useRef, useEffect} from "react";
import {motion, useInView, useAnimation, stagger} from "framer-motion";
import computers from '../assets/computers.svg';

const Hero = ({mobileMenuOpen}) => {
    const ref = useRef(null);
    //adds an intersection observer on the ref specified
    const isInView = useInView(ref, { once: true});

    //allows us to manually set when to our animate state when we want to 
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            //adds this variant to our animation
            mainControls.start("visible")
        }
    }, [isInView])

    return (
    <>
        <div className={`mb-8 flex justify-center h-[70vh] xs:h-[60vh] lg:h-[70vh] pt-5 mt-5 ${mobileMenuOpen ? 'opacity-30' : 'opacity-100' } transition ease-in duration-400`}>
            <div className="flex flex-row justify-center w-[90%] h-[97%]">
                <div ref={ref} className="w-[95%] h-full flex flex-col justify-start items-center gap-5">
                    <motion.h1
                    variants={{
                    hidden:{opacity:0, y:75 },
                    visible:{opacity: 1, y:0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 0.5,
                    }}
                    className="w-full text-center text-[2rem] md:text-[2.6rem] lg:text-5xl mt-10 font-bold">Full-Stack Developer and Student</motion.h1>
                    <motion.h2 
                    variants={{
                    hidden:{opacity:0, y:75 },
                    visible:{opacity: 1, y:0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 0.5,
                        delay: 0.15
                    }}
                    className="w-full text-center text-2xl md:text-3xl ">Coding and learning is what I love to do!</motion.h2>
                    <motion.div 
                    variants={{
                    hidden:{opacity:0, y:75 },
                    visible:{opacity: 1, y:0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 0.5,
                        delay: 0.3
                    }}
                    className="md:w-[260px] md:h-[260px] w-[170px] h-[170px] bg-[#40A2D8] rounded-full mt-10 shadow-lg">

                        <img src={bitmoji} className="relative bottom-0 w-[100%] h-[100%]"/>
                    </motion.div>
                </div>
            </div>
        </div>
        <div className={`flex flex-row justify-center w-full lg:h-[44vh] h-fit ${mobileMenuOpen ? 'opacity-30' : 'opacity-100' } `}>
            <img src={computers} className=''/>
        </div>
    </>
    );
}

export default Hero;

