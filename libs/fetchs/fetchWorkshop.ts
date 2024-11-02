import axiosInstance from "@/utils/axiosInstance";
import { Workshop } from "../entities/Workshop";

export async function getWorkshopById(workshopId: string) {
  try {
    const response = await axiosInstance.get(`/workshops/${workshopId}`);

    const workshop: Workshop = response.data.data;

    return workshop;
  } catch {
    return null;
  }
}

export async function getNewestWorkshops() {
  try {
    const response = await axiosInstance.get(`/workshops`);

    const workshops: Workshop[] = response.data.data;

    if (workshops.length === 0 || workshops[0].id === undefined) {
      return [];
    }

    const filteredWorkshops = workshops.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return filteredWorkshops;
  } catch {
    return null;
  }
}

export async function getRegisteredWorkshops() {
  try {
    const response = await axiosInstance.get(`/workshops`);

    const workshops: Workshop[] = response.data.data;

    if (workshops.length === 0 || workshops[0].id === undefined) {
      return [];
    }

    const filteredWorkshops = workshops
      .filter((workshop) => workshop.isRegistered === true)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    return filteredWorkshops;
  } catch {
    return null;
  }
}
