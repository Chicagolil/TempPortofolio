import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BentoGrid from "@/components/ui/bento-grid";
import { getActivityById } from "@/lib/data";

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const activityId = parseInt(id);
  const activity = getActivityById(activityId);

  if (!activity) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/portfolio#activites"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 inline-flex items-center"
          >
            ← Retour aux activités
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-10">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {activity.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium">
                {activity.type}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                {activity.realHours}h réelles
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium">
                {activity.valuableHours}h valorisées
              </span>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {activity.fullDescription || activity.description}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Galerie de photos
        </h2>

        {activity.images && activity.images.length > 0 ? (
          <BentoGrid images={activity.images} />
        ) : (
          <p className="text-gray-600 dark:text-gray-400 text-center py-8">
            Aucune image disponible pour cette activité.
          </p>
        )}
      </div>
    </div>
  );
}
