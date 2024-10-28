"use server";
import CatalogWebinar from "@/components/card/CatalogWebinar";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { getNewestWebinars } from "@/libs/fetchs/fetchWebinar";
import { Webinar } from "@/libs/entities/Webinar";

export default async function WebinarPage() {
  const isAuth = await auth();
  const webinars: Webinar[] = await getNewestWebinars();

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
      auth={isAuth}
      tabs={tabs}
    />
  );
}
