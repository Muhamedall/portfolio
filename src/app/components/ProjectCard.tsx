"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb"; // Import the website icon
import Modal from "./Modal";

import { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  github?: string; // Make this optional
  website?: string; // Add a new property for the website
  images: StaticImageData[]; // Change type to StaticImageData[]
  style?: React.CSSProperties; 
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, github, website, images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <CardContainer className="perspective-class">

      <CardBody className="bg-gray-50 dark:bg-black w-auto sm:w-[40rem] p-6 rounded-xl">
        <div className="flex justify-between">
          <div>
            <CardItem className="text-xl font-bold">{title}</CardItem>
            <CardItem as="p" className="text-sm mt-2">{description}</CardItem>
          </div>
          <div className="flex space-x-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl" />
              </a>
            )}
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <TbWorld className="text-2xl" />
              </a>
            )}
          </div>
        </div>
        <CardItem className="relative mt-4">
          <Image
            src={images[currentImage]}
            alt="Project Image"
            className="rounded-xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
          <button onClick={handlePrev} className="absolute left-4">◀</button>
          <button onClick={handleNext} className="absolute right-4">▶</button>
        </CardItem>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={images.map((image) => image.src)} 
          currentImage={currentImage}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
