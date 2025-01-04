"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <section className="bg-stone-600 dark:bg-black text-white py-8 w-full ">
      <div className="px-4">
        <div className="flex flex-wrap justify-between items-start gap-10">
          {/* Get in Touch Section */}
          <div className="w-full sm:w-1/3 sm:ml-2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
              Get in Touch
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope className="sm:text-xl" />
                <a
                  href="mailto:mohamedallaoui425@gmail.com"
                  className="hover:text-yellow-400 transition sm:text-xl"
                >
                  mohamedallaoui425@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="sm:text-xl" />
                <a
                  href="tel:+212678504660"
                  className="hover:text-yellow-400 transition sm:text-xl"
                >
                  +212678504660
                </a>
              </p>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://github.com/Muhamedall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-3xl hover:text-yellow-400 transition"
                >
                  <FaGithub  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-allaoui-38813a248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-3xl hover:text-yellow-400 transition"
                >
                  <FaLinkedin  />
                </a>
              </div>
            </div>
          </div>
          {/* Quick Links Section */}
          <div className="w-full sm:w-1/6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="sm:text-xl hover:text-yellow-400 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="sm:text-xl hover:text-yellow-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="sm:text-xl hover:text-yellow-400 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="sm:text-xl hover:text-yellow-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm"> &copy; {currentYear} Mohamed Allaoui. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
