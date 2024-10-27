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
import axiosInstance from "@/utils/axiosInstance";
import Menu from "@/components/navigation/Menu";
import { auth } from "@/libs/actions/tokenHandler";
import ModalCertiport from "@/components/modal/ModalCertiport";
import { loadingService } from "@/libs/services/LoadingService";

export default async function LandingPage() {
  loadingService.showLoading();

  const isAuth = await auth();
  let account = {};
  let banners = [];
  let webinars = [];
  let workshops = [];
  let trainings = [];
  let videos = [];

  try {
    const [
      accountData,
      bannerData,
      webinarData,
      workshopData,
      trainingData,
      videoData,
    ] = await Promise.all([
      axiosInstance.get("/profile"),
      axiosInstance.get("/banners"),
      axiosInstance.get("/webinars"),
      axiosInstance.get("/workshops"),
      axiosInstance.get("/trainings"),
      axiosInstance.get("/videos"),
    ]);

    account = accountData.data.data;
    banners = bannerData.data.data;
    webinars = webinarData.data.data.slice(0, 4);
    workshops = workshopData.data.data.slice(0, 4);
    trainings = trainingData.data.data.slice(0, 4);
    videos = videoData.data.data.slice(0, 4);

    loadingService.hideLoading();
  } catch (error) {
    loadingService.hideLoading();
  }
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
