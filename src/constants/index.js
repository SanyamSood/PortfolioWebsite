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
    tiet,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    lighthouse,
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
      title: "Data Structures and Algos",
      icon: web,
    },
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Artificial Intelligence",
      icon: backend,
    },
    {
      title: "Machine Learning",
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Graduation",
      company_name: "Thapar Institute of Engineering and Technology",
      icon: tiet,
      iconBg: "#383E56",
      date: "Sept 2020 - June 2024",
      points: [
        "Understanding various concepts of computer engineering including Data Structures and Algorithms, DBMS, Machine Learning and Operating Systems",
        "Learning programming languages like C, C++, HTML, CSS, JavaScript, Python",
        "Developing various minor projects involving multiple engineering concepts like ML, DBMS etc",
      ],
    },
   
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Duplicate Question Pairs",
      description:
        "Developed a robust Machine Learning solution to assess question similarity, utilizing a dataset of 400k question pairs from Quora. Conducted extensive data preprocessing and feature engineering, enabling effective application of advanced ML algorithms.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "host",
          color: "green-text-gradient",
        },
        {
          name: "Bag Of Words",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SanyamSood/Duplicate-Ques-Pairs",
    },
    {
      name: "Reverb",
      description:
        "Built on Solana Blockchain. Sign up with Phantom Wallet and pay just 0.1 SOL for full access. Enjoy uninterrupted music through Quicknode API and explore a diverse range of tracks stored on Cloudinary. You can also upload your own songs for a small gas fee.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Solana",
          color: "green-text-gradient",
        },
        {
          name: "Cloud",
          color: "pink-text-gradient",
        },
        {
          name: "Phantom Wallet",
          color: "grey-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Most Dominant Colour",
      description:
        "Developed a Python-based image analysis tool using K-Means Clustering. Implemented the algorithm to showcase the top five most occurring colors per image. Demonstrates strong data analysis and algorithmic skills for practical image processing solutions.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "K-means Clustering",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Lighthouse Animation",
      description:
        "Delve into a captivating world of light and motion with my OpenGL project. Toggle between day and night modes to witness a dynamic lighthouse scene by tranquil waters. Move the boat as you wish on the Waves that gently ripple. This project highlights my skills in graphics programming and interactive design, offering a captivating visual experience.        ",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "GLUT Library",
          color: "green-text-gradient",
        },
        {
          name: "Math",
          color: "pink-text-gradient",
        },
      ],
      image: lighthouse,
      source_code_link: "https://github.com/SanyamSood/Animation-Using-GLUT",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };