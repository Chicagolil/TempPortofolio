import activitiesData from "../data/activities.json";

export interface ActivityImage {
  src: string;
  alt: string;
  title: string;
}

export interface Activity {
  id: number;
  title: string;
  type: string;
  realHours: number;
  valuableHours: number;
  imageUrl: string;
  description: string;
  fullDescription?: string;
  images?: ActivityImage[];
}

export function getAllActivities(): Activity[] {
  return activitiesData;
}

export function getActivityById(id: number): Activity | undefined {
  return activitiesData.find((activity) => activity.id === id);
}

export function getTotalRealHours(): number {
  return activitiesData.reduce(
    (total, activity) => total + activity.realHours,
    0
  );
}

export function getTotalValuableHours(): number {
  return activitiesData.reduce(
    (total, activity) => total + activity.valuableHours,
    0
  );
}
