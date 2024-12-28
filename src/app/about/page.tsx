"use client";

import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaLaravel, FaGithub
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiBootstrap, SiTailwindcss,
  SiMongodb, SiPhp, SiJquery, SiGit
} from "react-icons/si";
import { DiDatabase, DiScrum } from "react-icons/di";
import { BsPcDisplay } from "react-icons/bs";

export default function About() {
  const briefText = `I am a passionate Full Stack Developer with expertise in designing and building efficient, 
  user-friendly, and innovative web applications. My experience includes working with various 
  modern technologies to deliver top-notch solutions for clients.`;

  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
    { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
    { name: "MySQL", icon: <DiDatabase color="#00758F" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "PHP", icon: <SiPhp color="#777BB4" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#181717" /> },
    { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Responsive Design", icon: <BsPcDisplay /> },
    { name: "Scrum", icon: <DiScrum color="#61DAFB" /> },
  ];

  return (
    <section className="px-6 py-12">
      <motion.h1
        className="text-3xl font-extrabold mb-6 text-center dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <motion.p
        className="max-w-3xl mx-auto text-lg text-center leading-relaxed text-gray-700 dark:text-gray-300"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {briefText}
      </motion.p>
      <motion.div
        className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="text-3xl">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
