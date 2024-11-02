import axiosInstance from "@/utils/axiosInstance";
import { Webinar } from "../entities/Webinar";

export async function getWebinarById(webinarId: string) {
  try {
    const response = await axiosInstance.get(`/webinars/${webinarId}`);

    const webinar: Webinar = response.data.data;

    return webinar;
  } catch {
    return null;
  }
}

export async function getNewestWebinars() {
  try {
    const response = await axiosInstance.get(`/webinars`);

    const webinars: Webinar[] = response.data.data;

    if (webinars.length === 0 || webinars[0].id === undefined) {
      return [];
    }

    const filteredWebinars = webinars.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return filteredWebinars;
  } catch {
    return null;
  }
}

export async function getRegisteredWebinars() {
  try {
    const response = await axiosInstance.get(`/webinars`);

    const webinars: Webinar[] = response.data.data;

    if (webinars.length === 0 || webinars[0].id === undefined) {
      return [];
    }

    const filteredWebinars = webinars
      .filter((webinar) => webinar.isRegistered === true)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    return filteredWebinars;
  } catch {
    return null;
  }
}
