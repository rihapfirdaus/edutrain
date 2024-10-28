"use server";
import HistoryWorkshop from "@/components/card/HistoryWorkshop";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { Error, ErrorMessage } from "@/libs/entities/Error";
import { getRegisteredWorkshops } from "@/libs/fetchs/fetchWorkshop";

export default async function HistoryWorkshopPage() {
  const isAuth = await auth();

  const workshops = await getRegisteredWorkshops();
  let error: Error = { status: false, message: ErrorMessage.None };

  if (workshops === null || workshops.length === 0) {
    error = { status: true, message: ErrorMessage.Empty };
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
      Card={HistoryWorkshop}
      data={workshops}
      auth={isAuth}
      tabs={tabs}
    />
  );
}
