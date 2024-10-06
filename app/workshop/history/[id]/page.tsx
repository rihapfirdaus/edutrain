"use client";

import DetailHistoryWorkshop from "@/components/card/DetailHistoryWorkshop";
import TemplateHistoryEvent from "@/components/template/TemplateHistoryEvent";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

interface WorkshopHistoryProps {
  params: any;
}

export default function WorkshopHistory({ params }: WorkshopHistoryProps) {
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
    <TemplateHistoryEvent
      entity="Workshop"
      Card={DetailHistoryWorkshop}
      data={workshop}
      error={error}
    />
  );
}
