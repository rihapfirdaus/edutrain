import axiosInstance from "@/utils/axiosInstance";
import { removeAuthToken, storeAuthToken } from "./tokenHandler";
import { redirect } from "next/navigation";

export interface FinalReturn {
  status: number;
  message: string;
}

export async function loginAccount(formData: FormData): Promise<FinalReturn> {
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

export async function logoutAccount(): Promise<FinalReturn | void> {
  let finalReturn: FinalReturn | undefined;

  try {
    removeAuthToken();
  } catch (e: any) {
    finalReturn = {
      status: e.status || 500,
      message: e.message || "Logout gagal",
    };
  } finally {
    if (!finalReturn) {
      redirect("/");
    }
  }

  return finalReturn;
}

export async function registerAccount(
  formData: FormData
): Promise<FinalReturn> {
  let finalReturn: FinalReturn = {
    status: 0,
    message: "Register gagal, periksa koneksi internet Anda.",
  };

  try {
    const loginRequest = {
      fullname: formData.get("fullname"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (loginRequest.password != formData.get("confirm")) {
      return {
        status: 400,
        message: "Password yang Anda berikan tidak sama!",
      };
    }

    const { status } = await axiosInstance.post("/auth/register", loginRequest);

    if (status === 201) {
      finalReturn = { status: status, message: "Register sukses!" };
    }
  } catch (e: any) {
    if (e.status === 400) {
      finalReturn = {
        status: e.status,
        message: "Email telah digunakan.",
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
