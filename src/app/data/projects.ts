import img1 from "../../../public/pictursProject1-StudentNest/Screenshot 2024-06-06 215406.png";
import img2 from "../../../public/pictursProject2-Maranime/marAnime.png";
import img3 from "../../../public/pictursProject3-BlogDiaa/Screenshot 2024-08-06 134355.png";
import img5 from "../../../public/pictureProject4-MedNostalgia/Screenshot 2025-08-04 225051.png";
import img6 from "../../../public/pictureProject5-Fotbalstate/Screenshot 2026-02-16 001751.png";
import img7 from "../../../public/pictureProject6-Quvio/Screenshot 2026-04-05 031649.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  github?: string;
  website?: string;
  images: StaticImageData;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Quvio — Invoice & Quote SaaS",
    description:
      "Full-stack invoicing SaaS (Angular / Laravel) with client management, quote creation, and Stripe payments.",
    github: "https://github.com/Muhamedall/Quvio",
    images: img7,
    tags: ["Laravel", "Angular", "n8n", "Stripe API"],
  },
  {
    id: 2,
    title: "MedNostalgia",
    description:
      "An advanced web app for scraping, organizing, and presenting nostalgic medical content using modern web technologies.",
    github: "https://github.com/Muhamedall/nostalgia-project",
    images: img5,
    tags: ["Python", "Next.js", "TypeScript", "Laravel", "TailwindCSS", "Shadcn UI"],
  },
  {
    id: 3,
    title: "Student Nest",
    description:
      "A student housing rental platform with secure payments, user profiles, and full-stack authentication.",
    github: "https://github.com/Muhamedall/studentnest-fullstack-projct",
    images: img1,
    tags: ["Laravel", "React", "TailwindCSS", "MySQL", "Redux"],
  },
  {
    id: 4,
    title: "Football Stats",
    description:
      "A performance analytics app for managing football players and visualizing statistics through an interactive dashboard.",
    github: "https://github.com/Muhamedall/football_stats",
    images: img6,
    tags: ["Python", "Flask", "JavaScript"],
  },
  {
    id: 5,
    title: "BlogDiaa",
    description:
      "A blogging platform for sharing posts with image uploads and embedded YouTube video support.",
    website: "https://blogdiaa.free.nf",
    images: img3,
    tags: ["HTML", "CSS", "TailwindCSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 6,
    title: "marAnime",
    description:
      "A platform for anime enthusiasts to browse, rate, and review anime series and movies.",
    github: "https://github.com/Muhamedall/Project-marAnimeM",
    images: img2,
    tags: ["React", "TailwindCSS", "Strapi API"],
  },
];