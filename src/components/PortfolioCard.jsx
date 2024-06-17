import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import {motion} from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PortfolioCard = ({imgSrc, links, title, year, content, mainControls, delay2})=>{

    return(
        <motion.div 
        variants={{
            hidden:{opacity:0, y:75, filter: "blur(2px)" },
            visible:{opacity: 1, y:0, filter: "blur(0px)" }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.6,
                delay: delay2
            }}
        className="card w-96 bg-base-100 shadow-xl mt-10 bottom-12">
            <figure>
            <LazyLoadImage src={imgSrc} alt={title} effect="blur"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                {content}
                <br />
                <br />
                {year}
                </p>
                <div className="card-actions justify-end gap-5">
                    <a className="btn rounded-xl" href={links.git} target="_blank" rel="noopener"><FaGithub className="scale-[1.75]"/></a>
                    <a className="btn rounded-xl" href={links.website} target="_blank" rel="noopener"><CgWebsite className="scale-[1.75]"/></a>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioCard;