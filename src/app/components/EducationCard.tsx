import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, period, description }) => {
  return (
    <div className="dark:bg-black  shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <FaGraduationCap className="text-2xl text-blue-500 dark:text-yellow-400 mr-3" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{institution}</h3>
      </div>
      <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
        <AiOutlineCalendar className="mr-2 text-xl" />
        <p className="text-sm">{period}</p>
      </div>
      <p className="text-gray-800 dark:text-gray-300 font-medium">{degree}</p>
      {description && <p className="mt-3 text-gray-600 dark:text-gray-400">{description}</p>}
    </div>
  );
};

export default EducationCard;
