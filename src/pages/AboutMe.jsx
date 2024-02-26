
import { forwardRef } from "react";

import {useRef, useEffect} from "react";
import {motion, useInView, useAnimation} from "framer-motion";


const AboutMe = ({ mobileMenuOpen }, ref) =>{
    const refAnim = useRef(null);
    //adds an intersection observer on the ref specified
    const isInView = useInView(refAnim, { once: true });

    //allows us to manually set when to our animate state when we want to 
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            //adds this variant to our animation
            mainControls.start("visible")
        }
    }, [isInView])
    
    return (<div ref={ref} className={`h-[70vh] xs:h-[53vh] w-full bg-[#40A2D8] ${mobileMenuOpen ? 'opacity-30' : 'opacity-100' } flex flex-col items-center justify-center`}>
    <div className="w-[80%] h-[fitcontent] flex justify-center mb-4">
        <motion.div 
        variants={{
            hidden:{opacity:0, y:75, filter: "blur(3px)" },
            visible:{opacity: 1, y:0, filter: "blur(0px)" }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.5,
                delay: 0.15
            }}
            className="h-full w-[90%] md:w-[70%] lg:w-[700px] flex flex-col items-center justify-start gap-5">
            <h1 ref={refAnim} className="text-center mt-2 text-3xl md:text-4xl font-bold text-[whitesmoke]">
                Hey I'm Avnoor!
            </h1>
            <p className="text-center mb-2 md:text-xl text-lg text-[whitesmoke] font-thin leading-8">
                A first-year software engineering 
                student who never accepts failure, takes accountability 
                for all of my actions, and possesses excellent technical 
                and communication skills. I aim to make a meaningful 
                impact by creating clean commercial code that can enhance 
                a users' day-to-day life.
            </p>
        </motion.div>
    </div>
</div>)
}

export default forwardRef(AboutMe);