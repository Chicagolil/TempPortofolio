"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(0);

  // Détecter le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, count]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-sm py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nom */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-white font-bold text-lg md:text-xl flex items-center group"
            >
              <span className="mr-2 text-blue-400 group-hover:text-blue-300 transition-colors">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </span>
              <span className="group-hover:text-blue-300 transition-colors">
                Lilian Devroye
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex items-center space-x-1 md:space-x-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink href="#cv">CV</NavLink>
            <NavLink href="#projet">Projet</NavLink>
            <NavLink href="#activites">Activités</NavLink>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

// Composant pour les liens de navigation avec effet de survol
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="relative px-3 py-2 text-sm md:text-base group">
      <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default Navbar;
