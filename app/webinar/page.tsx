"use server";
import CatalogWebinar from "@/components/card/CatalogWebinar";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/auth/tokenHandler";
import axiosInstance from "@/utils/axiosInstance";

export default async function WebinarPage() {
  const isAuth = await auth();

  let webinars = [];
  let error = { status: false, message: "" };
  try {
    const response = await axiosInstance.get("/webinars");
    const webinarData = response.data.data;

    if (!webinarData || webinarData.length === 0) {
      error = { status: true, message: "Webinar belum tersedia." };
    } else {
      webinars = webinarData;
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.status === 404
        ? "Webinar belum tersedia."
        : "Terjadi kesalahan, silakan coba lagi.";
    error = { status: true, message: errorMessage };
  }

  const tabs: TabLinkItem[] = [
    {
      href: "/webinar",
      icon: "all",
      label: "Semua Webinar",
    },
    { href: "/webinar/history", icon: "history", label: "Riwayat Webinar" },
  ];
  return (
    <TemplateCatalog
      title="Pilih webinar sesuai minatmu."
      entity="Webinar"
      Card={CatalogWebinar}
      data={webinars}
      error={error}
      auth={isAuth}
      tabs={tabs}
    />
  );
}
