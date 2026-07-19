'use client';

import { motion } from "framer-motion";
import {
  FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaLaravel, FaGithub, FaVuejs, FaAngular, FaJava
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiBootstrap, SiTailwindcss,
  SiMongodb, SiPhp,  SiGit, SiExpress, SiDocker, SiN8N,
   SiSymfony, SiOpenai, SiPostgresql, SiSonarqube,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { AiFillStar } from "react-icons/ai";
import { GrOracle } from "react-icons/gr";


const skillCategories = [
  {
    id: "frontend",
    label: "Front-End",
    color: "#61DAFB",
    bg: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/30",
    dot: "bg-cyan-400",
    skills: [
      { id: 1, name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
      { id: 2, name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
      { id: 3, name: "React", icon: <FaReact color="#61DAFB" /> },
      { id: 4, name: "Next.js", icon: <SiNextdotjs color="#e5e5e5" /> },
      { id: 5, name: "Vue.js", icon: <FaVuejs color="#42b883" /> },
      { id: 6, name: "Angular", icon: <FaAngular color="#dd1b16" /> },
      { id: 7, name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
      { id: 8, name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    color: "#6DB33F",
    bg: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/30",
    dot: "bg-green-400",
    skills: [
      { id: 1, name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
      { id: 2, name: "PHP", icon: <SiPhp color="#777BB4" /> },
      { id: 3, name: "Symfony", icon: <SiSymfony color="#e5e5e5" /> },
      { id: 4, name: "Java", icon: <FaJava color="#007396" /> },
      { id: 5, name: "Python", icon: <FaPython color="#306998" /> },
      { id: 6, name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { id: 7, name: "Express.js", icon: <SiExpress color="#e5e5e5" /> },
    ],
  },
  {
    id: "database",
    label: "Database",
    color: "#00758F",
    bg: "from-sky-500/10 to-indigo-500/10",
    border: "border-sky-500/30",
    dot: "bg-sky-400",
    skills: [
      { id: 1, name: "MySQL", icon: <DiDatabase color="#00758F" /> },
      { id: 2, name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { id: 3, name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { id: 4, name: "Oracle", icon: <GrOracle color="#F80000" /> },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    color: "#2496ED",
    bg: "from-blue-500/10 to-violet-500/10",
    border: "border-blue-500/30",
    dot: "bg-blue-400",
    skills: [
      { id: 1, name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { id: 2, name: "SonarQube", icon: <SiSonarqube color="#4E9BCD" /> },

      { id: 3, name: "Git", icon: <SiGit color="#F05032" /> },
      { id: 4, name: "GitHub", icon: <FaGithub color="#e5e5e5" /> },
    ],
  },
  {
    id: "other",
    label: "AI & Automation",
    color: "#EA4B71",
    bg: "from-pink-500/10 to-purple-500/10",
    border: "border-pink-500/30",
    dot: "bg-pink-400",
    skills: [
      { id: 1, name: "n8n", icon: <SiN8N color="#EA4B71" /> },
      { id: 2, name: "AI Tools", icon: <SiOpenai color="#9B72CF" /> },
    ],
  },
];

const languages = [
  { id: 1, name: "Arabic", stars: 4, level: "Native" },
  { id: 2, name: "French", stars: 3, level: "Professional" },
  { id: 3, name: "English", stars: 2, level: "Intermediate" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function About() {
  const briefText = `Full-Stack Developer specializing in Laravel, Angular, and React, with hands-on experience building and maintaining production
web applications, designing secure RESTful APIs, integrating payment solutions, and implementing AI-powered features.`;

  return (
    <section className="px-4 sm:px-6 py-10 sm:py-12 max-w-6xl mx-auto w-full">
      {/* Header */}
      <motion.h1
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg text-center sm:text-left leading-relaxed text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {briefText}
      </motion.p>

      {/* Skills Section */}
      <motion.div
        className="mt-10 sm:mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
          Skills & Technologies
        </h2>

        <motion.div
          className="flex flex-col gap-5 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className={`rounded-2xl border bg-gradient-to-br ${category.bg} ${category.border} p-4 sm:p-6 shadow-sm`}
            >
              {/* Category Label */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${category.dot} shadow-sm`} />
                <h3
                  className="text-sm sm:text-base font-semibold tracking-wide uppercase"
                  style={{ color: category.color, letterSpacing: "0.08em" }}
                >
                  {category.label}
                </h3>
               
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    className="flex items-center gap-2 bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/60 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-sm backdrop-blur-sm cursor-default min-w-0"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="text-lg sm:text-xl leading-none shrink-0">{skill.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Language Section */}
      <motion.div
        className="mt-10 sm:mt-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6">
          Language Proficiency
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {languages.map((language) => (
            <motion.div
              key={language.id}
              className="flex flex-col gap-2 bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/50 rounded-2xl px-4 sm:px-5 py-4 shadow-sm backdrop-blur-sm"
              whileHover={{ scale: 1.03, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">
                  {language.name}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {language.level}
                </span>
              </div>
              <div className="flex gap-1" aria-label={`${language.name} proficiency`}>
                {Array.from({ length: 4 }).map((_, idx) => (
                  <AiFillStar
                    key={idx}
                    size={18}
                    color={idx < language.stars ? "#FBBF24" : "#D1D5DB"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mohamed Allaoui",
            url: "https://www.mohamedallaoui.com",
            jobTitle: "Full Stack Developer",
            skills: skillCategories.flatMap((c) => c.skills.map((s) => s.name)),
            knowsLanguage: languages.map((l) => l.name),
          }),
        }}
      />
    </section>
  );
}