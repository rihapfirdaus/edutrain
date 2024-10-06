"use server";
import CatalogWorkshop from "@/components/card/CatalogWorkshop";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/auth/tokenHandler";
import axiosInstance from "@/utils/axiosInstance";

export default async function WorkshopPage() {
  const isAuth = await auth();

  let workshops = [];
  let error = { status: false, message: "" };
  try {
    const response = await axiosInstance.get("/workshops");
    const workshopData = response.data.data;

    if (!workshopData || workshopData.length === 0) {
      error = { status: true, message: "Workshop belum tersedia." };
    } else {
      workshops = workshopData;
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.status === 404
        ? "Workshop belum tersedia."
        : "Terjadi kesalahan, silakan coba lagi.";
    error = { status: true, message: errorMessage };
  }

  const tabs: TabLinkItem[] = [
    {
      href: "/workshop",
      icon: "all",
      label: "Semua Workshop",
    },
    { href: "/workshop/history", icon: "history", label: "Riwayat Workshop" },
  ];
  return (
    <TemplateCatalog
      title="Pilih workshop sesuai minatmu."
      entity="Workshop"
      Card={CatalogWorkshop}
      data={workshops}
      error={error}
      auth={isAuth}
      tabs={tabs}
    />
  );
}
