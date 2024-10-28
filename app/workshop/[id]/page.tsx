import CatalogWorkshop from "@/components/card/CatalogWorkshop";
import DetailWorkshop from "@/components/card/DetailWorkshop";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import TemplateDetailEvent from "@/components/template/TemplateDetailEvent";
import TemplateHistoryEvent from "@/components/template/TemplateHistoryEvent";
import { auth } from "@/libs/actions/tokenHandler";
import { Account } from "@/libs/entities/Account";
import { Workshop } from "@/libs/entities/Workshop";
import { getAccount } from "@/libs/fetchs/fetchAccount";
import {
  getNewestWorkshops,
  getWorkshopById,
} from "@/libs/fetchs/fetchWorkshop";

interface WorkshopDetailProps {
  params: Workshop;
}

export default async function WorkshopDetail({ params }: WorkshopDetailProps) {
  const isAuth = await auth();

  const workshop: Workshop = await getWorkshopById(params.id);
  const workshops: Workshop[] = (await getNewestWorkshops()).slice(0, 4);
  const account: Account = await getAccount();

  return (
    <>
      {isAuth && workshop.isRegistered ? (
        <TemplateHistoryEvent
          account={account}
          entity="Workshop"
          Card={DetailWorkshop}
          data={workshop}
        />
      ) : (
        <TemplateDetailEvent Card={DetailWorkshop} data={workshop}>
          <HighlightCatalog
            title="Workshop Terbaru"
            desc="Cek daftar workshop yang akan datang di bawah ini."
            hrefSeeMore="/workshop"
            Card={CatalogWorkshop}
            data={workshops}
          />
        </TemplateDetailEvent>
      )}
    </>
  );
}
