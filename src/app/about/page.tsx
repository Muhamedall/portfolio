"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaLaravel, FaGithub } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiBootstrap, SiTailwindcss,  SiMongodb, SiPhp, SiJquery, SiGit } from "react-icons/si";
import { DiScrum ,DiDatabase ,DiGoogleAnalytics  } from "react-icons/di";
import { BsPcDisplay } from "react-icons/bs";
export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Define a truncated text for mobile view
  const truncatedText = (
    <>
      I am a passionate <span className="font-bold">Full Stack Developer</span> with a deep love for creating modern...
    </>
  );
  const fullText = (
    <>
      I am a passionate <span className="font-bold">Full Stack Developer</span> with a deep love for creating modern, innovative, and user-focused web applications. With a strong foundation in both front-end and back-end technologies, I specialize in building responsive, scalable, and high-performance solutions that bring ideas to life.
      <br />
      <br />
      I thrive on solving complex problems, learning new technologies, and collaborating with teams to deliver impactful digital experiences. Whether it’s developing seamless user interfaces, optimizing server-side logic, or integrating APIs, I am committed to writing clean, efficient, and maintainable code.
      <br />
      <br />
      Beyond coding, I enjoy staying up-to-date with the latest industry trends and continuously enhancing my skills. My ultimate goal is to leverage technology to make a difference, create meaningful products, and contribute to the ever-evolving tech landscape.
    </>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen for changes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E44D26"  /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "ReactJs", icon: <FaReact color="#61DAFB" /> },
    { name: "NextJs", icon: <SiNextdotjs color="#000" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "NodeJs", icon: <FaNodeJs color="#339933" /> },
    { name: "Express", icon: <FaNodeJs color="#000" /> },
    { name: "MySQL", icon: <DiDatabase color="#00758F" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Php", icon: <SiPhp color="#777BB4" /> },
    { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
    { name: "Python", icon: <FaPython color="#306998" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#181717" /> },
    { name: "REST APIs", icon: <DiGoogleAnalytics color="#000" /> },
    { name: "Responsive Design", icon: <BsPcDisplay  color="wihte" /> },
    { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
    { name: "Scrum", icon: <DiScrum color="#61DAFB" /> },
  ];

  return (
    <section className="mt-[20%] px-2 py-2 ">
      <motion.h1
        className="text-xl md:text-5xl font-extrabold text-center mb-8 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      <div className="md:flex flex flex-col gap-6 md:flex-row md:gap-2">
        <motion.div
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 dark:bg-gray-700 dark:shadow-xl dark:text-gray-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.p
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {isMobile && !isExpanded ? truncatedText : fullText}
          </motion.p>
          {isMobile && (
            <button
              className="mt-4 text-blue-500 underline hover:text-blue-700"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show less" : "Read more..."}
            </button>
          )}
        </motion.div>
        <motion.div
          className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 dark:bg-gray-700 dark:shadow-xl dark:text-gray-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.h1
            className="text-xl md:text-xl  mb-8  dark:text-white "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Skills :
          </motion.h1>
          <div className="mt-10 grid grid-cols-1 md:flex md:flex-wrap gap-1 md:gap-4   ">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 bg-stone-500 px-4 py-2 text-sm md:text-xl font-bold text-white rounded dark:bg-gray-600">
                {skill.icon} <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
