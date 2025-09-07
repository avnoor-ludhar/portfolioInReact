import { FaTools, FaDatabase, FaChartLine } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

const Skills = () => {
  return (
    <div className="w-full h-fit flex md:flex-row flex-col justify-center items-center relative bottom-20">
      <div className="w-[95%] shadow-md h-fit flex md:flex-row flex-col justify-center rounded-2xl bg-white">
        {/* Data Science & ML */}
        <div className="flex flex-col items-center md:h-[750px] h-[620px] md:w-1/3 w-full md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl rounded-tl-2xl border-[1px] border-[#000_30%] md:p-0 pb-6">
          <div className="bg-[#0B60B0] md:w-20 md:h-20 h-16 w-16 rounded-full md:mt-[50px] mt-[35px] flex items-center justify-center">
            <FaChartLine className="md:scale-[2.6] scale-[2.2] text-white" />
          </div>
          <h3 className="font-bold text-black text-2xl mt-7">Data Science & ML</h3>
          <p className="w-[80%] text-center leading-7 mt-5">
            Python-first analytics and ML for forecasting, sentiment analysis, and research workflows.
          </p>

          <h5 className="text-[#40A2D8] mt-9 text-lg">Languages:</h5>
          <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
            <p className="text-center">Python</p>
            <p className="text-center">SQL</p>
          </div>

          <h5 className="text-[#40A2D8] mt-9 text-lg">Libraries & Tools:</h5>
          <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
            <p className="text-center">Pandas · NumPy · Scikit-Learn</p>
            <p className="text-center">Matplotlib</p>
            <p className="text-center">Sentiment Analysis</p>
            <p className="text-center">PostgreSQL (analytics DB)</p>
          </div>
        </div>

        {/* Front-end Skills */}
        <div className="flex flex-col items-center md:h-[750px] h-[620px] md:w-1/3 w-full border-[1px] border-[#000_30%] md:p-0 pb-6">
          <div className="bg-[#0B60B0] md:w-20 md:h-20 h-16 w-16 rounded-full md:mt-[50px] mt-[35px] flex items-center justify-center">
            <MdOutlineScreenshotMonitor className="md:scale-[3] scale-[2.4] text-white" />
          </div>
          <h3 className="font-bold text-black text-2xl mt-7">Front-end Skills</h3>
          <p className="w-[80%] text-center leading-7 mt-5">
            Building responsive, production-ready UIs with modern React tooling.
          </p>

          <h5 className="text-[#40A2D8] mt-9 text-lg">Languages:</h5>
          <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
            <p className="text-center">TypeScript · JavaScript</p>
            <p className="text-center">HTML5 · CSS3</p>
          </div>

          <h5 className="text-[#40A2D8] mt-9 text-lg">Dev Tools:</h5>
          <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
            <p className="text-center">React.js · Next.js</p>
            <p className="text-center">Redux</p>
            <p className="text-center">Tailwind CSS</p>
            <p className="text-center">Cypress (e2e)</p>
            <p className="text-center">Git & GitHub</p>
          </div>
        </div>

        {/* Back-end Skills */}
        <div className="flex flex-col items-center md:h-[750px] h-[620px] md:w-1/3 w-full md:rounded-tr-2xl md:rounded-br-2xl md:rounded-bl-none rounded-br-2xl rounded-bl-2xl border-[1px] border-[#000_30%] md:p-0 pb-6">
          <div className="bg-[#0B60B0] md:w-20 md:h-20 h-16 w-16 rounded-full md:mt-[50px] mt-[35px] flex items-center justify-center">
            <FaTools className="md:scale-[2.6] scale-[2.2] text-white" />
          </div>
          <h3 className="font-bold text-black text-2xl mt-7">Back-end Skills</h3>
          <p className="w-[80%] text-center leading-7 mt-5">
            APIs and real-time services with strong typing, testing, and deployability.
          </p>

          <h5 className="text-[#40A2D8] mt-9 text-lg">Languages:</h5>
          <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
            <p className="text-center">C# (ASP.NET)</p>
            <p className="text-center">TypeScript (Node.js)</p>
            <p className="text-center">Python (FastAPI)</p>
            <p className="text-center">SQL</p>
          </div>

          <h5 className="text-[#40A2D8] mt-9 text-lg">Dev Tools:</h5>
          <div className="flex flex-col gap-2 align-center w-[80%] h-fit mt-1">
            <p className="text-center">ASP.NET · Node.js/Express · FastAPI</p>
            <p className="text-center">PostgreSQL · Oracle DBMS</p>
            <p className="text-center">Amazon EC2</p>
            <p className="text-center">xUnit · Git & GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
