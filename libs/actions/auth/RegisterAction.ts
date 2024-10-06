import axiosInstance from "@/utils/axiosInstance";

export interface FinalReturn {
  status: number;
  message: string;
}

export async function registerAction(formData: FormData): Promise<FinalReturn> {
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
