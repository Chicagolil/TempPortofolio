import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CvSection from "@/components/CvSection";
import ProjectSection from "@/components/ProjectSection";
import ActivitiesSection from "@/components/ActivitiesSection";

export default function PortfolioPage() {
  return (
    <div>
      <Navbar />

      {/* Conteneur principal pour les sections */}
      <main className="flex-grow">
        {/* Section Héros/Introduction (Optionnel) */}
        {/* Vous pouvez ajouter une petite intro ici si vous voulez */}
        {/* <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-2xl font-semibold">Mon Parcours & Mes Réalisations</h1>
        </div> */}

        {/* Inclusion des différentes sections */}
        <CvSection />
        <ProjectSection />
        <ActivitiesSection />
      </main>

      <Footer />
    </div>
  );
}
