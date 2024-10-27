import axiosInstance from "@/utils/axiosInstance";
import { Webinar } from "../entities/Webinar";

export async function getWebinarById(webinarId: string) {
  try {
    const response = await axiosInstance.get(`/webinars/${webinarId}`);

    const webinar: Webinar = response.data.data;

    return webinar;
  } catch (err: any) {
    return err;
  }
}

export async function getNewestWebinars() {
  try {
    const response = await axiosInstance.get(`/webinars`);

    const webinars: Webinar[] = response.data.data;

    const filteredWebinars = webinars.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return filteredWebinars;
  } catch (err: any) {
    return err;
  }
}

export async function getRegisteredWebinars() {
  try {
    const response = await axiosInstance.get(`/webinars`);

    const webinars: Webinar[] = response.data.data;

    const filteredWebinars = webinars
      .filter((webinar) => webinar.isRegistered === true)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    return filteredWebinars;
  } catch (err: any) {
    return err;
  }
}
