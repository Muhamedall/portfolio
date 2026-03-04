"use client";

import React, { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Logo1 from './logo-portfoli.png';
import Image from "next/image";
import { useTheme } from "next-themes";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: "Home",        href: "/",            section: "home" },
  { label: "About",       href: "/about",        section: "about" },
  { label: "Experiences", href: "/experiences",  section: "experiences" },
  { label: "Projects",    href: "/projects",     section: "projects" },
  { label: "Education",   href: "/education",    section: "education" },
  { label: "Contact",     href: "/contact",      section: "contact" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      // On homepage: smooth scroll to section instantly
      const el = document.getElementById(link.section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages: navigate to that page
      router.push(link.href);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-600 dark:bg-black shadow-md">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={Logo1}
                alt="Mohamed Allaoui Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-white hover:bg-stone-400 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Theme Toggle + Hamburger */}
            <div className="flex items-center gap-3">
              <button onClick={() => setTheme("light")} aria-label="Switch to light mode">
                <MdLightMode className="text-amber-300 text-xl sm:text-2xl hidden dark:block" />
              </button>
              <button onClick={() => setTheme("dark")} aria-label="Switch to dark mode">
                <MdNightlight className="text-white text-xl sm:text-2xl dark:hidden" />
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white hover:text-gray-300 ml-1"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-stone-500 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="block text-white hover:bg-stone-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Offset content below fixed navbar */}
      <main className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </section>
  );
}