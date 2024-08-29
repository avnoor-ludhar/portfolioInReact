
import { forwardRef } from "react";
import Skills from "../components/skills";

const SkillsSection = ({}, ref) =>{
    return (
        <div className={`h-fit w-full`} ref={ref}>
                <div className="h-[120px] w-full bg-[#40A2D8] mb-[-60px]"></div>
                <div className="h-fit w-full" >
                    <Skills />
                </div>
        </div>
    )
}

export default forwardRef(SkillsSection);