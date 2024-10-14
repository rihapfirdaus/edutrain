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
import ModalLoading from "@/components/modal/ModalLoading";
import Menu from "@/components/navigation/Menu";
import { getAccount } from "@/libs/actions/auth/cookieHandler";
import { auth } from "@/libs/actions/auth/tokenHandler";
import ModalCertiport from "@/components/modal/ModalCertiport";

export default async function LandingPage() {
  const isAuth = await auth();
  const account = await getAccount();
  let banners = [];
  let webinars = [];
  let workshops = [];
  let trainings = [];
  let videos = [];
  let loading = true;

  try {
    const [bannerData, webinarData, workshopData, trainingData, videoData] =
      await Promise.all([
        axiosInstance.get("/banners"),
        axiosInstance.get("/webinars"),
        axiosInstance.get("/workshops"),
        axiosInstance.get("/trainings"),
        axiosInstance.get("/videos"),
      ]);

    banners = bannerData.data.data;
    webinars = webinarData.data.data.slice(0, 3);
    workshops = workshopData.data.data.slice(0, 3);
    trainings = trainingData.data.data.slice(0, 3);
    videos = videoData.data.data.slice(0, 3);
    loading = false;
  } catch (error) {
    console.log("Error fetching data:", error);
    loading = false;
  }
  return (
    <>
      <ModalLoading isLoading={loading} />
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
