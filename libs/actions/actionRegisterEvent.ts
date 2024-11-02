import axiosInstance from "@/utils/axiosInstance";
import { auth } from "./tokenHandler";
import { modalService } from "../services/ModalService";
import { ErrorMessage } from "../entities/Error";

export async function actionRegisterEvent(formData: FormData) {
  const isAuth = await auth();

  try {
    if (isAuth) {
      const registerRequest = {
        eventId: formData.get("eventId"),
      };

      const { status } = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/user`,
        registerRequest
      );

      if (status === 201) {
        modalService.showModal({
          message: "Pendaftaran berhasil!",
          type: "success",
        });
      }
    } else {
      modalService.showModal({
        message: "Silakan login terlebih dahulu!",
        type: "error",
        link: "/auth/login",
      });
    }
  } catch {
    modalService.showModal({
      message: ErrorMessage.System,
      type: "error",
    });
  }
}
