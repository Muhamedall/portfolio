"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import Modal from "./Modal";
import { StaticImageData } from "next/image";
import { CiShare1 } from "react-icons/ci";
interface ProjectProps {
  title: string;
  description: string;
  github?: string;
  website?: string;
  images: StaticImageData; // Single image now
  tags: string[]; // Added the tags property
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, github, website, images, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-black dark:hover:shadow-white w-full sm:w-[30rem] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
      <div className="flex flex-col space-y-4">
        <div>
        <div className="flex flex-row justify-between items-center">
  <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
  <div className="ml-auto">
    {website && (
      <a href={website} target="_blank" rel="noopener noreferrer">
        <CiShare1 className="text-2xl hover:text-gray-500" />
      </a>
    )}
    <div className="flex space-x-4 text-gray-800 dark:text-white">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-500" />
            </a>
          )}
        
        </div>
  </div>
</div>

          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        

        {/* Tags Section */}
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 text-sm py-1 px-2 sm:px-3 rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        <div className="relative">
         
       <Image
       src={images}
       alt="Project Image"
       layout="responsive"
       width={550}
       height={400}
       className="rounded-lg mt-4"
       onClick={() => setIsModalOpen(true)}
       loading="lazy"
     />
     
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={images} // Pass single image
      />
    </div>
  );
};

export default ProjectCard;
