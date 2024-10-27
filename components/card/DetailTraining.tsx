"use client";
import CardBase from "./CardBase";
import {
  Calendar as DateIcon,
  MapPinned as LocationIcon,
  Badge as RewardIcon,
  Mail as MailIcon,
  User as UserIcon,
} from "lucide-react";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";
import { Account } from "@/libs/entities/Account";
import { Training } from "@/libs/entities/Training";
import {
  EventStatus,
  eventStatusChecker,
} from "@/libs/helpers/eventStatusChecker";
import { useState } from "react";
import { actionRegisterEvent } from "@/libs/actions/actionRegisterEvent";

interface DetailTrainingProps {
  data: Training;
  account?: Account;
}

export default function DetailTraining({ data, account }: DetailTrainingProps) {
  const statusEvent = eventStatusChecker(data.createdAt, data.startTime);
  const [process, setProcess] = useState(false);

  const handleRegister = async () => {
    setProcess(true);
    const formData = new FormData();
    formData.append("eventId", data.id);

    await actionRegisterEvent(formData);
    setProcess(false);
  };

  const discount = parseInt(data.lastTrainingHistory.discount || "0");
  const price = parseInt(data.lastTrainingHistory.price || "0");

  return (
    <CardBase className="flex-col min-w-80 w-full xl:max-w-96 p-4 h-fit relative">
      <h4 className="text-xl font-bold">Rincian Training:</h4>
      <p className="flex items-center gap-2">
        <DateIcon />
        <span>
          {dateFormatter(data.startTime)} - {dateFormatter(data.endTime)}
        </span>
      </p>
      <p className="flex items-center gap-2">
        <LocationIcon />
        <span>{data.status}</span>
      </p>

      {data.certificate != null && (
        <p className="flex items-center gap-2">
          <RewardIcon />
          <span>Sertifikat</span>
        </p>
      )}

      {discount > 0 && (
        <div className="flex justify-between flex-wrap">
          <p className="text-sm line-through">{currencyFormatter(price)}</p>
          <p className="absolute top-2 right-2 flex gap-2  items-center bg-red-500 rounded-lg p-1 text-white">
            {discount | 0}% OFF
          </p>
        </div>
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

      <p className="font-bold text-lg">
        {currencyFormatter(discount ? price - (discount / 100) * price : price)}
      </p>

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

      {/* <Link
        href={"#"}
        className="font-bold rounded-lg p-2 bg-gray-300 text-center"
      >
        Tambah ke Keranjang
      </Link> */}
    </CardBase>
  );
}
