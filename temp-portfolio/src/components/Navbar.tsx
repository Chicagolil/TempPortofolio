import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold hover:text-gray-300">
          Lilian Devroye
        </a>
        <div>
          <a href="/portfolio#cv" className="px-3 hover:text-gray-300">
            CV
          </a>
          <a href="/portfolio#projet" className="px-3 hover:text-gray-300">
            Projet Pro
          </a>
          <a href="/portfolio#activites" className="px-3 hover:text-gray-300">
            Activités
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
