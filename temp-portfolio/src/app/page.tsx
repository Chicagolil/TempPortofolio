import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import ParticleBackground from "@/components/ui/particle-background";

export default function LandingPage() {
  return (
    // Conteneur pleine page, centré
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <ParticleBackground />

        <Link href="/portfolio" aria-label="Accéder au portfolio">
          <div className="h-[40rem] flex items-center justify-center">
            <TextHoverEffect text="Entrer" />
          </div>
        </Link>
      </main>
    </>
  );
}
