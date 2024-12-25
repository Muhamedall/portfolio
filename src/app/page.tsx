'use client';

import { motion } from 'framer-motion';
import Picture from './pic.jpeg';
import Image from 'next/image';
import AboutPage from './about/page';
import ProjectsPage from './projects/page';

export default function Page() {
  return (
    <>
    <section id="home">
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6 sm:gap-[25%] mt-10 sm:mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text Section */}
        <motion.h1
          className="text-center text-xl sm:text-2xl font-medium max-w-3xl leading-relaxed sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Hi, I'm <span className="text-blue-500">Mohamed Allaoui</span>, a Full Stack Developer passionate about creating modern, responsive, and user-friendly web applications. I enjoy turning ideas into innovative solutions and delivering impactful digital experiences. Always eager to learn and grow, I strive to make a difference through technology.
          <div className="mt-4 hidden sm:block">
            <a
              href="/assets/Cv-Allaoui-developpeur.pdf"
              className="inline-flex items-center bg-stone-400 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              download
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Resume</span>
            </a>
          </div>
        </motion.h1>

        {/* Image Section */}
        <motion.div
          className="relative w-32 h-32 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
      
      <Image src={Picture} alt="Profile picture of Mohamed Allaoui" layout="fill" objectFit="cover" />

      
            
        </motion.div>
        <div className="mt-4 block sm:hidden">
            <a
              href="/assets/Cv-Allaoui-developpeur.pdf"
              className="inline-flex items-center bg-stone-400 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
              download
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Resume</span>
            </a>
          </div>
      </motion.div>
      </section>
      <section id="about" className="min-h-screen">
        <AboutPage />
      </section>
      <section id="projects" className="min-h-screen">
        <ProjectsPage />
      </section>
    </>
  );
}
