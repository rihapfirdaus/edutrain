import HistoryTraining from "@/components/card/HistoryTraining";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { Training } from "@/libs/entities/Training";
import { getRegisteredTrainings } from "@/libs/fetchs/fetchTraining";

export default async function HistoryTrainingPage() {
  const isAuth = await auth();
  const trainings: Training[] = (await getRegisteredTrainings()) ?? [];

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
      auth={isAuth}
      tabs={tabs}
    />
  );
}
