import img1 from "../../../public/pictursProject1-StudentNest/Screenshot 2024-06-06 215406.png";

import img2 from "../../../public/pictursProject2-Maranime/Capture d'écran 2024-02-15 214457.png";

import img3 from "../../../public/pictursProject3-BlogDiaa/Screenshot 2024-08-06 134355.png";
import img4 from '../../../public/pictursProject4-MyPortfolio/Screenshot 2025-01-05 164719.png';

export const projects = [
  {
    title: "My Portfolio",
    description: "A personal portfolio website showcasing Mohamed Allaoui's projects and skills.",
    website: "https://portfolio-mohamedallaoui.vercel.app/",
    images: img4,
    tags: ["NextJs", "TypeScript", "TailwindCSS", "React", "NodeJs", "ExpressJs", "MySQL"],
    key: 1,
  },
  {
    title: "Student Nest",
    description: "Developed a student housing rental website with various features including secure payment and user profiles.",
    github: "https://github.com/Muhamedall/Project-fin-etude",
    images: img1,
    tags: ["HTML", "CSS", "TailwindCSS", "React", "Laravel", "MySQL", "PhpMyAdmin", "Redux"],
    key: 2,
  },
  {
    title: "marAnime",
    description: "A platform for anime enthusiasts to browse, rate, and review anime series and movies.",
    github: "https://github.com/Muhamedall/Project-marAnimeM",
    images: img2,
    tags: ["HTML", "CSS", "TailwindCSS", "React", "Strapi API"],
    key: 3,
  },
  {
    title: "BlogDiaa",
    description: "A blogging platform to share posts with features for image uploads and YouTube videos.",
    website: "https://blogdiaa.free.nf/?i=1",
    images: img3,
    tags: ["HTML", "CSS", "TailwindCSS", "JavaScript", "PHP", "MySQL", "PhpMyAdmin"],
    key: 4,
  },
];
