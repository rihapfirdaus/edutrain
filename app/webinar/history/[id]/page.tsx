"use client";

import DetailHistoryWebinar from "@/components/card/DetailHistoryWebinar";
import TemplateHistoryEvent from "@/components/template/TemplateHistoryEvent";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

interface WebinarHistoryProps {
  params: any;
}

export default function WebinarHistory({ params }: WebinarHistoryProps) {
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
    <TemplateHistoryEvent
      entity="Webinar"
      Card={DetailHistoryWebinar}
      data={webinar}
      error={error}
    />
  );
}
