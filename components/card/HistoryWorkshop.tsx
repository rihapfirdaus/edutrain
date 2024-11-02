"use client";
import Image from "next/image";
import CardBase from "./CardBase";
import {
  Calendar as DateIcon,
  AlarmClock as TimeIcon,
  CirclePlay as RecordIcon,
  MessageSquareMore as QuestionIcon,
} from "lucide-react";
import Link from "next/link";
import { Workshop } from "@/libs/entities/Workshop";
import { formatDateTime } from "@/libs/helpers/formatter/dateFormatter";

interface HistoryWorkshopProps {
  data: Workshop;
}

export default function HistoryWorkshop({ data }: HistoryWorkshopProps) {
  return (
    <CardBase
      createdDate={data.createdAt}
      eventDate={data.startTime}
      className="flex-col lg:flex-row w-full max-w-80 lg:max-h-44 lg:max-w-none"
    >
      <Image
        src={data.banner}
        alt={data.title}
        width={480}
        height={240}
        className="lg:h-44 sm:w-80 object-cover object-center"
      />

      <div className="flex flex-col justify-center gap-2 p-2">
        <div>
          <h4
            className="text-2xl font-bold truncate overflow-hidden whitespace-nowrap px-2"
            title={data.title}
          >
            {data.title}
          </h4>

          <div className="flex items-center flex-wrap divide-x-2 divide-black">
            {data.startTime && (
              <>
                <p className="flex gap-2 items-center px-2">
                  <DateIcon size={20} />
                  <span>{formatDateTime(data.startTime).date}</span>
                </p>
                <p className="gap-2 items-center px-2 hidden lg:flex">
                  <TimeIcon size={20} />
                  <span>{formatDateTime(data.startTime).time}</span>
                </p>
              </>
            )}
            {data.certificate != null && <p className="px-2">"Sertifikat"</p>}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 px-2 mt-2">
          <Link
            href={`/workshop/${data.id}`}
            className="flex gap-2 min-w-52 justify-center items-center font-bold rounded-lg p-2 border-2"
          >
            Lihat detail
          </Link>
          {/* <Link
            href={"#"}
            className="flex gap-2 min-w-52 justify-center items-center font-bold rounded-lg p-2 border-2"
          >
            <RecordIcon /> Rekaman Workshop
          </Link>

          <Link
            href={"#"}
            className="flex gap-2 min-w-52 justify-center items-center font-bold rounded-lg p-2 border-2"
          >
            <QuestionIcon />
            Pertanyaan
          </Link> */}
        </div>
      </div>
    </CardBase>
  );
}
