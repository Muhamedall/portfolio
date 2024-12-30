"use client";

import React, { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-stone-600 ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div>
              <Link href="/" className="text-white font-bold text-lg">
                MyLogo
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-stone-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white hover:bg-stone-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </Link>
              <Link
                href="#experiences"
                className="text-white hover:bg-stone-400 px-3 py-2 rounded-md text-lg font-medium"
              >
               Experiences
              </Link>
              <Link
                href="#projects"
                className="text-white hover:bg-stone-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                Projects
              </Link>
  


              <Link
                href="#education"
                className="text-white hover:bg-stone-400 px-3 py-2 rounded-md text-lg font-medium"
              >
                Education
              </Link>
              <Link
                href="#contact"
                className="text-white hover:bg-stone-400 px-3 py-2 rounded-md text-lg font-medium"
              >
               
                Contact
              </Link>

            </div>

            {/* Theme Toggle and Language Button */}
            <div className=" ml-[60%] mb-2 sm:ml-0 sm:mb-0 ">
              <div className="mt-2">
              <button onClick={() => setTheme("light")}>
                <MdLightMode className="text-amber-300 text-xl sm:text-2xl hidden dark:block" />
              </button>
              <button onClick={() => setTheme("dark")}>
                <MdNightlight className="text-white text-xl sm:text-2xl dark:hidden" />
              </button>
              </div>
              
            
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "About", "Experiences" , "Projects","Education", "Contact"].map((menu) => (
                <Link
                  key={menu}
                  href={`#${menu.toLowerCase()}`}
                  className="block text-white hover:bg-stone-400 px-3 py-2 rounded-md text-base font-medium"
                >
                  {menu}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </section>
  );
}
