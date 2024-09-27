import resume from "../assets/AvnoorLudharResume.png";

const Resume = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <img 
                src={resume} 
                className="w-full max-w-3xl h-auto shadow-lg border rounded-lg"
                alt="Avnoor Ludhar Resume"
            />
        </div>
    );
};

export default Resume;
