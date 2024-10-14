"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ModalLoadingProps {
  showAsModal?: boolean;
  isLoading: boolean;
}

export default function ModalLoading({
  isLoading,
  showAsModal = false,
}: ModalLoadingProps) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isLoading) {
      setShowLoading(true);
    } else {
      timer = setTimeout(() => setShowLoading(false), 1000);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      {showLoading && (
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-30 grid place-items-center transition-all duration-500 ${
            !showAsModal && "bg-white"
          }`}
        >
          <Image
            src={"/edutrain_loading.svg"}
            alt="loading..."
            width={240}
            height={100}
            className="drop-shadow-xl select-none pointer-events-none"
          />
        </div>
      )}
    </>
  );
}
