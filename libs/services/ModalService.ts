import { EventEmitter } from "events";

type Modal = {
  message: string;
  type?: "success" | "error" | "info";
  link?: string;
};

class ModalService extends EventEmitter {
  public showModal(modal: Modal) {
    this.emit("showModal", modal);
  }

  public hideModal() {
    this.emit("hideModal");
  }
}

export const modalService = new ModalService();
