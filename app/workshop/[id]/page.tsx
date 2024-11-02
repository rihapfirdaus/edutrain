import CatalogWorkshop from "@/components/card/CatalogWorkshop";
import DetailWorkshop from "@/components/card/DetailWorkshop";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import TemplateDetailEvent from "@/components/template/TemplateDetailEvent";
import TemplateHistoryEvent from "@/components/template/TemplateHistoryEvent";
import { auth } from "@/libs/actions/tokenHandler";
import { Account } from "@/libs/entities/Account";
import { ErrorMessage } from "@/libs/entities/Error";
import { Workshop } from "@/libs/entities/Workshop";
import { getAccount } from "@/libs/fetchs/fetchAccount";
import {
  getNewestWorkshops,
  getWorkshopById,
} from "@/libs/fetchs/fetchWorkshop";
import { modalService } from "@/libs/services/ModalService";

interface WorkshopDetailProps {
  params: Workshop;
}

export default async function WorkshopDetail({ params }: WorkshopDetailProps) {
  const isAuth = await auth();

  const workshop: Workshop | null = await getWorkshopById(params.id);
  const workshops: Workshop[] = ((await getNewestWorkshops()) ?? []).slice(
    0,
    4
  );
  const account: Account | null = await getAccount();
  if (workshop) {
    const eventPrice = Number(workshop.lastWorkshopHistory.price);
    const state =
      (isAuth &&
        eventPrice > 0 &&
        workshop.isRegistered &&
        workshop.isVerified) ||
      (isAuth && eventPrice <= 0 && workshop.isRegistered);
    return (
      <>
        {state ? (
          <TemplateHistoryEvent
            account={account}
            entity="Workshop"
            Card={DetailWorkshop}
            data={workshop}
          />
        ) : (
          <TemplateDetailEvent
            account={account}
            Card={DetailWorkshop}
            data={workshop}
          >
            <HighlightCatalog
              title="workshop Terbaru"
              desc="Cek daftar workshop yang akan datang di bawah ini."
              hrefSeeMore="/workshop"
              Card={CatalogWorkshop}
              data={workshops}
            />
          </TemplateDetailEvent>
        )}
      </>
    );
  } else {
    modalService.showModal({
      message: ErrorMessage.System,
      type: "error",
      link: "/",
    });
    return <></>;
  }
}
