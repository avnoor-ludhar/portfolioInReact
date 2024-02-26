import { FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import img1 from "./Dhol.png";
import img2 from "./ScheduleApp.png";
import img3 from "./trainingApp.png";

const links = [
    { pageName: 'Home', to: '/', icon: FaHome, emoji: '🏠 '},
    { pageName: 'Login', to: '/login', icon: FaCircleUser, emoji: '🔐 '}
];

const categories = [
    { pageName: 'About Me', icon: FaPerson},
{ pageName: 'Skills', icon: GiSkills},
{ pageName: 'Contact Me', icon: MdOutlineSportsGymnastics}
]

const portfolioImages = [
{img: img1,
    links: {
        git: "https://github.com/avnoor-ludhar/Dhol",
        website: "https://dhol.netlify.app/",
    },
    title: "Lyriks",
    content: "Created a front-end application using React, Rapid API, Redux Toolkit, and RTK query. Created a robust UI with strong error handling. Implemented Redux Toolkit to manage complex state in the form of the player slice. Website is hosted on Netlify click the link below to view.",
    postBreak: "Creation year: 2023."

}, 
{img: img2,
    links: {
        git: "https://github.com/avnoor-ludhar/schedule-app",
        website: "https://github.com/avnoor-ludhar/schedule-app",
    },
    title: "Success Formula",
    content: "The Sucess Formula is a scheduling app that implements google books API. The full stack application is built using mongoDB, Express, Node.js, EJS and CSS. Displaying a strong understanding of fullstack principles. More information and a demo video can be found in the GitHub Repository. ",
    postBreak: "Creation year: 2023."
}, 
{img: img3, 
    links: {
        git: "https://github.com/avnoor-ludhar/Training-App",
        website: "https://github.com/avnoor-ludhar/Training-App",
    },
    title: "Av Academy Workout App",
    content: "I developed a workout builder app in Java, utilizing the Swing graphics library and adhering to Object-Oriented Programming (OOP) principles. This project demonstrates a deep understanding of classes, methods, fields, and fundamental programming principles.",
    postBreak: "Creation year: 2021.",
}]

export { links, categories, portfolioImages};