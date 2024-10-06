"use client";

import CatalogTraining from "@/components/card/CatalogTraining";
import DetailTraining from "@/components/card/DetailTraining";
import HighlightCatalog from "@/components/highlight/HighlightCatalog";
import HighlightRating from "@/components/highlight/HighlightRating";
import TemplateDetailEvent from "@/components/template/TemplateDetailEvent";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

interface TrainingDetailProps {
  params: any;
}

export default function TrainingDetail({ params }: TrainingDetailProps) {
  const [training, setTraining] = useState<any>();
  const [trainings, setTrainings] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const [trainingData, trainingsData] = await Promise.all([
          axiosInstance.get(`trainings/${params.id}`),
          axiosInstance.get("/trainings"),
        ]);

        setTraining(trainingData.data.data);
        setTrainings(trainingsData.data.data.slice(0, 3));
      } catch (err: any) {
        setError({
          status: true,
          message: "Terjadi kesalahan, silakan coba lagi.",
        });
      }
    };

    fetchTrainings();
  }, []);

  return (
    <TemplateDetailEvent Card={DetailTraining} data={training} error={error}>
      <HighlightRating />
      <HighlightCatalog
        title="Training Terbaru"
        desc="Cek daftar training yang akan datang di bawah ini."
        hrefSeeMore="/training"
        Card={CatalogTraining}
        data={trainings}
      />
    </TemplateDetailEvent>
  );
}
