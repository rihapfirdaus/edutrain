import axios from "axios";
import { getAuthToken } from "../auth/tokenHandler";
import axiosInstance from "@/utils/axiosInstance";

export interface FinalReturn {
  status: number;
  message: string;
}

export async function updateProfile(formData: FormData): Promise<FinalReturn> {
  let finalReturn: FinalReturn = {
    status: 0,
    message: "Update profil gagal, periksa koneksi internet Anda.",
  };
  try {
    const profileRequest = {
      fullname: formData.get("fullname"),
      username: formData.get("username"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      birthdate: formData.get("birthdate"),
      gender: formData.get("gender"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      university: formData.get("university"),
    };

    console.log(profileRequest);

    const authToken = await getAuthToken();

    const { status } = await axiosInstance.put(
      `/accounts/${formData.get("id")}`,
      profileRequest
    );

    if (status === 200) {
      finalReturn = { status: status, message: "Update profil sukses!" };
    }
  } catch (e: any) {
    finalReturn = {
      status: e.status,
      message: "Error sistem, silakan coba beberapa saat lagi.",
    };
    console.log(e);
  }

  return finalReturn;
}
