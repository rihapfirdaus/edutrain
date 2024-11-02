import axiosInstance from "@/utils/axiosInstance";

export async function getVideo() {
  try {
    const response = await axiosInstance.get(`/videos`);
    const video: any = response.data.data;
    return video;
  } catch {
    return null;
  }
}
