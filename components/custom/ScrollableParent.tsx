"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollableParentProps {
  className?: string;
  children: React.ReactNode;
}

export default function ScrollableParent({
  className,
  children,
}: ScrollableParentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const hasOverflow =
          containerRef.current.scrollWidth > containerRef.current.clientWidth;
        setIsOverflow(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex w-full overflow-x-scroll max-w-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] gap-4 py-4 lg:items-center ${
        isOverflow ? "justify-start" : "justify-center"
      } ${className}`}
    >
      {children}
    </div>
  );
}
