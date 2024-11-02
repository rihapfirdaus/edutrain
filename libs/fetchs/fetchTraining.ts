import axiosInstance from "@/utils/axiosInstance";
import { Training } from "../entities/Training";

export async function getTrainingById(trainingId: string) {
  try {
    const response = await axiosInstance.get(`/trainings/${trainingId}`);

    const training: Training = response.data.data;

    return training;
  } catch {
    return null;
  }
}

export async function getNewestTrainings() {
  try {
    const response = await axiosInstance.get(`/trainings`);

    const trainings: Training[] = response.data.data;

    if (trainings.length === 0 || trainings[0].id === undefined) {
      return [];
    }

    const filteredTrainings = trainings.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return filteredTrainings;
  } catch {
    return null;
  }
}

export async function getRegisteredTrainings() {
  try {
    const response = await axiosInstance.get(`/trainings`);

    const trainings: Training[] = response.data.data;

    if (trainings.length === 0 || trainings[0].id === undefined) {
      return [];
    }

    const filteredTrainings = trainings
      .filter((training) => training.isRegistered === true)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    return filteredTrainings;
  } catch {
    return null;
  }
}
