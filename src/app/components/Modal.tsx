// Modal.tsx
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FiX } from "react-icons/fi";

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
          className="rounded-xl object-cover"
          width={800}
          height={600}
        />

        {/* Close Button */}
     <button
  onClick={onClose}
  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
             rounded-full bg-red-700 text-white
             hover:bg-red-200 hover:text-red-700
             transition duration-200 shadow-sm
             focus:outline-none focus:ring-2 focus:ring-red-400"
  aria-label="Close Modal"
>
  <FiX className="text-xl" />
</button>

      </div>
    </div>
  );
};

export default Modal;
