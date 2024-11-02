import axiosInstance from "@/utils/axiosInstance";
import { loadingService } from "../services/LoadingService";
import { modalService } from "../services/ModalService";
import { ErrorMessage } from "../entities/Error";

export async function actionRegisterAccount(formData: FormData) {
  loadingService.showLoading();
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
      loadingService.hideLoading();
      modalService.showModal({
        message: "Register sukses! Silahkan login kembali..",
        type: "success",
        link: "/auth/login",
      });
    }
  } catch (e: any) {
    loadingService.hideLoading();
    if (e.status === 400) {
      modalService.showModal({
        message: "Email telah digunakan!",
        type: "error",
      });
    } else if (e.status === 500) {
      modalService.showModal({ message: ErrorMessage.System, type: "error" });
    }
  }
}
