import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    subfag,
    inctagram,
    todo,
    cryptoHub,
    carRent,
    cms,
    nextjs
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];



const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];



const projects = [
    {
        name: "CarRent",
        description:
            "Web application that allows users to choose and rent a car.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "rapid-api",
                color: "green-text-gradient",
            },
            {
                name: "server-side-rendering",
                color: "pink-text-gradient",
            },
        ],
        image: carRent,
        source_code_link: "https://rent-car-chi-gules.vercel.app/",
    },
    {
        name: "CMS",
        description:
            "Conceptualized and developed a comprehensive Content Management System (CMS), designed to provide a user-friendly platform for content creation and management.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "prisma",
                color: "green-text-gradient",
            },
            {
                name: "mySql",
                color: "blue-text-gradient",
            },
            {
                name: "shadcn",
                color: "pink-text-gradient",
            },
            {
                name: "clerk",
                color: "green-text-gradient",
            },
        ],
        image: cms,
        source_code_link: "https://github.com/Vladyslavua3/CMS-System",
    },
    {
        name: "Inctagram",
        description:
            "Web application that work as instagram, huge project with team",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "zustand",
                color: "green-text-gradient",
            },
            {
                name: "scss module",
                color: "pink-text-gradient",
            },
            {
                name: "reactQuery",
                color: "green-text-gradient",
            },
        ],
        image: inctagram,
        source_code_link: "https://github.com/MarikaKonturova/inctagram-v2",
    },
    {
        name: "ToDo Advanced",
        description:
            "Experience the power of an advanced Todo application built using React, Redux, and Redux Thunk. ",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },
            {
                name: "Restful Api",
                color: "blue-text-gradient",
            },
        ],
        image: todo,
        source_code_link: "https://github.com/Vladyslavua3/ToDoAdvanced",
    },
    {
        name: "SubFag",
        description:
            "Web-based platform that allows users to play online in GSGO, book, and provide users marketplace to exchange game items .",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "rtk-query",
                color: "green-text-gradient",
            },
            {
                name: "styled-components",
                color: "pink-text-gradient",
            },
        ],
        image: subfag,
        source_code_link: "https://github.com/",
    },
    {
        name: "CryptoHub",
        description:
            "Develop an application for accessing up-to-date information\n" +
            "about cryptocurrency",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "redux thunk",
                color: "pink-text-gradient",
            },
            {
                name: "chakra ui",
                color: "green-text-gradient",
            },
        ],
        image: cryptoHub,
        source_code_link: "https://github.com/Vladyslavua3/cryptoHub",
    },
];

export {  technologies,  projects };