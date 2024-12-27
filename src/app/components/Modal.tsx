import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: StaticImageData;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative">
        {/* Image Display */}
        <Image
          src={image}
          alt="Project Image"
          className="rounded-xl"
          width={800}
          height={600}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
          aria-label="Close Modal"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
