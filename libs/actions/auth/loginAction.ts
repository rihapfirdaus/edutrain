import axiosInstance from "@/utils/axiosInstance";
import { storeAuthToken } from "./tokenHandler";
import { storeAccount } from "./cookieHandler";

export interface FinalReturn {
  status: number;
  message: string;
}

export async function loginAction(formData: FormData): Promise<FinalReturn> {
  let finalReturn: FinalReturn = {
    status: 0,
    message: "Login gagal, periksa koneksi internet Anda.",
  };

  try {
    const loginRequest = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const { status, data } = await axiosInstance.post(
      "/auth/login",
      loginRequest
    );

    if (status === 200) {
      finalReturn = { status: status, message: "Login sukses!" };
      console.log(data.data.token);
      await storeAuthToken({ token: data.data.token });
      await storeAccount(data.data.account);
    }
  } catch (e: any) {
    if (e.status === 404 || e.status === 401 || e.status === 400) {
      finalReturn = {
        status: e.status,
        message: "Email/Kata Sandi Anda salah.",
      };
    } else if (e.status === 500) {
      finalReturn = {
        status: e.status,
        message: "Error sistem, silakan coba beberapa saat lagi.",
      };
    }
  }

  return finalReturn;
}
