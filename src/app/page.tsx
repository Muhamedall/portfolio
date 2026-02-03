'use client';

import { motion } from 'framer-motion';
import Picture from './mee.jpeg';
import Image from 'next/image';
import AboutPage from './about/page';
import ProjectsPage from './projects/page';
import EducationPage from './education/page';
import ExperiencePage from './experience/experience';
import ContactPage from './contact/page';


export default function Page() {
  
  return (
    <>
    
      <section id="home" className="min-h-[30vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Text Section - Order changes on mobile */}
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hi, I&apos;m <span className="text-blue-500">Mohamed Allaoui</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 leading-relaxed">
              A Full Stack Developer passionate about creating modern, responsive, and user-friendly web applications.
            </p>
            
            <p className="text-base sm:text-lg mb-8 leading-relaxed">
              I enjoy turning ideas into innovative solutions and delivering impactful digital experiences. Always eager to learn and grow, I strive to make a difference through technology.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/assets/Resume-Dev-Mr-Allaoui.pdf"
                className="inline-flex items-center bg-stone-600 hover:bg-stone-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                download
              >
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 flex justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
              <Image 
                src={Picture} 
                alt="Profile picture of Mohamed Allaoui" 
                layout="fill" 
                objectFit="cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="experiences" className="py-16 sm:py-20 md:py-24  dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ExperiencePage />
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsPage />
        </div>
      </section>

      <section id="education" className="py-16 sm:py-20 md:py-24  dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <EducationPage />
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AboutPage />
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 md:py-24  dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactPage />
        </div>
      </section>


      <script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Allaoui",
    "url": "https://www.mohamedallaoui.com",
    "image": "https://www.mohamedallaoui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.0e5df6d9.png&w=3840&q=75",
    "sameAs": [
      "https://github.com/Muhamedall",
      "https://www.linkedin.com/in/mohamed-allaoui-38813a248"
    ],
    "city":"Morocco Sale",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  })
}} />

    </>
  );
}





