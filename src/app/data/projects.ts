import img1 from "../../../public/pictursProject1-StudentNest/Screenshot 2024-06-06 215406.png";

import img2 from "../../../public/pictursProject2-Maranime/marAnime.png";

import img3 from "../../../public/pictursProject3-BlogDiaa/Screenshot 2024-08-06 134355.png";
import img4 from '../../../public/pictursProject4-MyPortfolio/portfolio.png';
import img5 from '../../../public/pictureProject4-MedNostalgia/Screenshot 2025-08-04 225051.png'

export const projects = [
  {
     id: 1,
    title: "MedNostalgia",
    description: "An advanced web app for scraping, organizing, and presenting nostalgic medical content using modern web technologies.",
    github: "https://github.com/Muhamedall/nostalgia-project", 
    images: img5,
    tags: ["Python", "NextJs", "TypeScript", "Laravel", "TailwindCSS", "Shadcn UI"],
   
  },
  {
    
    id: 2,
    title: "My Portfolio",
    description: "A personal portfolio website showcasing Mohamed Allaoui's projects and skills.",
    website: "https://www.mohamedallaoui.com/",
    images: img4,
    tags: ["NextJs", "TypeScript", "TailwindCSS", "React", "NodeJs", "ExpressJs", "MySQL"],
    
  },
  { id: 3,
    title: "Student Nest",
    description: "Developed a student housing rental website with various features including secure payment and user profiles.",
    github: "https://github.com/Muhamedall/studentnest-fullstack-projct",
    images: img1,
    tags: ["HTML", "CSS", "TailwindCSS", "React", "Laravel", "MySQL", "PhpMyAdmin", "Redux"],
   
  },
  {
    id: 4,
    title: "marAnime",
    description: "A platform for anime enthusiasts to browse, rate, and review anime series and movies.",
    github: "https://github.com/Muhamedall/Project-marAnimeM",
    images: img2,
    tags: ["HTML", "CSS", "TailwindCSS", "React", "Strapi API"],
    
  },
  {
    id: 5,
    title: "BlogDiaa",
    description: "A blogging platform to share posts with features for image uploads and YouTube videos.",
    website: "https://blogdiaa.free.nf",
    images: img3,
    tags: ["HTML", "CSS", "TailwindCSS", "JavaScript", "PHP", "MySQL", "PhpMyAdmin"],
    
  },
  
];
