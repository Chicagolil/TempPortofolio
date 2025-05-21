"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Créer des positions aléatoires mais consistentes pour les particules
const generateParticles = (count: number) => {
  // Utiliser uniquement côté client
  if (typeof window === "undefined") {
    return Array(count)
      .fill(0)
      .map(() => ({ x: 0, y: 0 }));
  }

  // Générer des positions aléatoires mais consistentes
  return Array(count)
    .fill(0)
    .map(() => ({
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    }));
};

const WelcomeHero = () => {
  // Utiliser useState pour éviter que les particules soient générées pendant le SSR
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
    []
  );

  // Générer les particules uniquement côté client
  useEffect(() => {
    setParticles(generateParticles(20));
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
      {/* Particules de fond animées - uniquement rendues côté client */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
            }}
            animate={{
              y: [0, Math.floor(Math.random() * 10) - 5],
              x: [0, Math.floor(Math.random() * 10) - 5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.floor(Math.random() * 3),
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Partie texte */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bienvenue sur mon{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Portfolio
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bonjour, je suis Lilian Devroye, étudiant en informatique à
              l'EPHEC. Ce portfolio présente mes projets, compétences et
              activités valorisables réalisées durant mon parcours. Explorez mes
              différentes sections pour découvrir mon travail !
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#cv"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Voir mon CV
              </a>
              <a
                href="#activites"
                className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                Découvrir mes activités
              </a>
            </motion.div>
          </motion.div>

          {/* Image ou avatar */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-70 transform -rotate-6"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              {/* Remplacez par votre photo de profil */}
              <Image
                src="/images/pageAccueil/chillMorty.jpg"
                alt="Lilian Devroye"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          className="mt-16 flex justify-center gap-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.09.682-.217.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">GitHub</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400"
              >
                <path d="M11.58 22.1004H5.91a.91.91 0 0 1-.7-.3 1.2 1.2 0 0 1-.21-.81V3.92a1.17 1.17 0 0 1 .21-.8.91.91 0 0 1 .7-.32h5.67zm-.3-18.39H6.21V21h5.07zm7.61 0a.9.9 0 0 0-.31.13 1.76 1.76 0 0 0-.39.45L12.9 14.43l-1 1.85 5 5.1c.2.17.401.42.601.42h2.13c.17-.17.25-.3.17-.47l-5.9-6.07 5.3-9.7a.94.94 0 0 0 .2-.46c0-.17-.2-.3-.601-.47z" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">Next.js</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400"
              >
                <path d="M12 10.2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 7.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18.9 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 15.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.1 21.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-15.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm13.8-1-13.8 7.9m13.8 1L5.1 5.98" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">React</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400"
              >
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">HTML5</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400"
              >
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">CSS3</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeHero;
