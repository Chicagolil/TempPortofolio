"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BentoGridProps {
  images: { src: string; alt: string; title: string }[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ images }) => {
  // Définir une taille prédéterminée pour chaque image dans la grille
  const getSpan = (index: number) => {
    // Varier les tailles pour créer un effet bento
    const patterns = [
      "col-span-1 row-span-1", // petit
      "col-span-2 row-span-1", // large
      "col-span-1 row-span-2", // tall
      "col-span-2 row-span-2", // grand
    ];

    // Utiliser modulo pour créer un pattern répétitif mais intéressant
    return patterns[index % patterns.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`${getSpan(
            index
          )} relative group overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <h3 className="text-white font-medium p-6 text-xl">
              {image.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
