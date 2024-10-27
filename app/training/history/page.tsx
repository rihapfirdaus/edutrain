import HistoryTraining from "@/components/card/HistoryTraining";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { Error, ErrorMessage } from "@/libs/entities/Error";
import { getRegisteredTrainings } from "@/libs/fetchs/fetchTraining";
import axiosInstance from "@/utils/axiosInstance";

export default async function HistoryTrainingPage() {
  const isAuth = await auth();
  const trainings = await getRegisteredTrainings();
  let error: Error = { status: false, message: ErrorMessage.None };

  if (trainings === null || trainings.length === 0) {
    error = { status: true, message: ErrorMessage.Empty };
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
