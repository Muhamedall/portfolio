// src/components/Modal.tsx
import React from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentImage: number;
  onNext: () => void;
  onPrev: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, images, currentImage, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative">
        <Image src={images[currentImage]} alt="Full View" className="rounded-xl" />
        <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white">◀</button>
        <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white">▶</button>
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">✕</button>
      </div>
    </div>
  );
};

export default Modal;


