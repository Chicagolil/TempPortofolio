"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CvSection from "@/components/CvSection";
import ProjectSection from "@/components/ProjectSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import WelcomeHero from "@/components/WelcomeHero";
import useSmoothScroll from "@/hooks/useSmoothScroll";

export default function PortfolioPage() {
  // Utiliser notre hook personnalisé
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Section d'accueil */}
      <WelcomeHero />

      {/* Conteneur principal pour les sections */}
      <main className="flex-grow flex flex-col overflow-auto">
        {/* Inclusion des différentes sections */}
        <CvSection />
        <ProjectSection />
        <ActivitiesSection />
      </main>

      <Footer />
    </div>
  );
}
