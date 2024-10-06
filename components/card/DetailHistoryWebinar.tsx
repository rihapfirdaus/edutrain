import CardBase from "./CardBase";
import {
  Calendar as DateIcon,
  AlarmClock as TimeIcon,
  MapPinned as LocationIcon,
  Users as CapacityIcon,
  Badge as RewardIcon,
  User as UserIcon,
  MailIcon,
  Banknote as MoneyIcon,
  Download as DownloadIcon,
} from "lucide-react";
import timeFormatter from "@/libs/helpers/formatter/timeFormatter";
import Link from "next/link";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";

interface DetailHistoryWebinarProps {
  data: any;
  className?: string;
}

export default function DetailHistoryWebinar({
  data,
  className,
}: DetailHistoryWebinarProps) {
  const price = data.lastWebinarHistory.price;
  return (
    <CardBase
      className={`flex-col w-full min-w-80 xl:max-w-96 p-4 h-fit ${className}`}
    >
      <h4 className="text-lg font-bold">Rincian Webinar:</h4>
      <p className="flex items-center gap-2">
        <DateIcon />
        <span>{dateFormatter(data.startTime)}</span>
      </p>
      <p className="flex items-center gap-2">
        <TimeIcon />
        <span>
          {timeFormatter(data.startTime)} - {timeFormatter(data.endTime)}
        </span>
      </p>

      <p className="flex items-center gap-2">
        <LocationIcon />
        <span>{data.eventStatus}</span>
      </p>

      <p className="flex items-center gap-2">
        <CapacityIcon />
        <span>{data.maxAttendees} Peserta</span>
      </p>

      {data.certificate != null && (
        <p className="flex items-center gap-2">
          <RewardIcon />
          <span>Sertifikat</span>
        </p>
      )}

      <h4 className="text-lg font-bold">Rincian Peserta:</h4>

      <p className="flex items-center gap-2">
        <UserIcon />
        <span>Dian Saputra</span>
      </p>

      <p className="flex items-center gap-2">
        <MailIcon />
        <span>dayensptr@gmail.com</span>
      </p>

      <h4 className="text-lg font-bold">Download Materi dan Sertifikat:</h4>
      {price && (
        <p className="font-bold text-[#0041A1]">{currencyFormatter(price)}</p>
      )}
      <Link
        href={"#"}
        className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center flex gap-2 items-center justify-center"
      >
        {price ? (
          <>
            <MoneyIcon /> <span>Beli Sekarang</span>
          </>
        ) : (
          <>
            <DownloadIcon /> <span>Unduh</span>
          </>
        )}
      </Link>
    </CardBase>
  );
}
