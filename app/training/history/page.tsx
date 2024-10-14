"use server";
import HistoryTraining from "@/components/card/HistoryTraining";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/auth/tokenHandler";
import axiosInstance from "@/utils/axiosInstance";

export default async function HistoryTrainingPage() {
  const isAuth = await auth();

  let trainings = [];
  let error = { status: false, message: "" };
  try {
    const response = await axiosInstance.get("/trainings");
    const trainingData = response.data.data;

    if (!trainingData || trainingData.length === 0) {
      error = { status: true, message: "Training belum tersedia." };
    } else {
      trainings = trainingData;
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.status === 404
        ? "Training belum tersedia."
        : "Terjadi kesalahan, silakan coba lagi.";
    error = { status: true, message: errorMessage };
  }

  const tabs: TabLinkItem[] = [
    {
      href: "/training",
      icon: "all",
      label: "Semua Training",
    },
    { href: "/training/history", icon: "history", label: "Riwayat Training" },
  ];
  return (
    <TemplateCatalog
      title="Pilih training sesuai minatmu."
      entity="Training"
      Card={HistoryTraining}
      data={trainings}
      error={error}
      auth={isAuth}
      tabs={tabs}
    />
  );
}
