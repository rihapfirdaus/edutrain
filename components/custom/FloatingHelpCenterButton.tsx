"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function FloatingHelpCenterButton() {
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const pathName = usePathname();
  const isAuthPage = pathName.split("/")[1] === "auth";

  useEffect(() => {
    if (isAuthPage) {
      setIsVisible(false);
    } else {
      setIsVisible(true);

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScroll = 300;
        const newOpacity = 1 - Math.min(scrollTop / maxScroll, 1);
        setOpacity(newOpacity);

        if (scrollTop > maxScroll) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathName]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 flex items-center space-x-2"
          style={{ zIndex: "99" }}
        >
          <button
            className="transition-opacity duration-500"
            style={{ opacity: opacity }}
          >
            <Link href="https://wa.me/+6281214030521" target="_blank">
              <Image
                src="/logo_helper.png"
                alt="Help Center"
                width={142}
                height={138}
              />
            </Link>
          </button>
          <button
            className="transition-opacity duration-500 fixed bottom-32 right-2 flex items-center space-x-2 p-2 rounded-full font-bold bg-grey-300"
            style={{ opacity: opacity }}
            onClick={handleClose}
          >
            <X />
          </button>
        </div>
      )}
    </>
  );
}
