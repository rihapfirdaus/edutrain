import axiosInstance from "@/utils/axiosInstance";

export async function getBanner() {
  try {
    const response = await axiosInstance.get(`/banners`);
    const banner: any = response.data.data;
    return banner;
  } catch (err: any) {
    return err;
  }
}
