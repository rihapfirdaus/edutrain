"use client";

import ItemRating from "@/components/card/ItemRating";
import PreviewTraining from "@/components/card/PreviewTraining";
import axiosInstance from "@/utils/axiosInstance";
import {
  Badge as CertificateIcon,
  Book as MateriIcon,
  Users as InteractiveIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TrainingHistoryProps {
  params: any;
}

export default function TrainingHistory({ params }: TrainingHistoryProps) {
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
    <div
      className={`flex items-center flex-grow bg-[#f4f4f4] ${
        error.status
          ? "flex-grow justify-center items-center"
          : "flex flex-col gap-4 pt-8 xl:gap-6 items-center"
      }`}
    >
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col w-full gap-4">
        {training && (
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-lg lg:text-2xl font-bold border-b text-blue-500 border-blue-500 w-fit">
              Detail Training
            </h1>
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex flex-col gap-4">
                <PreviewTraining data={training} />
                <div className="flex flex-col gap-2 bg-white p-2 rounded-xl min-w-80 border">
                  <h3 className="font-bold text-lg">Jadwal Kelas:</h3>
                  <ul>
                    <li>22 Apr 2024 08:00-16:00 WIB</li>
                    <li>23 Apr 2024 08:00-16:00 WIB</li>
                    <li>24 Apr 2024 08:00-16:00 WIB</li>
                  </ul>
                  <h3 className="font-bold text-lg">Benefit:</h3>
                  <p className="flex gap-1 items-center">
                    <CertificateIcon /> Sertifikat
                  </p>
                  <p className="flex gap-1 items-center">
                    <MateriIcon /> Akses Materi
                  </p>
                  <p className="flex gap-1 items-center">
                    <InteractiveIcon /> Kelas Interaktif
                  </p>
                </div>
                <div className="flex flex-col gap-2 bg-white p-2 rounded-xl min-w-80 border">
                  <h3 className="font-bold text-lg">
                    Apa saja yang dipelajari?
                  </h3>
                  <ol className="list-decimal">
                    <li>Pengenalan Kerangka Kerja ITIL v4</li>
                    <li>Perbedaan ITIL v3 dan ITIL v4</li>
                    <li>
                      Pengelolaan Layanan TIK (IT Service Management / ITSM)
                    </li>
                    <li>Empat Dimensi Pengelolaan Layanan TIK</li>
                  </ol>
                  <Link
                    href={"#"}
                    className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
                  >
                    Cek Selengkapnya
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-grow">
                <div className="flex flex-col gap-2 bg-white p-2 rounded-xl  border">
                  <h3 className="font-bold text-lg">Deskripsi</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: training.description }}
                  />
                </div>
                <div className="flex flex-col gap-2 bg-white p-2 rounded-xl  border">
                  <h3 className="font-bold text-lg">Ulasan</h3>
                  {[...Array(3)].map(() => (
                    <ItemRating card={false} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
