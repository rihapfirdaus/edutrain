"use server";
import CatalogWorkshop from "@/components/card/CatalogWorkshop";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { Error, ErrorMessage } from "@/libs/entities/Error";
import { Workshop } from "@/libs/entities/Workshop";
import { getNewestWorkshops } from "@/libs/fetchs/fetchWorkshop";

export default async function WorkshopPage() {
  const isAuth = await auth();
  const workshops: Workshop[] = await getNewestWorkshops();
  let error: Error = { status: false, message: ErrorMessage.None };

  if (workshops === null || workshops.length === 0) {
    error = { status: true, message: ErrorMessage.Empty };
  }

  const tabs: TabLinkItem[] = [
    {
      href: "/webinar",
      icon: "all",
      label: "Semua Workshop",
    },
    { href: "/webinar/history", icon: "history", label: "Riwayat Workshop" },
  ];
  return (
    <TemplateCatalog
      title="Pilih workshop sesuai minatmu."
      entity="Workshop"
      Card={CatalogWorkshop}
      data={workshops}
      auth={isAuth}
      tabs={tabs}
    />
  );
}
