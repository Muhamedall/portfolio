import React from "react";
import Experiences from "../components/Experiences";

const ExperiencePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left   mb-8">
       Experiences
      </h1>
      <Experiences />
    </div>
  );
};

export default ExperiencePage;
