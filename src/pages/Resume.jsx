import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import resume from "../assets/Avnoor_Ludhar_Resume.pdf";

const Resume = ({ mobileMenuOpen, setMobileMenuOpen, originalHandleClick }) => {
  const navigate = useNavigate();

  const handleClick = (buttonClicked) => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
    if (buttonClicked === "Resume") return;

    navigate("/");
    setTimeout(() => {
      originalHandleClick(buttonClicked);
    }, 300);
  };

  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        handleClick={handleClick}
      />

      <div className="flex-1 w-full flex items-center justify-center p-4">
        <iframe
          src={resume}
          title="Avnoor Ludhar Resume"
          className="w-full max-w-5xl h-[calc(100vh-120px)] mt-20 shadow-lg border rounded-lg"
        />
      </div>
    </div>
  );
};

export default Resume;
