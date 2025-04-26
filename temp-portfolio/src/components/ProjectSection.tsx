"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "forces", label: "Points Forts" },
    { id: "ameliorations", label: "Axes d'Amélioration" },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Données du projet
  const projectData = {
    title: "Mon Projet Professionnel",
    description:
      "Je souhaite me spécialiser dans le développement d'applications web moderne, en particulier dans la création d'interfaces utilisateur réactives et accessibles. Mon objectif est d'intégrer une entreprise innovante où je pourrai continuer à développer mes compétences en React, Next.js et TypeScript, tout en explorant les nouvelles tendances du développement web.",
    image: "/images/placeholder.jpg",
    pointsForts: [
      "Maîtrise des frameworks React et Next.js",
      "Bonne compréhension des principes d'accessibilité web",
      "Capacité à créer des interfaces utilisateur modernes et réactives",
      "Solide connaissance de Git et du workflow de développement collaboratif",
    ],
    axesAmelioration: [
      "Approfondir mes connaissances en backend (Node.js, API RESTful)",
      "Développer mes compétences en tests automatisés",
      "Améliorer ma maîtrise des concepts avancés de TypeScript",
    ],
  };

  return (
    <section
      id="projet"
      className="py-16 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mon{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Projet Professionnel
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes objectifs professionnels, mes forces et mes axes
            d'amélioration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Image du projet */}
          <motion.div
            className="md:col-span-5 relative h-64 md:h-auto overflow-hidden rounded-xl shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={projectData.image}
              alt="Projet professionnel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projectData.title}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Contenu du projet */}
          <motion.div
            className="md:col-span-7 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-4 text-sm md:text-base font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
                      layoutId="tabIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="p-6">
              {activeTab === "description" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  <p>{projectData.description}</p>
                </motion.div>
              )}

              {activeTab === "forces" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-3">
                    {projectData.pointsForts.map((force, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="mt-1 text-green-500 dark:text-green-400 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {force}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === "ameliorations" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-3">
                    {projectData.axesAmelioration.map((axe, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="mt-1 text-blue-500 dark:text-blue-400 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {axe}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
