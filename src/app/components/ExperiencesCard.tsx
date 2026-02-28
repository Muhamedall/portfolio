import React, { useState } from "react";
import Image from "next/image";
import { FaTasks } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { StaticImageData } from "next/image";

interface ExperiencesCardProps {
  institution: string;
  typeContrat: string;
  period: string;
  taches: string;
  chalenges: string;
  tecnologies: string[];
  image: StaticImageData;
  screenshots: StaticImageData[];
}

const ExperiencesCard: React.FC<ExperiencesCardProps> = ({
  institution,
  typeContrat,
  period,
  taches,
  chalenges,
  tecnologies,
  image,
  screenshots,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="dark:bg-black bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row md:items-start">
        
        {/* Left Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-4 mb-4">
            <Image
              src={image}
              alt={`${institution} logo`}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{institution}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">{typeContrat}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{period}</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-300 flex items-center">
              <FaTasks className="mr-2 text-blue-500 dark:text-yellow-400" /> Tasks
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{taches}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-300 flex items-center">
              <AiFillStar className="mr-2 text-green-500 dark:text-yellow-400" /> Challenges
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{chalenges}</p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-300">Technologies</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
              {tecnologies.map((tech, index) => (
                <li
                  key={index}
                  className="bg-blue-200 text-blue-800 text-sm py-1 px-2 sm:px-3 rounded-lg"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Full Image + Overlay Arrows */}
        {screenshots.length > 0 && (
          <div className="md:ml-6 md:w-1/3 mt-4 md:mt-0 flex flex-col items-center gap-2">

            {/* Image container with overlay buttons */}
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden">
              <Image
                src={screenshots[currentIndex]}
                alt={`${institution} Screenshot ${currentIndex + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />

              {/* Left Arrow - overlaid on image */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-1.5 transition-colors duration-200"
              >
                <MdArrowBackIos size={20} />
              </button>

              {/* Right Arrow - overlaid on image */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-1.5 transition-colors duration-200"
              >
                <MdArrowForwardIos size={20} />
              </button>

              {/* Counter badge - bottom center */}
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                {currentIndex + 1} / {screenshots.length}
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default ExperiencesCard;