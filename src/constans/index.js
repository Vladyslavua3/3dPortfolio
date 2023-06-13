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
    threejs, subfag, inctagram, todo,
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
        name: "Inctagram",
        description:
            "Web application that work as instagram, huge project with team",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "redux-toolkit",
                color: "green-text-gradient",
            },
            {
                name: "mui",
                color: "pink-text-gradient",
            },
            {
                name: "rtk-query",
                color: "green-text-gradient",
            },
        ],
        image: inctagram,
        source_code_link: "https://github.com/Tsukimono13/Inctagram",
    },
    {
        name: "ToDo Advanced",
        description:
            "Experience the power of an advanced Todo application built using React, Redux, and Redux Thunk. This feature-rich app offers seamless task management, leveraging Redux for efficient state handling and Redux Thunk for asynchronous actions. Connect to an external API to fetch and update Todo data, ensuring real-time synchronization. Create, edit, and delete tasks with ease, while marking them as complete or pending. Organize your tasks effortlessly using sorting, filtering, and search functionalities. ",
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
];

export {  technologies,  projects };