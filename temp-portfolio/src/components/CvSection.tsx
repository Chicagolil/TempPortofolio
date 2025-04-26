"use client";

import React from "react";
import { motion } from "framer-motion";

const CvSection = () => {
  // Assurez-vous que votre CV est dans le dossier public/ à la racine
  const cvPath = "/CV.pdf";

  // Animation des éléments au scroll
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Liste des compétences
  const skillGroups = [
    {
      title: "Développement Front-End",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "Développement Back-End",
      skills: ["Node.js", "Express", "MongoDB", "REST API", "SQL"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-4v4h4v-4z"></path>
          <path d="M14 4v4h4V4h-4z"></path>
          <path d="M4 20h4v-4H4v4z"></path>
          <path d="M4 10h4V6H4v4z"></path>
          <path d="M14 20v-4h-4v4h4z"></path>
          <path d="M10 14v-4H6v4h4z"></path>
        </svg>
      ),
    },
    {
      title: "Outils & Méthodes",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Agile",
        "Figma",
        "Responsive Design",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
  ];

  // Expériences professionnelles
  const experiences = [
    {
      title: "Développeur Front-end",
      company: "Entreprise XYZ",
      period: "2022 - Présent",
      description:
        "Développement d'applications web avec React et Next.js. Amélioration de l'expérience utilisateur et optimisation des performances.",
    },
    {
      title: "Stagiaire Développeur",
      company: "Startup ABC",
      period: "2021 - 2022",
      description:
        "Mise en place d'une interface utilisateur réactive, collaboration avec l'équipe de design, et implémentation de fonctionnalités.",
    },
  ];

  // Formation académique
  const education = [
    {
      degree: "Bachelier en Informatique",
      institution: "EPHEC",
      period: "2021 - 2024",
      description:
        "Spécialisation en développement d'applications web et mobiles.",
    },
  ];

  return (
    <section
      id="cv"
      className="py-16 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70"></div>
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
            <span className="text-blue-600 dark:text-blue-400">Parcours</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mon parcours académique, mes compétences et mes
            expériences professionnelles.
          </p>
        </motion.div>

        {/* Grille de contenu */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Section CV */}
          <motion.div
            className="md:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Mon CV complet
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Téléchargez mon CV pour découvrir mon parcours en détail.
                </p>
              </div>
              <a
                href={cvPath}
                download="CV_Lilian_Devroye.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
                aria-label="Télécharger mon CV"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 4a1 1 0 011 1v9a1 1 0 11-2 0V5a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Télécharger mon CV
              </a>
            </div>
          </motion.div>

          {/* Compétences */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative before:absolute before:inset-0 before:rounded-xl before:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] dark:before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Compétences Techniques
            </h3>
            <div className="space-y-6">
              {skillGroups.map((group, index) => {
                // Attribuer une couleur différente à chaque groupe
                const colors = [
                  {
                    border: "border-purple-500",
                    icon: "text-purple-500 dark:text-purple-400",
                    badge:
                      "text-purple-600 dark:text-purple-300 border-purple-100 dark:border-purple-800/30 hover:bg-purple-500 dark:hover:bg-purple-600",
                  },
                  {
                    border: "border-emerald-500",
                    icon: "text-emerald-500 dark:text-emerald-400",
                    badge:
                      "text-emerald-600 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/30 hover:bg-emerald-500 dark:hover:bg-emerald-600",
                  },
                  {
                    border: "border-amber-500",
                    icon: "text-amber-500 dark:text-amber-400",
                    badge:
                      "text-amber-600 dark:text-amber-300 border-amber-100 dark:border-amber-800/30 hover:bg-amber-500 dark:hover:bg-amber-600",
                  },
                ];

                const currentColor = colors[index % colors.length];

                return (
                  <motion.div
                    key={index}
                    className={`border-l-2 ${
                      currentColor.border
                    } pl-4 py-2 relative after:absolute after:w-[3px] after:h-full after:top-0 after:left-[-2px] after:opacity-50 after:blur-[2px] after:${currentColor.border.replace(
                      "border-",
                      "bg-"
                    )}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`${currentColor.icon} drop-shadow-md`}>
                        {group.icon}
                      </div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {group.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {group.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 bg-white dark:bg-gray-800 ${currentColor.badge} rounded-lg text-sm border transition-all duration-300 hover:text-white hover:scale-105 hover:shadow-md cursor-default relative transform hover:-translate-y-0.5 shadow-[0_2px_5px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_5px_rgba(0,0,0,0.2)]`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Expériences */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative before:absolute before:inset-0 before:rounded-xl before:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] dark:before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Expériences
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-blue-500 pl-4 py-2 relative after:absolute after:w-[3px] after:h-full after:top-0 after:left-[-2px] after:opacity-50 after:blur-[2px] after:bg-blue-500"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 shadow-[0_2px_5px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_5px_rgba(0,0,0,0.1)] p-2 bg-gray-50 dark:bg-gray-850 rounded-md transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Éducation */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative before:absolute before:inset-0 before:rounded-xl before:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] dark:before:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Formation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-purple-500 pl-4 py-2 relative after:absolute after:w-[3px] after:h-full after:top-0 after:left-[-2px] after:opacity-50 after:blur-[2px] after:bg-purple-500"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {edu.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 shadow-[0_2px_5px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_5px_rgba(0,0,0,0.1)] p-2 bg-gray-50 dark:bg-gray-850 rounded-md transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CvSection;
