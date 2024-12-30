import React from "react";
import CertificationsCarousel from "./CertificationsCarousel";

const CertificationsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-lg text-center sm:text-left  md:text-xl  font-bold  text-gray-900 dark:text-white mb-8">
          Certifications
        </h1>
        <p className=" text-center sm:text-left text-gray-700 dark:text-gray-300 mb-10">
          Here is a list of certifications I&apos;ve achieved, showcasing my expertise and dedication to learning.
        </p>
        <CertificationsCarousel />
      </section>
    </main>
  );
};

export default CertificationsPage;
