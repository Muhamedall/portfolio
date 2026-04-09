"use client";

import React, { useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: StaticImageData;
  alt?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, alt = "Project preview" }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal content */}
      <div
        className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="
            absolute top-3 right-3
            w-9 h-9 flex items-center justify-center
            rounded-full
            bg-black/60 text-white
            hover:bg-white hover:text-gray-900
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-white/50
            shadow-lg
          "
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Modal;