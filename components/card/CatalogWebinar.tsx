import Image from "next/image";
import CardBase from "./CardBase";
import { Calendar as DateIcon, AlarmClock as TimeIcon } from "lucide-react";
import timeFormatter from "@/libs/helpers/formatter/timeFormatter";
import Link from "next/link";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";

interface CatalogWebinarProps {
  data: any;
}

export default function CatalogWebinar({ data }: CatalogWebinarProps) {
  return (
    <CardBase
      showStatus
      createdDate={data.createdAt}
      eventDate={data.startTime}
      className="flex-col min-w-80 max-w-80"
    >
      <Image
        src={data.banner}
        alt={data.title}
        width={480}
        height={240}
        className="h-44 object-cover object-center"
      />

      <Link href={`/webinar/${data.id}`} className="flex flex-col gap-2 p-2">
        <div className="flex justify-between items-center flex-wrap">
          <p className="flex gap-2 text-sm items-center">
            <DateIcon size={20} />
            <span>{dateFormatter(data.startTime)}</span>
          </p>
          <p className="flex gap-2 text-sm items-center">
            <TimeIcon size={20} />
            <span>{timeFormatter(data.startTime)}</span>
          </p>
        </div>

        <h4
          className="text-xl font-bold truncate overflow-hidden whitespace-nowrap"
          title={data.title}
        >
          {data.title}
        </h4>

        <div className="flex justify-between items-center flex-wrap">
          <p className="text-sm">{data.eventStatus}</p>
          <p className="text-sm">
            {data.certificate != null ? "Sertifikat" : "Tidak bersertifikat"}
          </p>
        </div>
      </Link>

      <div className="flex flex-col gap-2 p-2">
        <Link
          href={"#"}
          className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
        >
          Daftar Sekarang
        </Link>
      </div>
    </CardBase>
  );
}
