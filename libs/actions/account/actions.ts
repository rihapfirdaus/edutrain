import { storeAuthToken } from "../auth/tokenHandler";
import { getAccount, storeAccount } from "../auth/cookieHandler";
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
  const account = await getAccount();

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
      university: "OTHER",
    };

    const { status, data } = await axiosInstance.put(
      `/accounts/${account?.id}/profile`,
      profileRequest
    );

    if (status === 200) {
      finalReturn = { status: status, message: "Update profil sukses!" };
      await storeAuthToken({ token: data.data.token });
      await storeAccount(data.data.account);
    }
  } catch (e: any) {
    finalReturn = {
      status: e.status,
      message: "Error sistem, silakan coba beberapa saat lagi.",
    };
  }

  return finalReturn;
}
