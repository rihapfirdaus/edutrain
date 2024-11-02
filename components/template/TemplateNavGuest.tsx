"use client";

import NavGuest from "@/components/navigation/NavGuest";
import Footer from "../navigation/Footer";
interface TemplateGuestProps {
  children: React.ReactNode;
}

export default function TemplateNavGuest({ children }: TemplateGuestProps) {
  const navlinks = [
    {
      href: "https://ptipd.uinsgd.ac.id/",
      label: "PTIPD",
      desc: "Pusat Teknologi Informasi dan Pangkalan Data",
    },
    {
      href: "https://lc.uinsgd.ac.id/",
      label: "Pusat Bahasa",
      desc: "Pusat Bahasa",
    },
    {
      href: "https://salam.uinsgd.ac.id/",
      label: "SALAM",
      desc: "Sistem Administrasi Layanan Akademik",
    },
    {
      href: "https://uinsgd.ac.id/",
      label: "Website UIN SGD",
      desc: "Website Informasi UIN Sunan Gunung Djati Bandung",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="min-h-28 max-h-28">
        <NavGuest navlinks={navlinks} />
      </div>
      <div className="flex flex-col h-screen overflow-x-hidden">
        <div className="flex flex-col flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
