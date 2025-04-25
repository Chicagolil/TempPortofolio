import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function LandingPage() {
  return (
    // Conteneur pleine page, centré

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Link href="/portfolio" aria-label="Accéder au portfolio">
        <div className="h-[40rem]  flex items-center justify-center">
          <TextHoverEffect text="Entrer" />
        </div>
      </Link>
    </div>
  );
}
