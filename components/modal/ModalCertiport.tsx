"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ModalCertiport() {
  const [hasSeen, setHasSeen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (window) {
        setHasSeen(sessionStorage.getItem("ModalCertiport") == "true");
      }
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  const setHasSeenModal = () => {
    setHasSeen(true);
    sessionStorage.setItem("ModalCertiport", "true");
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setHasSeenModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [hasSeen]);

  return !hasSeen ? (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center backdrop-blur-lg bg-black bg-opacity-50"
      onClick={() => setHasSeenModal()}
    >
      <div
        className="w-11/12 lg:w-3/6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <X
          className="absolute top-2 right-2 hover:scale-125 cursor-pointer"
          onClick={() => {
            setHasSeenModal();
          }}
        />
        <Image
          alt="Certificate Certiport UIN Sunan Gunung Djati Bandung"
          src="/certificate_certiport.png"
          width={2200}
          height={1700}
          quality={10}
          loading="lazy"
        />
      </div>
    </div>
  ) : (
    <></>
  );
}
