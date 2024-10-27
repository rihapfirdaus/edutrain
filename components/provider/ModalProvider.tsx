"use client";
import {
  X as CloseIcon,
  CheckCircle as SuccessIcon,
  CircleAlert as FailedIcon,
  CircleHelp as InfoIcon,
} from "lucide-react";
import { modalService } from "@/libs/services/ModalService";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Modal = {
  message: string;
  type?: "success" | "error" | "info";
  link?: string;
};

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isShowing, setIsShowing] = useState(false);
  const [message, setMessage] = useState<Modal>();
  const Icon =
    message?.type === "success"
      ? SuccessIcon
      : message?.type === "error"
      ? FailedIcon
      : InfoIcon;

  const handleShowModal = (modal: Modal) => {
    setMessage(modal);
    setIsShowing(true);
  };

  const handleHideModal = () => {
    setMessage(undefined);
    setIsShowing(false);
  };

  useEffect(() => {
    modalService.on("showModal", handleShowModal);
    modalService.on("hideModal", handleHideModal);

    return () => {
      modalService.off("showModal", handleShowModal);
      modalService.off("hideModal", handleHideModal);
    };
  }, []);

  return (
    <div>
      {children}
      {isShowing && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 grid place-items-center z-20 overflow-y-scroll"
          onClick={() => handleHideModal()}
        >
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_1.jpg')",
            }}
            className="flex flex-col justify-center items-center text-white font-bold bg-cover bg-center max-w-80 min-w-80 rounded-3xl min-h-64 shadow-xl relative gap-4 border-2 p-2 my-2 transition-opacity duration-75"
            onClick={(e) => e.stopPropagation()}
          >
            {message?.type === "info" && (
              <div
                className="absolute right-4 top-3 hover:bg-[#0041A1] p-2 rounded-full cursor-pointer"
                onClick={() => handleHideModal()}
              >
                <CloseIcon />
              </div>
            )}
            <Icon color="white" size={40} strokeWidth={1.5} />
            <p className="text-white text-xl ">{message?.message}</p>
            {message?.link ? (
              <Link
                onClick={() => handleHideModal()}
                href={message?.link}
                className="text-white font-bold rounded-lg py-2 px-4 bg-[#0041A1] text-center shadow-lg hover:cursor-pointer"
              >
                Lanjutkan
              </Link>
            ) : message?.type === "success" ? (
              <button
                className="text-white font-bold rounded-lg py-2 px-4 bg-[#0041A1] text-center shadow-lg hover:cursor-pointer"
                onClick={() => {
                  handleHideModal();
                  window.location.reload();
                }}
              >
                OK
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalProvider;
