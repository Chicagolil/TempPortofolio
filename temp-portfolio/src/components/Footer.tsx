import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  // Placeholder pour les icônes et les liens
  const contactInfo = {
    email: "ldevroye1@gmail.com",
    phone: "+352 691 829 881",
    instagram: "https://www.instagram.com/lilian_devroye/", // Mettre le lien Instagram ici
    facebook: "https://www.facebook.com/lilian.devroye/", // Mettre le lien Facebook ici
    github: "https://github.com/Chicagolil", // Mettre le lien Github ici
  };

  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">Contactez-moi</h3>
        <div className="flex justify-center space-x-6 mb-4">
          {/* Liens Réseaux Sociaux avec Icônes */}
          {contactInfo.instagram !== "#" && (
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          )}
          {contactInfo.facebook !== "#" && (
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          )}
          {contactInfo.github !== "#" && (
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          )}
        </div>
        <div className="text-sm space-y-1">
          {contactInfo.email !== "votre.email@example.com" && (
            <p className="flex items-center justify-center">
              <FaEnvelope className="mr-2" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
          )}
          {contactInfo.phone !== "+32 123 456 789" && (
            <p className="flex items-center justify-center">
              <FaPhone className="mr-2" />
              {contactInfo.phone}
            </p>
          )}
        </div>
        <p className="text-xs mt-6 text-gray-500">
          © {new Date().getFullYear()} Lilian Devroye. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
