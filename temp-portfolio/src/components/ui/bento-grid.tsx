"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface BentoGridProps {
  images: { src: string; alt: string; title: string }[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Configuration spécifique pour chaque position dans la grille
  const getLayoutClass = (index: number) => {
    // Basé sur l'image que vous avez envoyée
    if (index === 0) return "col-span-2 row-span-2"; // Grande image en haut à gauche
    if (index === 1) return "col-span-1 row-span-2"; // Image à droite en haut
    if (index === 2) return "col-span-1 row-span-1"; // Image en bas à gauche
    if (index === 3) return "col-span-2 row-span-1"; // Image large en bas à droite

    // Pour les images supplémentaires
    return "col-span-1 row-span-1";
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 auto-rows-[250px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`${getLayoutClass(
              index
            )} relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
              <h3 className="text-white font-medium p-4 text-lg">
                {image.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal pour afficher l'image en plein écran */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center text-white bg-black/50 p-3 rounded-lg">
                <h3 className="text-xl font-semibold">
                  {images[selectedImage].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BentoGrid;
