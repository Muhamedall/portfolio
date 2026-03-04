"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

const quickLinks = [
  { label: "Home",        section: "home",        href: "/" },
  { label: "About",       section: "about",       href: "/about" },
  { label: "Experiences", section: "experiences", href: "/experiences" },
  { label: "Projects",    section: "projects",    href: "/projects" },
  { label: "Education",   section: "education",   href: "/education" },
  { label: "Contact",     section: "contact",     href: "/contact" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (link: typeof quickLinks[0]) => {
    if (pathname === "/") {
      const el = document.getElementById(link.section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(link.href);
    }
  };

  return (
    <footer
      className="bg-stone-600 dark:bg-black text-white py-8 w-full"
      aria-label="Footer of Mohamed Allaoui portfolio website"
    >
      <div className="px-4">
        <div className="flex flex-wrap justify-between items-start gap-10">

          {/* Get in Touch */}
          <div className="w-full sm:w-1/3 sm:ml-2">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
              Get in Touch
            </h2>
            <address className="not-italic space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope className="sm:text-xl" />
                <a href="mailto:mohamedallaoui425@gmail.com" className="hover:text-yellow-400 transition sm:text-xl">
                  mohamedallaoui425@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="sm:text-xl" />
                <a href="tel:+212678504660" className="hover:text-yellow-400 transition sm:text-xl">
                  +212 678 504 660
                </a>
              </p>
               <p className="flex items-center gap-2">
                 <FaGithub className="sm:text-xl" />

                 <a href="https://github.com/Muhamedall" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Allaoui GitHub" className="  sm:text-xl hover:text-yellow-400 transition">
                 Github
                </a>
              </p>
               <p className="flex items-center gap-2">
               <FaLinkedin className="sm:text-xl"  />
                 <a href="https://www.linkedin.com/in/mohamed-allaoui" target="_blank" rel="noopener noreferrer" aria-label="Mohamed Allaoui LinkedIn" className=" sm:text-xl hover:text-yellow-400 transition">
                Linkedin
                </a>
              </p>
              
            </address>
          </div>

          {/* Quick Links */}
          <nav className="w-full sm:w-1/6" aria-label="Footer Quick Links">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => handleScroll(link)}
                    className="sm:text-xl hover:text-yellow-400 transition text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; {currentYear} Mohamed Allaoui. All Rights Reserved.</p>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mohamed Allaoui",
            "url": "https://www.mohamedallaoui.com",
            "email": "mailto:mohamedallaoui425@gmail.com",
            "telephone": "+212678504660",
            "sameAs": ["https://github.com/Muhamedall", "https://www.linkedin.com/in/mohamed-allaoui"],
            "jobTitle": "Full Stack Developer",
            "address": { "@type": "PostalAddress", "addressLocality": "Salé", "addressCountry": "MA" }
          })
        }} />
      </div>
    </footer>
  );
};

export default Footer;