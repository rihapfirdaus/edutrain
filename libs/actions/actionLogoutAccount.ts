import { removeAuthToken } from "./tokenHandler";
import { loadingService } from "../services/LoadingService";
import { modalService } from "../services/ModalService";

export async function actionLogoutAccount() {
  loadingService.showLoading();
  try {
    removeAuthToken();
  } catch (err: any) {
    loadingService.hideLoading();
    modalService.showModal({ message: "Logout gagal!" });
  }
}
