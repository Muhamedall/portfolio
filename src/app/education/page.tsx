import React from "react";
import type { Metadata } from "next";
import Education from "../components/Education";
import Certifications from "../certifications/Certifications";
export const metadata : Metadata = {
  title: "Education",
    description: "Mohamed Allaoui's academic background — degrees, certifications, and training in software engineering and web development.",
  alternates: { canonical: "https://www.mohamedallaoui.com/education" },
};
const EducationPage = () => {
  return (
    <main className="  dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left   mb-8">
        Education
      </h1>
      <Education />
      <Certifications/>
    </main>
  );
};

export default EducationPage;
