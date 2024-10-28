import CatalogTraining from "@/components/card/CatalogTraining";
import DetailTraining from "@/components/card/DetailTraining";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import TemplateDetailEvent from "@/components/template/TemplateDetailEvent";
import TemplateHistoryEvent from "@/components/template/TemplateHistoryEvent";
import { auth } from "@/libs/actions/tokenHandler";
import { Account } from "@/libs/entities/Account";
import { Training } from "@/libs/entities/Training";
import { getAccount } from "@/libs/fetchs/fetchAccount";
import {
  getNewestTrainings,
  getTrainingById,
} from "@/libs/fetchs/fetchTraining";

interface TrainingDetailProps {
  params: Training;
}

export default async function TrainingDetail({ params }: TrainingDetailProps) {
  const isAuth = await auth();

  const training: Training = await getTrainingById(params.id);
  const trainings: Training[] = (await getNewestTrainings()).slice(0, 4);
  const account: Account = await getAccount();

  return (
    <>
      {isAuth && training.isRegistered ? (
        <TemplateHistoryEvent
          account={account}
          entity="Training"
          Card={DetailTraining}
          data={training}
        />
      ) : (
        <TemplateDetailEvent Card={DetailTraining} data={training}>
          <HighlightCatalog
            title="Training Terbaru"
            desc="Cek daftar training yang akan datang di bawah ini."
            hrefSeeMore="/training"
            Card={CatalogTraining}
            data={trainings}
          />
        </TemplateDetailEvent>
      )}
    </>
  );
}
