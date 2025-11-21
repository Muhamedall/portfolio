'use client';

import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaLaravel, FaGithub , FaVuejs, FaAngular ,FaJava
} from "react-icons/fa";

import {
  SiTypescript, SiNextdotjs, SiBootstrap, SiTailwindcss,
  SiMongodb, SiPhp, SiJquery, SiGit, SiExpress ,SiDocker,
} from "react-icons/si";
import { DiDatabase, DiScrum } from "react-icons/di";
import { BsPcDisplay } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function About() {
  const briefText = `I am a passionate Full Stack Developer with expertise in designing and building efficient, 
  user-friendly, and innovative web applications. My experience includes working with various 
  modern technologies to deliver top-notch solutions for clients.`;

  const skills = [
    {id:1, name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
    {id:2, name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    {id:3, name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    {id:4, name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    {id:5, name: "React", icon: <FaReact color="#61DAFB" /> },
    {id:6, name: "Next.js", icon: <SiNextdotjs color="#000" /> },
    {id:7, name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    {id:8, name: "Express.js", icon: <SiExpress color="#000" /> },
    {id:9, name: "Vue.js", icon: <FaVuejs color="#42b883" /> },
    {id:10, name: "Angular", icon: <FaAngular color="#dd1b16" /> },
    {id:11, name: "Python", icon: <FaPython color="#306998" /> },
    {id:12, name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
    {id:13, name: "MySQL", icon: <DiDatabase color="#00758F" /> },
    {id:14, name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    {id:15, name: "PHP", icon: <SiPhp color="#777BB4" /> },
    {id:16, name: "Git", icon: <SiGit color="#F05032" /> },
    {id:17, name: "GitHub", icon: <FaGithub color="#181717" /> },
    {id:18, name: "jQuery", icon: <SiJquery color="#0769AD" /> },
    {id:19, name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
    {id:20, name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    {id:21, name: "Responsive Design", icon: <BsPcDisplay /> },
    {id:22, name: "Scrum", icon: <DiScrum color="#61DAFB" /> },
    {id:23, name: "Docker", icon: <SiDocker color="#2496ED" /> },
    {id:24, name: "Java", icon: <FaJava color="#007396" /> },
  ];

  const languages = [
    {id:1, name: "Arabic", stars: 4 },
    {id:2, name: "French", stars: 3 },
    {id:3, name: "English", stars: 2 },
  ];

  return (
    <section className="px-6 py-12">
      <motion.h1
        className="text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg text-center sm:text-left leading-relaxed text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {briefText}
      </motion.p>

      {/* Skills Section */}
      <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-3xl" aria-label={skill.name}>{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Language Section */}
      <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Language Proficiency</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language) => (
            <motion.div
              key={language.id}
              className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="text-lg font-medium">{language.name}</span>
              <div className="flex" aria-label={`${language.name} proficiency`}>
                {Array.from({ length: language.stars }).map((_, idx) => (
                  <AiFillStar key={idx} color="#FFD700" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* JSON-LD Structured Data for Skills */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mohamed Allaoui",
          "url": "https://www.mohamedallaoui.com",
          "jobTitle": "Full Stack Developer",
          "skills": skills.map(skill => skill.name),
          "knowsLanguage": languages.map(lang => lang.name)
        })
      }} />
    </section>
  );
}
