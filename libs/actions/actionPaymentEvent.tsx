import { auth } from "./tokenHandler";
import { modalService } from "../services/ModalService";
import { ErrorMessage } from "../entities/Error";
import { getAccount } from "../fetchs/fetchAccount";
import PaymentInfo from "@/components/custom/PaymentInfo";
import axiosInstance from "@/utils/axiosInstance";
import { saveToSessionStorage } from "./storageHandler";

export async function actionPaymentEvent(formData: FormData) {
  const isAuth = await auth();

  try {
    if (isAuth) {
      const urlTemplate = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "";

      const account = await getAccount();

      const url = urlTemplate
        .replace("{id}", `${formData.get("eventId")}` as string)
        .replace("{fullname}", account?.fullname ?? ("" as string))
        .replace("{username}", account?.username ?? ("" as string))
        .replace("{eventType}", formData.get("eventType") as string)
        .replace("{eventTitle}", formData.get("eventTitle") as string)
        .replace("{eventPrice}", formData.get("eventPrice") as string);

      const userResponse = await modalService.showModal({
        message: <PaymentInfo price={Number(formData.get("eventPrice"))} />,
        option: ["Kirim bukti pembayaran", "Batalkan order"],
        type: "validation",
        link: url,
      });

      if (userResponse) {
        const registerRequest = {
          eventId: formData.get("eventId"),
        };

        const { data } = await axiosInstance.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/user`,
          registerRequest
        );

        saveToSessionStorage(data.eventId, data.id);
      }

      return url;
    } else {
      modalService.showModal({
        message: "Silakan login terlebih dahulu!",
        type: "error",
        link: "/auth/login",
      });
      return null;
    }
  } catch {
    modalService.showModal({
      message: ErrorMessage.System,
      type: "error",
    });
    return null;
  }
}
