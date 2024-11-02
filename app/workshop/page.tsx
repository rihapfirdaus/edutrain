"use server";
import CatalogWorkshop from "@/components/card/CatalogWorkshop";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { Workshop } from "@/libs/entities/Workshop";
import { getNewestWorkshops } from "@/libs/fetchs/fetchWorkshop";

export default async function WorkshopPage() {
  const isAuth = await auth();
  const workshops: Workshop[] = (await getNewestWorkshops()) ?? [];

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
      auth={isAuth}
      tabs={tabs}
    />
  );
}
