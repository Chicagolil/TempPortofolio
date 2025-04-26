"use client";

import React from "react";
import Image from "next/image"; // Pour les images optimisées
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"; // Assurez-vous que le chemin est correct
import {
  getAllActivities,
  getTotalRealHours,
  getTotalValuableHours,
} from "@/lib/data";

const ActivitiesSection = () => {
  const activitiesData = getAllActivities();
  const totalRealHours = getTotalRealHours();
  const totalValuableHours = getTotalValuableHours();
  const fallbackImage = "/images/placeholder.jpg"; // Créez aussi ce placeholder

  return (
    <section id="activites" className="py-12 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Mes{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Activités d'Acquisition
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12">
          Découvrez les différentes activités que j'ai réalisées durant mon
          parcours et les compétences acquises à travers ces expériences.
        </p>

        {/* Grille de cartes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 justify-items-center mb-16">
          {activitiesData.map((activity) => (
            <Link
              href={`/portfolio/activite/${activity.id}`}
              key={activity.id}
              className="w-full max-w-sm cursor-pointer"
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="bg-white dark:bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] border-black/[0.1] dark:border-white/[0.2] w-full h-auto rounded-xl p-6 border shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-800 dark:text-white"
                  >
                    {activity.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-600 dark:text-neutral-300 text-sm max-w-sm mt-2"
                  >
                    {activity.description}{" "}
                    <span className="font-semibold">({activity.type})</span>
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={activity.imageUrl}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={`Image pour ${activity.title}`}
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }} // Fallback si l'image est introuvable
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl text-xs font-normal text-gray-700 dark:text-gray-300"
                    >
                      🕒 Réel: {activity.realHours}h
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      ⭐ Valoris.: {activity.valuableHours}h
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </Link>
          ))}
        </div>

        {/* Liste récapitulative avec style Aceternity UI */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h3 className="text-xl font-bold">Récapitulatif des Activités</h3>
          </div>

          {/* En-têtes des colonnes */}
          <div className="p-4 bg-gray-100 dark:bg-gray-700/70 border-b border-gray-200 dark:border-gray-700 grid grid-cols-12 gap-4">
            <div className="col-span-5 font-medium text-gray-700 dark:text-gray-200">
              Titre
            </div>
            <div className="col-span-3 font-medium text-gray-700 dark:text-gray-200">
              Type
            </div>
            <div className="col-span-2 text-center font-medium text-gray-700 dark:text-gray-200">
              Heures réelles
            </div>
            <div className="col-span-2 text-center font-medium text-gray-700 dark:text-gray-200">
              Heures valorisées
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150 grid grid-cols-12 gap-4 items-center"
              >
                <div className="col-span-5">
                  <Link
                    href={`/portfolio/activite/${activity.id}`}
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {activity.title}
                  </Link>
                </div>

                <div className="col-span-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                    {activity.type}
                  </span>
                </div>

                <div className="col-span-2 text-center font-medium text-gray-800 dark:text-gray-200">
                  {activity.realHours}h
                </div>

                <div className="col-span-2 text-center font-medium text-emerald-600 dark:text-emerald-400">
                  {activity.valuableHours}h
                </div>
              </div>
            ))}

            {/* Ligne de total avec style distinct */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/80 grid grid-cols-12 gap-4 items-center font-bold">
              <div className="col-span-5 text-gray-900 dark:text-white">
                Total
              </div>
              <div className="col-span-3"></div>
              <div className="col-span-2 text-center text-gray-800 dark:text-gray-200">
                {totalRealHours}h
              </div>
              <div className="col-span-2 text-center text-emerald-600 dark:text-emerald-400">
                {totalValuableHours}h
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
