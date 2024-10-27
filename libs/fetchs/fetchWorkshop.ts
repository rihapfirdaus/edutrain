import axiosInstance from "@/utils/axiosInstance";
import { Workshop } from "../entities/Workshop";

export async function getWorkshopById(workshopId: string) {
  try {
    const response = await axiosInstance.get(`/workshops/${workshopId}`);

    const workshop: Workshop = response.data.data;

    return workshop;
  } catch (err: any) {
    return err;
  }
}

export async function getNewestWorkshops() {
  try {
    const response = await axiosInstance.get(`/workshops`);

    const workshops: Workshop[] = response.data.data;

    const filteredWorkshops = workshops.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return filteredWorkshops;
  } catch (err: any) {
    return err;
  }
}

export async function getRegisteredWorkshops() {
  try {
    const response = await axiosInstance.get(`/workshops`);

    const workshops: Workshop[] = response.data.data;

    const filteredWorkshops = workshops
      .filter((workshop) => workshop.isRegistered === true)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    return filteredWorkshops;
  } catch (err: any) {
    return err;
  }
}
