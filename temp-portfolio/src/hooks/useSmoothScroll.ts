"use client";

import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    // Fonction pour gérer les clics sur les liens d'ancrage
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      // Vérifier si le lien est un lien d'ancrage interne
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      // Extraire l'ID de section
      const id = href === "#" ? "top" : href.slice(1);
      const element =
        id === "top" ? document.body : document.getElementById(id);

      if (!element) return;

      // Empêcher le comportement par défaut
      e.preventDefault();

      // Faire défiler jusqu'à l'élément cible
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Mettre à jour l'URL avec le hash (optionnel)
      if (id !== "top") {
        window.history.pushState(null, "", href);
      }
    };

    // Gérer les changements d'URL avec hash lors du chargement initial
    const handleInitialHash = () => {
      const { hash } = window.location;
      if (hash && hash.length > 1) {
        const id = hash.slice(1);
        const element = document.getElementById(id);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100); // Petit délai pour permettre au DOM de se charger complètement
        }
      }
    };

    // Ajouter des écouteurs d'événements
    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("load", handleInitialHash);

    // Si l'URL contient déjà un hash lors du montage, gérer cela aussi
    if (window.location.hash) {
      handleInitialHash();
    }

    // Nettoyer les écouteurs d'événements
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("load", handleInitialHash);
    };
  }, []);
};

export default useSmoothScroll;
