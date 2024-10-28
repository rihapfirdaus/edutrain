"use server";

import BannerSection from "@/components/section/BannerSection";
import CatalogTraining from "@/components/card/CatalogTraining";
import CatalogWebinar from "@/components/card/CatalogWebinar";
import CatalogWorkshop from "@/components/card/CatalogWorkshop";
import MediaYoutube from "@/components/card/MediaYoutube";
import Carousel from "@/components/custom/Carousel";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import HighlightMedia from "@/components/highlight/HighlightMedia";
import MitraSection from "@/components/section/MitraSection";
import Menu from "@/components/navigation/Menu";
import ModalCertiport from "@/components/modal/ModalCertiport";
import { auth } from "@/libs/actions/tokenHandler";
import { loadingService } from "@/libs/services/LoadingService";
import { getAccount } from "@/libs/fetchs/fetchAccount";
import { getNewestWebinars } from "@/libs/fetchs/fetchWebinar";
import { getNewestWorkshops } from "@/libs/fetchs/fetchWorkshop";
import { getNewestTrainings } from "@/libs/fetchs/fetchTraining";
import { getBanner } from "@/libs/fetchs/fetchBanner";
import { getVideo } from "@/libs/fetchs/fetchVideo";

export default async function LandingPage() {
  loadingService.showLoading();

  const isAuth = await auth();
  const account = await getAccount();
  const banners = await getBanner();
  const webinars = (await getNewestWebinars()).slice(0, 4);
  const workshops = (await getNewestWorkshops()).slice(0, 4);
  const trainings = (await getNewestTrainings()).slice(0, 4);
  const videos = (await getVideo()).slice(0, 3);

  loadingService.hideLoading();

  return (
    <>
      <ModalCertiport />
      <Carousel slides={banners} />
      <Menu auth={isAuth} account={account} />
      <BannerSection />
      <main>
        <HighlightCatalog
          title="Webinar Terbaru"
          desc="Cek daftar webinar yang akan datang di bawah ini."
          hrefSeeMore="/webinar"
          Card={CatalogWebinar}
          data={webinars}
        />
        <HighlightCatalog
          title="Workshop Terbaru"
          desc="Cek daftar Workshop yang akan datang di bawah ini."
          hrefSeeMore="/workshop"
          Card={CatalogWorkshop}
          data={workshops}
        />
        <HighlightCatalog
          title="Training Terbaru"
          desc="Cek daftar webinar yang akan datang di bawah ini."
          hrefSeeMore="/training"
          Card={CatalogTraining}
          data={trainings}
        />
        <HighlightMedia
          title="Video Terbaru"
          desc="Cek video terbaru di bawah ini."
          Card={MediaYoutube}
          data={videos}
        />
        <MitraSection />
      </main>
    </>
  );
}
