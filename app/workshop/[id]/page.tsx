"use client";

import CatalogWorkshop from "@/components/card/CatalogWorkshop";
import DetailWorkshop from "@/components/card/DetailWorkshop";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import TemplateDetailEvent from "@/components/template/TemplateDetailEvent";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

interface WorkshopDetailProps {
  params: any;
}

export default function WorkshopDetail({ params }: WorkshopDetailProps) {
  const [workshop, setWorkshop] = useState<any>();
  const [workshops, setWorkshops] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const [workshopData, workshopsData] = await Promise.all([
          axiosInstance.get(`workshops/${params.id}`),
          axiosInstance.get("/workshops"),
        ]);

        setWorkshop(workshopData.data.data);
        setWorkshops(workshopsData.data.data.slice(0, 3));
      } catch (err: any) {
        setError({
          status: true,
          message: "Terjadi kesalahan, silakan coba lagi.",
        });
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <TemplateDetailEvent Card={DetailWorkshop} data={workshop} error={error}>
      <HighlightCatalog
        title="Workshop Terbaru"
        desc="Cek daftar workshop yang akan datang di bawah ini."
        hrefSeeMore="/workshop"
        Card={CatalogWorkshop}
        data={workshops}
      />
    </TemplateDetailEvent>
  );
}
