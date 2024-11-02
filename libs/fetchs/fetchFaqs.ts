import axiosInstance from "@/utils/axiosInstance";

export async function getFaqs() {
  try {
    const response = await axiosInstance.get("/faqs");

    const faqs = response.data.data;
    return faqs;
  } catch {
    return null;
  }
}
