import axiosInstance from "@/utils/axiosInstance";
import { auth } from "./tokenHandler";
import { modalService } from "../services/ModalService";
import { ErrorMessage } from "../entities/Error";
import { capitalizeEachWord } from "../helpers/formatter/stringFormatter";
import { saveToSessionStorage } from "./storageHandler";

export async function actionRegisterEvent(formData: FormData) {
  const isAuth = await auth();

  const userResponse = await modalService.showModal({
    message: capitalizeEachWord(
      `Daftar ${formData.get("eventType")} ${formData.get("eventTitle")}?`
    ),
    type: "validation",
  });

  if (userResponse) {
    try {
      if (isAuth) {
        const registerRequest = {
          eventId: formData.get("eventId"),
        };

        const { status, data } = await axiosInstance.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/user`,
          registerRequest
        );

        if (status === 201) {
          saveToSessionStorage(data.data.eventId, data.data.id);
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
}
