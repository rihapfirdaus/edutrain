"use client";
import { eventStatusChecker } from "@/libs/helpers/eventStatusChecker";
import Link from "next/link";

interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
  showStatus?: boolean;
  createdDate?: string;
  eventDate?: string;
  href?: string;
}

export default function CardBase({
  children,
  className = "",
  showStatus = false,
  createdDate = "0",
  eventDate = "0",
  href,
}: CardBaseProps) {
  const WrapperComponent = href ? Link : "div";
  const statusEvent = eventStatusChecker(createdDate, eventDate);

  return (
    <WrapperComponent
      href={href || "#"}
      className={`flex gap-2 relative border-2 rounded-xl hover:shadow-sm overflow-clip bg-white ${className} ${
        showStatus && statusEvent.status === "expired" ? "grayscale" : ""
      }`}
    >
      {showStatus && statusEvent.status === "new" && (
        <p className="absolute px-2 py-1 bg-red-500 text-white rounded-br-lg top-0 left-0 text-sm lg:text-base">
          Baru
        </p>
      )}
      {children}
    </WrapperComponent>
  );
}
