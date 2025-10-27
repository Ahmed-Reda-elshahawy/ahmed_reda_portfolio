import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const ProjectsData = [

    {
        id: 1,
        title: "Airbnb Clone",
        description: `Collaborated with a team to replicate Airbnb’s core booking features. Built RESTFUL API, handled authentication.`,
        skills: ["ASP.NET Core Web API", "EF Core", "SQL Server", "TypeScript", "Angular"],
        projectImg: "/4.png",
        liveDemo: "https://drive.google.com/drive/folders/17AWUSL5xTWIXaYgG_yu9C-fd9WwotfGl",
        githupLink: "https://github.com/not-midozayn/Airbnb_Clone"
    },
    {
        id: 2,
        title: "Graduation Project",
        description: "Successfully implemented a real-time chat application with Firebase, demonstrating proficiency in integrating third-party services. The project also highlights experience with chatbots and CRUD operations, showcasing a well-rounded skillset.",
        skills: ["React", "Tailwind css", "Tanstack query", "React router dom", "Css modules"],
        projectImg: "/1.png",
        liveDemo: "https://youtu.be/w6PfKM9Jces",
        githupLink: "https://github.com/eslamar3y/grad_project"
    },
    {
        id: 2,
        title: "Ecommerce-website",
        description: `The website is a fully functional e-commerce site that allows users to browse products, add items to their cart, and 
                        checkout. The website also features a user authentication system and an admin dashboard for managing products, 
                        orders, and users`,
        skills: ["React", "Redux toolkit", "Tailwind css", "React router dom", "Sass"],
        projectImg: "/2.png",
        liveDemo: "https://ahmed-reda-elshahawy.github.io/ecommerce-website/",
        githupLink: "https://github.com/Ahmed-Reda-elshahawy/ecommerce-website"
    },
    {
        id: 3,
        title: "Restaurant web site Using Next",
        description: `This project is a Next.js application designed to showcase a variety of meals, provide detailed information about each 
                    meal, and enable users to create and share new meals with preparation steps`,
        skills: ["Next js", "React", "Tailwind css", "sqlite", "Css modules"],
        projectImg: "/3.png",
        liveDemo: undefined,
        githupLink: "https://github.com/Ahmed-Reda-elshahawy/Restaurant-Using-Next"
    },
] as const;

export const Links = [
    {
        linkName: "About",
        linkPath: "#about"
    },
    {
        linkName: "Projects",
        linkPath: "#projects"
    },
    {
        linkName: "Skills",
        linkPath: "#skills"
    },
    {
        linkName: "Experience",
        linkPath: "#experience"
    },
    {
        linkName: "Contact",
        linkPath: "#contact"
    },
] as const;

export const MySkills = [
    "Html", "Css", "Tailwind css", "Sass", "JavaScript", "TypeScript", "React", "Next js", "Git", "Angular", "C#", ".NET Core", "SQL Server", "Entity Framework", ".NET MVC", "Web API", "LINQ", "OOP", "SOLID Principles", "Design Patterns", "datastructures & algorithms"
] as const

export const experiencesData = [
    {
        title: "ITI External Instructor",
        location: "ITI Summer Training | Remote",
        description:
        "Delivering online structured training sessions on ASP.NET MVC for ITI students. Supported learners during lab, assigned coding exercises, and reviewed submissions.",
        icon: React.createElement(CgWorkAlt),
        date: "8 / 2025  -  9 / 2025",
    },
    {
        title: "Freelance .NET Developer",
        location: "Real Client | Remote",
        description:
        "Collaborated with a team of 5 developers to migrate a legacy .NET Web Forms system to an Asp.NET MVC with Clean Architecture .",
        icon: React.createElement(CgWorkAlt),
        date: "4 / 2025  -  5 / 2025",
    },
    {
        title: "Full-Stack .NET Developer - Intensive Program",
        location: "ITI Tanta Branch | Onsite",
        description:
        "Gained full-stack .NET fundamentals with practical experience in team leadership, collaboration, and presentations.",
        icon: React.createElement(CgWorkAlt),
        date: "12 / 2024  -  9 / 2025",
    },
    {
        title: "ITI frontend trainee",
        location: "ITI Monofia branch",
        description:
        "Developed a responsive e-commerce website using HTML, CSS, Bootstrap, JavaScript, and React.",
        icon: React.createElement(CgWorkAlt),
        date: "8 / 2022  -  4 / 2022",
    },
    {
        title: "ITI frontend trainee",
        location: "ITI Mansora branch",
        description:
        "Collaborated with a team to build a responsive store website using React, HTML5, CSS3, Bootstrap, and JavaScript.",
        icon: React.createElement(CgWorkAlt),
        date: "7 / 2023  -  9 / 2023",
    },
    {
        title: "Computer science graduation",
        location: "Kafr Elsheikh university",
        description:
        "Recent Computer Science graduate and highly motivated Front-End Developer with a strong focus on React development.",
        icon: React.createElement(LuGraduationCap),
        date: "2024",
    },
] as const;