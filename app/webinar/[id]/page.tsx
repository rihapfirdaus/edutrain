import CatalogWebinar from "@/components/card/CatalogWebinar";
import DetailWebinar from "@/components/card/DetailWebinar";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import TemplateDetailEvent from "@/components/template/TemplateDetailEvent";
import TemplateHistoryEvent from "@/components/template/TemplateHistoryEvent";
import { auth } from "@/libs/actions/tokenHandler";
import { getAccount } from "@/libs/fetchs/fetchAccount";
import { Account } from "@/libs/entities/Account";
import { getNewestWebinars, getWebinarById } from "@/libs/fetchs/fetchWebinar";
import { Webinar } from "@/libs/entities/Webinar";

interface WebinarDetailProps {
  params: Webinar;
}

export default async function WebinarDetail({ params }: WebinarDetailProps) {
  const isAuth = await auth();

  const webinar: Webinar = await getWebinarById(params.id);
  const webinars: Webinar[] = (await getNewestWebinars()).slice(0, 4);
  const account: Account = await getAccount();

  return (
    <>
      {isAuth && webinar.isRegistered ? (
        <TemplateHistoryEvent
          account={account}
          entity="Webinar"
          Card={DetailWebinar}
          data={webinar}
        />
      ) : (
        <TemplateDetailEvent Card={DetailWebinar} data={webinar}>
          <HighlightCatalog
            title="Webinar Terbaru"
            desc="Cek daftar webinar yang akan datang di bawah ini."
            hrefSeeMore="/webinar"
            Card={CatalogWebinar}
            data={webinars}
          />
        </TemplateDetailEvent>
      )}
    </>
  );
}
