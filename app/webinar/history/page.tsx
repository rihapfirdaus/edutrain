"use server";
import HistoryWebinar from "@/components/card/HistoryWebinar";
import { TabLinkItem } from "@/components/navigation/TabLink";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/tokenHandler";
import { getRegisteredWebinars } from "@/libs/fetchs/fetchWebinar";

export default async function HistoryWebinarPage() {
  const isAuth = await auth();
  const webinars = await getRegisteredWebinars();

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
      Card={HistoryWebinar}
      data={webinars}
      auth={isAuth}
      tabs={tabs}
    />
  );
}
