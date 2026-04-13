'use client';

import { motion } from 'framer-motion';
import About from './about/About';
import Project from './projects/Projects';   
import Education from './components/Education'; 
import Experiences from './experiences/experiences';
import Contact from './contact/contact';

export default function Page() {
  return (
    <>
      {/* HERO SECTION (TEXT ONLY) */}
      <section
        id="home"
        className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="text-lime-600">Mohamed Allaoui</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Full-Stack Developer with 2+ years building SaaS, logistics, and
            e-commerce platforms using Laravel, React, and Angular.
            Passionate about creating scalable and impactful digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              See my work
            </a>

            <a
              href="/assets/RESUME-DEV-ALLAOUI.pdf"
              download
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="py-16 sm:py-20 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Experiences />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Project />
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16 sm:py-20 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Education />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </section>

      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohamed Allaoui",
            "url": "https://www.mohamedallaoui.com",
            "image": "https://www.mohamedallaoui.com/og-image.png",
            "sameAs": [
              "https://github.com/Muhamedall",
              "https://www.linkedin.com/in/mohamed-allaoui"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rabat-Salé-Kenitra",
              "addressCountry": "MA"
            },
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          })
        }}
      />
    </>
  );
}