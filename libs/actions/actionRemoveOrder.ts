import axiosInstance from "@/utils/axiosInstance";
import { loadingService } from "../services/LoadingService";
import { modalService } from "../services/ModalService";
import { ErrorMessage } from "../entities/Error";

export async function removeOrder(eventId: string, orderId: string) {
  loadingService.showLoading();
  try {
    const { status } = await axiosInstance.delete(`/orders/${orderId}`);

    if (status === 200) {
      sessionStorage.removeItem(eventId);
      loadingService.hideLoading();
      modalService.showModal({
        message: "Order dibatalkan!",
        type: "success",
      });
    }
  } catch {
    loadingService.hideLoading();
    modalService.showModal({
      message: ErrorMessage.System,
      type: "error",
    });
  }
}
