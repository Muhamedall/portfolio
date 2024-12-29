import React from "react";
import Education from "../components/Education";
import CertificationsPage from "../certifications/page";

const EducationPage = () => {
  return (
    <main className="min-h-screen  dark:bg-gray-900 p-8">
      <h1 className="text-lg md:text-3xl font-bold  text-gray-900 dark:text-white mb-8">
        My Education
      </h1>
      <Education />
      <CertificationsPage/>
    </main>
  );
};

export default EducationPage;
