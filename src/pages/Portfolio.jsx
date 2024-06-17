import PortfolioCard from "../components/PortfolioCard.jsx";
import { portfolioImages } from "../assets/constants";
import {useRef, useEffect, forwardRef, useState} from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { FaArrowDown } from "react-icons/fa";


const Portfolio = ({mobileMenuOpen}, ref) =>{
    const [renderCount, setRenderCount] = useState(3);
    const refAnim = useRef(null);
    //adds an intersection observer on the ref specified
    const isInView = useInView(refAnim, { once: true });
    const firstRenderRef = useRef(false);

    //allows us to manually set when to our animate state when we want to 
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            //adds this variant to our animation
            mainControls.start("visible")
        }
    }, [isInView]);

    useEffect(()=>{
        if(firstRenderRef.current){
            mainControls.start("visible");
        } else{
            firstRenderRef.current = true;
        }
       
    }, [renderCount]);

    const handleLoadMore = () => {
        setRenderCount(prevCount => {
            const newCount = prevCount + 3;
            return (newCount < portfolioImages.length) ? newCount : portfolioImages.length;
        });
    };

    return(
        <>
            <div ref={ref} className={`w-full h-fit flex flex-col items-center ${mobileMenuOpen ? 'opacity-30' : 'opacity-100' } mt-5 mb-[160px]`}>
                <div className="w-[95%] mb-[90px]">
                    <h2 className="w-full text-center text-4xl mt-10 font-bold">
                        My Portfolio
                    </h2>
                    <h3 className="w-full text-center text-xl mt-6">
                        Here are a few past design projects I've worked on. Want to see more? <a href="mailto:avnoor0119@gmail.com" className="cursor-pointer text-[#0070E0] hover:opacity-85">Email me.</a>
                    </h3>
                </div>
                <div ref={refAnim} className="h-fit w-full flex flex-row items-start justify-evenly flex-wrap" >
                    {portfolioImages.map((info, i)=>(i < renderCount && (<PortfolioCard key = {info.key} imgSrc={info.img} links={info.links} title={info.title} content={info.content} year={info.postBreak} mainControls={mainControls} delay2={(0.35*(i % 3))}/>)))}
                </div>
                <div className="flex items-center justify-center w-full">
                    <div className="w-[250px]">
                        <button className="btn btn-block text-xl font-inter rounded-xl font-bold" style={{height: "60px"}} onClick={handleLoadMore}>Load more({portfolioImages.length - renderCount}) <FaArrowDown /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default forwardRef(Portfolio);