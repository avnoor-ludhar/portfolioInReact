import { FaPeopleArrows } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

const Skills = ()=>{

    return(
        <div className="w-full h-fit flex md:flex-row flex-col justify-center items-center relative bottom-20">
            <div className="w-[95%] shadow-md h-fit flex md:flex-row flex-col justify-center rounded-2xl bg-white">
                <div className="flex flex-col items-center md:h-[800px] h-[700px] md:w-1/3 w-full md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl rounded-tl-2xl border-[1px] border-[#000_30%]">
                    <div className="bg-[#0B60B0] w-20 h-20 rounded-full mt-[50px] flex items-center justify-center">
                        <FaPeopleArrows className="scale-[2.6] text-white"/>
                    </div>
                    <h3 className="font-bold text-black text-2xl mt-7">
                        Interpersonal skills
                    </h3>
                    <p className="w-[80%] text-center leading-7 mt-5">
                        I value building meaningful connections with people through understanding and empathy.
                    </p>
                    <h5 className="text-[#40A2D8] mt-9 text-lg">
                        Things I enjoy to do:
                    </h5>
                    <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
                        <p className="text-center">Coding</p>
                        <p className="text-center">Sports</p>
                        <p className="text-center">Lifting</p>
                        <p className="text-center">Billiards</p>
                    </div>
                    <h5 className="text-[#40A2D8] mt-9 text-lg">
                        Characteristics:
                    </h5>
                    <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
                        <p className="text-center">Team player</p>
                        <p className="text-center">Resilient</p>
                        <p className="text-center">Disciplined</p>
                        <p className="text-center">Friendly</p>
                        <p className="text-center">Empathetic</p>
                        <p className="text-center">Effective Communication</p>
                    </div>
                </div>
                <div className="flex flex-col items-center md:h-[800px] h-[700px] md:w-1/3 w-full border-[1px] border-[#000_30%]">
                    <div className="bg-[#0B60B0] w-20 h-20 rounded-full mt-[50px] flex items-center justify-center">
                        <MdOutlineScreenshotMonitor className="scale-[3] text-white"/>
                    </div>
                    <h3 className="font-bold text-black text-2xl mt-7">
                        Front-end Skills
                    </h3>
                    <p className="w-[80%] text-center leading-7 mt-5">
                        I enjoy creating visually appealing applications tailored to my clients' unique needs and preferences.
                    </p>
                    <h5 className="text-[#40A2D8] mt-9 text-lg">
                        Languages:
                    </h5>
                    <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
                        <p className="text-center">Javascript(React.js and jQuery)</p>
                        <p className="text-center">TypeScript</p>
                        <p className="text-center">HTML</p>
                        <p className="text-center">CSS</p>
                    </div>
                    <h5 className="text-[#40A2D8] mt-9 text-lg">
                        Dev Tools:
                    </h5>
                    <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
                        <p className="text-center">Bootstrap</p>
                        <p className="text-center">Tailwind CSS</p>
                        <p className="text-center">Daisy UI</p>
                        <p className="text-center">Redux Toolkit</p>
                        <p className="text-center">Git & Github</p>
                        <p className="text-center">Netlify</p>

                    </div>
                </div>
                <div className="flex flex-col items-center md:h-[800px] h-[700px] md:w-1/3 w-full md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none rounded-br-2xl rounded-bl-2xl border-[1px] border-[#000_30%]">
                    <div className="bg-[#0B60B0] w-20 h-20 rounded-full mt-[50px] flex items-center justify-center">
                    <FaTools className="scale-[2.6] text-white"/>
                    </div>
                    <h3 className="font-bold text-black text-2xl mt-7">
                        Back-end Skills
                    </h3>
                    <p className="w-[80%] text-center leading-7 mt-5">
                    I enjoy bringing applications to life and understanding all the details involved in their creation
                    </p>
                    <h5 className="text-[#40A2D8] mt-9 text-lg">
                        Languages:
                    </h5>
                    <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
                        <p className="text-center">Javascript(Node.js, Express)</p>
                        <p className="text-center">Python(Flask)</p>
                        <p className="text-center">Java</p>
                        <p className="text-center">C & C++</p>
                    </div>
                    <h5 className="text-[#40A2D8] mt-9 text-lg">
                        Dev Tools:
                    </h5>
                    <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
                        <p className="text-center">MongoDB</p>
                        <p className="text-center">SQL</p>
                        <p className="text-center">Git</p>
                        <p className="text-center">Github</p>
                        <p className="text-center">REST API</p>
                        <p className="text-center">EJS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;