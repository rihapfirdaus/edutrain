"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
  showStatus?: boolean;
  createdDate?: number;
  eventDate?: number;
  href?: string;
}

export default function CardBase({
  children,
  className = "",
  showStatus = false,
  createdDate = 0,
  eventDate = 0,
  href,
}: CardBaseProps) {
  const [newCatalog, setNewCatalog] = useState(false);
  const [expCatalog, setExpCatalog] = useState(false);

  useEffect(() => {
    const dateNow = new Date().getTime();
    const dateCreated = new Date(createdDate).getTime();
    const dateEvent = new Date(eventDate).getTime();

    const dateDiffByToday = (dateNow - dateCreated) / (1000 * 60 * 60 * 24);

    if (dateNow > dateEvent) {
      setNewCatalog(false);
      setExpCatalog(true);
    } else if (dateDiffByToday <= 2) {
      setNewCatalog(true);
      setExpCatalog(false);
    } else {
      setNewCatalog(false);
      setExpCatalog(false);
    }
  }, [createdDate, eventDate]);

  const WrapperComponent = href ? Link : "div";

  return (
    <WrapperComponent
      href={href || "#"}
      className={`flex gap-2 relative border-2 rounded-xl hover:shadow-sm overflow-clip bg-white ${className} ${
        showStatus && expCatalog ? "grayscale" : ""
      }`}
    >
      {showStatus && newCatalog && (
        <p className="absolute px-2 py-1 bg-red-500 text-white rounded-tl-xl rounded-br-lg top-0 left-0 text-sm lg:text-base">
          Baru
        </p>
      )}
      {children}
    </WrapperComponent>
  );
}
