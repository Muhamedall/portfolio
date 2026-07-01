'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import About from './about/About';
import Project from './projects/Projects';
import Education from './components/Education';
import Experiences from './experiences/experiences';
import Contact from './contact/contact';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="max-w-3xl flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-lime-600 ring-offset-4 ring-offset-white dark:ring-offset-gray-950 shadow-lg">
              <Image
                src="/assets/pictures/profile-picture.png"
                alt="Mohamed Allaoui"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-lime-600">Mohamed Allaoui</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Full-Stack Developer specializing in Laravel, Angular, and React, with experience building web applications and SaaS platforms.

            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
              <a
                href="#projects"
                className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                See my work
              </a>

              <a
                href="/assets/RESUME-DEVELOPER-MR-ALLAOUI.pdf" 
                
                download
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCES */}
      <section
        id="experiences"
        className="py-16 sm:py-20 md:py-24 dark:bg-gray-900"
      >
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
      <section
        id="education"
        className="py-16 sm:py-20 md:py-24 dark:bg-gray-900"
      >
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
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </section>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Mohamed Allaoui',
            url: 'https://www.mohamedallaoui.com',
            image: 'https://www.mohamedallaoui.com/og-image.png',
            sameAs: [
              'https://github.com/Muhamedall',
              'https://www.linkedin.com/in/mohamed-allaoui',
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Rabat-Salé-Kénitra',
              addressCountry: 'MA',
            },
            jobTitle: 'Full Stack Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance',
            },
          }),
        }}
      />
    </>
  );
}