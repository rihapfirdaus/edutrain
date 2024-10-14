"use client";

import CatalogWebinar from "@/components/card/CatalogWebinar";
import DetailWebinar from "@/components/card/DetailWebinar";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import TemplateDetailEvent from "@/components/template/TemplateDetailEvent";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

interface WebinarDetailProps {
  params: any;
}

export default function WebinarDetail({ params }: WebinarDetailProps) {
  const [webinar, setWebinar] = useState<any>();
  const [webinars, setWebinars] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const [webinarData, webinarsData] = await Promise.all([
          axiosInstance.get(`webinars/${params.id}`),
          axiosInstance.get("/webinars"),
        ]);

        setWebinar(webinarData.data.data);
        setWebinars(webinarsData.data.data.slice(0, 3));
      } catch (err: any) {
        setError({
          status: true,
          message: "Terjadi kesalahan, silakan coba lagi.",
        });
      }
    };

    fetchWebinars();
  }, []);

  return (
    <TemplateDetailEvent Card={DetailWebinar} data={webinar} error={error}>
      <HighlightCatalog
        title="Webinar Terbaru"
        desc="Cek daftar webinar yang akan datang di bawah ini."
        hrefSeeMore="/webinar"
        Card={CatalogWebinar}
        data={webinars}
      />
    </TemplateDetailEvent>
  );
}
