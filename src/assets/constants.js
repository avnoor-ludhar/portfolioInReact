import { FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import img0 from "./InterviewME.png";
import img1 from "./Dhol.png";
import img2 from "./ScheduleApp.png";
import img3 from "./trainingApp.png";
import img4 from "./GalleryShooter.png";
import img5 from "./Asteroids.png";
import img6 from "./Portfolio.png";

const links = [
    { pageName: 'Home', to: '/', icon: FaHome, emoji: '🏠 '},
    { pageName: 'Login', to: '/login', icon: FaCircleUser, emoji: '🔐 '}
];

const categories = [
    { pageName: 'About Me', icon: FaPerson},
    { pageName: 'Skills', icon: GiSkills},
    {pageName: 'Experience'},
    { pageName: 'Contact Me', icon: MdOutlineSportsGymnastics},
    { pageName: 'Portfolio'}
]

const portfolioImages = [
{
    key: 100,
    img: img0,
    links: {
        git: "https://github.com/avnoor-ludhar/interview.me",
        website: "https://github.com/avnoor-ludhar/interview.me"
    },
    title: "InterviewME",
    content: "Creating a full stack AI interview application for users to practice their interviewing skills in real time. Tailored towards university applications and inspired by the University of Waterloo entrance interview. Implemented via a web socket server, REST API and React frontend.",
    postBreak: "Creation year: 2024"
},
{
    key: 101,
    img: img1,
    links: {
        git: "https://github.com/avnoor-ludhar/Dhol",
        website: "https://dhol.netlify.app/",
    },
    title: "Lyriks",
    content: "Created a front-end application using React, Rapid API, Redux Toolkit, and RTK query. Created a robust UI with strong error handling. Implemented Redux Toolkit to manage complex state in the form of the player slice. Website is hosted on Netlify click the link below to view.",
    postBreak: "Creation year: 2023."
}, 
{
    key: 102,
    img: img6,
    links: {
        git: "https://github.com/avnoor-ludhar/Portfolio",
        website: "https://avnoorludhar.netlify.app/",
    },
    title: "Avnoor's Portfolio",
    content: "Welcome to my portfolio website where I display the work I have completed in the past. This application was built using React, TailwindCSS, Framer Motion, and Vite. It displays my ability to create visually appealing front-end websites.",
    postBreak: "Creation year: 2024"
},
{
    key: 103,
    img: img2,
    links: {
        git: "https://github.com/avnoor-ludhar/schedule-app",
        website: "https://github.com/avnoor-ludhar/schedule-app",
    },
    title: "Success Formula",
    content: "The Success Formula is a scheduling app that implements google books API. The full stack application is built using mongoDB, Express, Node.js, EJS and CSS. Displaying a strong understanding of fullstack principles. More information and a demo video can be found in the GitHub Repository. ",
    postBreak: "Creation year: 2023."
},
{
    key: 104,
    img: img3, 
    links: {
        git: "https://github.com/avnoor-ludhar/Training-App",
        website: "https://github.com/avnoor-ludhar/Training-App",
    },
    title: "Av Academy Workout App",
    content: "I developed a workout builder app in Java, utilizing the Swing graphics library and adhering to Object-Oriented Programming (OOP) principles. This project demonstrates a deep understanding of classes, methods, fields, and fundamental programming principles.",
    postBreak: "Creation year: 2021.",
},
{
    key: 105,
    img: img5,
    links: {
        git: "https://github.com/avnoor-ludhar/Asteroids",
        website: "https://github.com/avnoor-ludhar/Asteroids"
    },
    title: "Retro Asteroids Game",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv",
    postBreak: "Creation year: 2021"
},
{
    key: 106,
    img: img4,
    links: {
        git: "https://github.com/avnoor-ludhar/galleryShooterGame",
        website: "https://github.com/avnoor-ludhar/galleryShooterGame"
    },
    title: "Army Base Defence",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv.",
    postBreak: "Creation year: 2020"
},
]

export { links, categories, portfolioImages};