"use server";
import CatalogTraining from "@/components/card/CatalogTraining";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { Training } from "@/libs/entities/Training";
import { getNewestTrainings } from "@/libs/fetchs/fetchTraining";

export default async function TrainingPage() {
  const isAuth = await auth();
  const trainings: Training[] = (await getNewestTrainings()) ?? [];

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
      Card={CatalogTraining}
      data={trainings}
      auth={isAuth}
      tabs={tabs}
    />
  );
}
