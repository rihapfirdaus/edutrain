import Image from "next/image";
import CardBase from "./CardBase";
import {
  Calendar as DateIcon,
  AlarmClock as TimeIcon,
  BookText as MateriIcon,
  MessageSquareMore as QuestionIcon,
} from "lucide-react";
import timeFormatter from "@/libs/helpers/formatter/timeFormatter";
import Link from "next/link";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";

interface HistoryTrainingProps {
  data: any;
}

export default function HistoryTraining({ data }: HistoryTrainingProps) {
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
        <Link href={`/training/history/${data.id}`}>
          <h4
            className="text-2xl font-bold truncate overflow-hidden whitespace-nowrap px-2"
            title={data.title}
          >
            {data.title}
          </h4>

          <div className="flex items-center flex-wrap divide-x-2 divide-black">
            <p className="flex gap-2 items-center px-2">
              <DateIcon size={20} />
              <span>
                {dateFormatter(data.startTime)} - {dateFormatter(data.endTime)}
              </span>
            </p>
            <p className="gap-2 items-center px-2 hidden lg:flex">
              <TimeIcon size={20} />
              <span>{timeFormatter(data.startTime)}</span>
            </p>
            {data.certificate != null && <p className="px-2">"Sertifikat"</p>}
          </div>
        </Link>

        <div className="flex flex-col lg:flex-row gap-2 px-2 mt-2">
          <Link
            href={"#"}
            className="flex gap-2 min-w-52 justify-center items-center font-bold rounded-lg p-2 border-2"
          >
            <MateriIcon /> Materi
          </Link>

          <Link
            href={"#"}
            className="flex gap-2 min-w-52 justify-center items-center font-bold rounded-lg p-2 border-2"
          >
            <QuestionIcon />
            Pertanyaan
          </Link>
        </div>
      </div>
    </CardBase>
  );
}
