"use client";
import CardBase from "./CardBase";
import {
  Calendar as DateIcon,
  AlarmClock as TimeIcon,
  MapPinned as LocationIcon,
  Users as CapacityIcon,
  Badge as RewardIcon,
  Mail as MailIcon,
  User as UserIcon,
} from "lucide-react";
import timeFormatter from "@/libs/helpers/formatter/timeFormatter";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";
import { actionRegisterEvent } from "@/libs/actions/actionRegisterEvent";
import {
  EventStatus,
  eventStatusChecker,
} from "@/libs/helpers/eventStatusChecker";
import { useState } from "react";
import { Account } from "@/libs/entities/Account";
import { Webinar } from "@/libs/entities/Webinar";

interface DetailWebinarProps {
  data: Webinar;
  account?: Account;
}

export default function DetailWebinar({ data, account }: DetailWebinarProps) {
  const statusEvent = eventStatusChecker(data.createdAt, data.startTime);
  const [process, setProcess] = useState(false);

  const handleRegister = async () => {
    setProcess(true);
    const formData = new FormData();
    formData.append("eventId", data.id);

    await actionRegisterEvent(formData);
    setProcess(false);
  };

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

      {data.isRegistered && account && (
        <>
          <h4 className="text-lg font-bold">Rincian Peserta:</h4>

          <p className="flex items-center gap-2">
            <UserIcon />
            <span>{account.fullname}</span>
          </p>

          <p className="flex items-center gap-2">
            <MailIcon />
            <span>{account.email}</span>
          </p>
        </>
      )}

      <button
        onClick={handleRegister}
        className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center disabled:bg-[#d4d4d4] disabled:text-black"
        disabled={
          process || data.isRegistered || statusEvent.status === "expired"
        }
      >
        {process ? (
          <span className="animate-pulse">{EventStatus.Registering}</span>
        ) : data.isRegistered ? (
          EventStatus.Registered
        ) : statusEvent.status === "expired" ? (
          EventStatus.Past
        ) : (
          EventStatus.Open
        )}
      </button>
    </CardBase>
  );
}
