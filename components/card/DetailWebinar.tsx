import CardBase from "./CardBase";
import {
  Calendar as DateIcon,
  AlarmClock as TimeIcon,
  MapPinned as LocationIcon,
  Users as CapacityIcon,
  Badge as RewardIcon,
} from "lucide-react";
import timeFormatter from "@/libs/helpers/formatter/timeFormatter";
import Link from "next/link";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";

interface DetailWebinarProps {
  data: any;
}

export default function DetailWebinar({ data }: DetailWebinarProps) {
  return (
    <CardBase className="flex-col w-full min-w-80 xl:max-w-96 p-4 h-fit">
      <h4 className="text-xl font-bold">Rincian Webinar:</h4>
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

      <Link
        href={"#"}
        className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
      >
        Daftar Sekarang
      </Link>
    </CardBase>
  );
}
