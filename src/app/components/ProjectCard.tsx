"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import Modal from "./Modal";
import { StaticImageData } from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  github?: string;
  website?: string;
  images: StaticImageData;
  tags: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  github,
  website,
  images,
  tags,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div
      className="
        group relative flex flex-col
        bg-white dark:bg-[#0f0f0f]
        border border-gray-100 dark:border-white/[0.06]
        rounded-2xl overflow-hidden
        shadow-sm hover:shadow-xl dark:hover:shadow-black/60
        transition-all duration-500 ease-out
        hover:-translate-y-1
      "
    >
      {/* Image Container */}
      <div
        className="relative overflow-hidden cursor-zoom-in"
        style={{ aspectRatio: "16/9" }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={images}
          alt={`${title} preview`}
          fill
          className={`
            object-cover
            transition-transform duration-700 ease-out
            ${imgHovered ? "scale-105" : "scale-100"}
          `}
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div
          className={`
            absolute inset-0 bg-black/40 backdrop-blur-[1px]
            flex items-center justify-center
            transition-opacity duration-300
            ${imgHovered ? "opacity-100" : "opacity-0"}
          `}
        >
          <span className="text-white text-sm font-medium tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full">
            Preview
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug tracking-tight">
            {title}
          </h2>

          {/* Action Links */}
          <div className="flex items-center gap-2 shrink-0 mt-0.5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-lg
                  text-gray-500 dark:text-gray-400
                  hover:text-gray-900 dark:hover:text-white
                  hover:bg-gray-100 dark:hover:bg-white/10
                  transition-all duration-200
                "
                aria-label="GitHub repository"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-lg
                  text-gray-500 dark:text-gray-400
                  hover:text-gray-900 dark:hover:text-white
                  hover:bg-gray-100 dark:hover:bg-white/10
                  transition-all duration-200
                "
                aria-label="Live website"
              >
                <CiShare1 className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-white/[0.06]" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="
                inline-flex items-center
                text-xs font-medium
                px-2.5 py-1 rounded-md
                bg-gray-100 dark:bg-white/[0.07]
                text-gray-600 dark:text-gray-300
                border border-gray-200/60 dark:border-white/[0.08]
                transition-colors duration-200
                hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200
                dark:hover:bg-blue-500/10 dark:hover:text-blue-400 dark:hover:border-blue-500/30
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={images}
      />
    </div>
  );
};

export default ProjectCard;