import React from "react";

const ProjectSection = () => {
  return (
    <section id="projet" className="py-12 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Mon Projet Professionnel
        </h2>
        <div className="max-w-4xl mx-auto mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Description
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {/* Description du projet professionnel à insérer ici */}
            Insérez ici une description claire et concise de votre projet
            professionnel. Quels sont vos objectifs de carrière à court et moyen
            terme ? Quel type de poste ou de secteur visez-vous ?
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Points Forts
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {/* Lister les points forts ici */}
              <li>Force 1 : Décrivez un atout pertinent pour votre projet.</li>
              <li>Force 2 : Mettez en avant une compétence clé.</li>
              <li>Force 3 : Mentionnez une expérience significative.</li>
              <li>Force 4 : Autre qualité importante.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">
              Axes d'Amélioration
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {/* Lister les points faibles/axes d'amélioration ici */}
              <li>Axe 1 : Compétence technique à développer.</li>
              <li>Axe 2 : Expérience manquante dans un domaine spécifique.</li>
              <li>Axe 3 : Soft skill à renforcer.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
