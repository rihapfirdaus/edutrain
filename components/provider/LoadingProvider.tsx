"use client";
import { loadingService } from "@/libs/services/LoadingService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleShowLoading = () => setIsLoading(true);
    const handleHideLoading = () => setIsLoading(false);

    loadingService.on("showLoading", handleShowLoading);
    loadingService.on("hideLoading", handleHideLoading);

    return () => {
      loadingService.off("showLoading", handleShowLoading);
      loadingService.off("hideLoading", handleHideLoading);
    };
  }, []);

  return (
    <div>
      {children}
      {isLoading && (
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-30 grid place-items-center transition-all duration-500`}
        >
          <div className="h-fit w-fit py-4 px-8 bg-secondary flex justify-center items-center bg-opacity-65 backdrop-blur-sm rounded-xl border border-white">
            <Image
              src={"/edutrain_loading.svg"}
              alt="loading..."
              width={240}
              height={100}
              className="drop-shadow-xl select-none pointer-events-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingProvider;
