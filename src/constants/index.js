import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Front-End Developer",
    icon: creator,
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
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "APPWRITEBLOG APPLICATION WITH APPWRITE",
    icon: starbucks,
    iconBg: "",
    date: "JULY-2024 - AUG-2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implemented user authentication and authorization using Appwrite,ensuring secure access to application.",
      "Utilized redux for state management to ensure consistent and predictable application state.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Production Grade Application",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Developing and maintaining an production level app  using React.js and Back-End Technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in controllers,Route,Models and providing constructive Backend.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Netfilx Clone",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developing and maintaining web applications using Html,css,js.",
      "Integrate a video streaming and playback sysyem that can handle high quality videos.",
      "The goal of building Netflix clone is to create a similar user experience.",
      "Developing a search engine that allow user to search for content using keywords.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Next js-Auth ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Design an authentication flow that includes user register,login,logout,signup.",
      "Create User Model and database schema to store a data,including username,email,password.",
      "Create API routes for authentication including request.",
      "Integrate role based access control and middleware .",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful.",
    name: "Ansh Gupta ",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients'",
    name: "Aman verma"
  },
  {
    testimonial:
      "After optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Siddrath Suresh Singh",
  },
];

const projects = [
  {
    name: "web-wallet using Nextjs",
    description:
      "Web-based platform create a Wallet-Provider.js ,wrap the app with wallet provider Use the wallet Adapter in a page `usewallet` hook to get tha wallet apdater.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Web3.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Currency convertor",
    description:
      "Web application that enables  front-end React, ensuring responsive design that work seamlessly across desktops, tablets, Ensuring real-time exchange rate fetching using an external API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/satyam9936/Currency-Convertor",
  },
  {
    name: "ReduxToolkitTodo",
    description:
      "Created a scalable and maintainable state management system using Redux Toolkit's created CRUD(create,read,update,delete).",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "React-redux",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/satyam9936/TodocontextLocal",
  },
];

export { services, technologies, experiences, testimonials, projects };
