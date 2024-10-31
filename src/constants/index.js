import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    java,
    aws,
    express,
    postman,
    rentkar,
    skill,
    pennytrackerImage,
    bAndB,
    image,
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

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "DevOps Developer",
        icon: creator,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
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
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "AWS",
        icon: aws
    },
    {
        name: "Express",
        icon: express
    },
    {
        name: "Postman",
        icon: postman
    },
    {
        name: "Java",
        icon: java
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "The Skill Guru Foundation",
        icon: skill,
        iconBg: "#383E56",
        date: "Aug 2024 - Sept 2024",
        points: [
            "Developed a platform connecting students and mentors for real-time query resolution.",
            "Enabled students to ask questions and receive solutions from mentors.",
            "Integrated voice and video calling for direct communication.",
            "Collaborated with teams to enhance user experience."
        ],
    },    
    {
        title: "Full Stack Developer",
        company_name: "Rentkar - Switch To Share",
        icon: rentkar,
        iconBg: "#E6DEDD",
        date: "Sept 2024 - Present",
        points: [
            "Maintaining a web app for renting products like PS5s and laptops.",
            "Streamlined the rental process for a better user experience.",
            "Worked with cross-functional teams to improve functionality and design.",
            "Engaged in code reviews to uphold code quality."
        ],
    },    
];


const projects = [
    {
        name: "PennyTracker",
        description:
            "An automatic finance tracker that allows users to track their spending by scraping messages, providing insights into their financial habits and helping them manage their budgets effectively.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: pennytrackerImage,
        source_code_link: "https://github.com/Pavan-0228/FinanceTracker",
        project_link: "https://www.pennytracker.tech",
    },    
    {
        name: "BrowseAndBuy",
        description:
            "A web application that allows seniors to list their previous year books and materials for juniors to purchase. It also features real-time chatting to facilitate communication between buyers and sellers.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: bAndB,
        source_code_link: "https://github.com/Pavan-0228/BrowseAndBuy",
        project_link: "https://browsenbuy.vercel.app/"
    },    
    {
        name: "Image Search",
        description:
            "An intuitive platform empowering users to quickly and effortlessly discover any image they need, featuring advanced search algorithms and a streamlined, user-friendly interface for easy visual discovery.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: image,
        source_code_link: "https://github.com/Pavan-0228/Image-Search",
        project_link: "https://pavan-0228.github.io/Image-Search",
    },
];

export { services, technologies, experiences, projects };
