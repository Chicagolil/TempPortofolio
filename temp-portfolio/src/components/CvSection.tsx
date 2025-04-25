import React from "react";

const CvSection = () => {
  // Assurez-vous que votre CV est dans le dossier public/ à la racine
  const cvPath = "/CV.pdf";

  return (
    <section id="cv" className="py-12 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Mon CV</h2>
      <div className="text-center">
        <p className="mb-6">
          Téléchargez mon CV pour découvrir mon parcours en détail.
        </p>
        <a
          href={cvPath}
          download="CV_Lilian_Devroye.pdf"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
          aria-label="Télécharger mon CV"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
};

export default CvSection;
