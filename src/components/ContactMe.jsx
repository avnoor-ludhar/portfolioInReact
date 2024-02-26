import { FaRegHandPointRight } from "react-icons/fa6";
import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from 'framer-motion'

const ContactMe =({}, ref)=>{
    const refAnim = useRef(null);
    const isInView = useInView(refAnim, { once: true});
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start('visible')
        }
    },[isInView])

    return (
        <motion.div 
        variants={{
            hidden:{opacity:0, y:75, filter: "blur(2px)" },
            visible:{opacity: 1, y:0, filter: "blur(0px)" }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.75
            }}
        className="w-full flex justify-center relative md:bottom-[100px] bottom-[150px]">
            <div ref={refAnim} className="bg-black w-[100%] md:h-[200px] h-[300px] rounded-2xl flex md:flex-row 
            md:justify-between md:items-center flex-col items-center justify-evenly shadow-lg p-5">
                <h2 className="text-[whitesmoke] md:text-3xl text-4xl font-bold lg:ml-20 md:ml-10">
                    Contact Me
                </h2>
                <p className="text-lg md:w-[35%] w-[90%] md:max-w-[400px] text-[whitesmoke] font-thin leading-8 md:mx-7">
                    Interested in working together? We should queue up a time to chat.
                </p>
                <a href="https://www.linkedin.com/in/avnoor-ludhar-2028012a1/" target="_blank" rel="noopener" className="btn btn-outline rounded-full btn-info lg:mr-20 md:mr-10 w-[200px] 
                h-[60px] text-xl border-[3px] "><FaRegHandPointRight className="w-6 h-6"/>Let's do it</a>
            </div>
        </motion.div>
        
    )
}

export default forwardRef(ContactMe);