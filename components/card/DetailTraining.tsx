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
import { Account } from "@/libs/entities/Account";
import { Training } from "@/libs/entities/Training";
import {
  EventStatus,
  eventStatusChecker,
} from "@/libs/helpers/eventStatusChecker";
import { useState } from "react";
import { actionRegisterEvent } from "@/libs/actions/actionRegisterEvent";
import {
  capitalizeEachWord,
  formatUrlString,
} from "@/libs/helpers/formatter/stringFormatter";
import { actionPaymentEvent } from "@/libs/actions/actionPaymentEvent";
import { useRouter } from "next/navigation";
import PaymentInfo from "../custom/PaymentInfo";
import { formatDateTime } from "@/libs/helpers/formatter/dateFormatter";

interface DetailTrainingProps {
  data: Training;
  account?: Account | null;
}

export default function DetailTraining({ data, account }: DetailTrainingProps) {
  const statusEvent = eventStatusChecker(data.createdAt, data.startTime);
  const [process, setProcess] = useState(false);
  const router = useRouter();

  // const orderId: string | null = getFromSessionStorage(data.id);

  const handleRegister = async () => {
    setProcess(true);

    const formData = new FormData();
    formData.append("eventId", data.id);
    formData.append("eventTitle", data.title);
    formData.append("eventType", data.eventType);

    await actionRegisterEvent(formData);
    setProcess(false);
  };

  const discount = parseInt(data.lastTrainingHistory?.discount || "0");
  const price = parseInt(data.lastTrainingHistory?.price || "0");
  const totalPrice = discount ? price - (discount / 100) * price : price;

  const handlePayment = async () => {
    setProcess(true);

    const formData = new FormData();
    formData.append("eventId", `${data.id}`);
    formData.append("eventType", capitalizeEachWord(data.eventType));
    formData.append("eventTitle", formatUrlString(data.title));
    formData.append("eventPrice", `${totalPrice}`);

    await actionPaymentEvent(formData);
    setProcess(false);
  };

  // const handleCancelOrder = async () => {
  //   if (orderId) await removeOrder(data.id, orderId);
  // };

  return (
    <CardBase className="flex-col min-w-80 w-full xl:max-w-96 p-4 h-fit relative">
      <h4 className="text-xl font-bold">Rincian Training:</h4>
      <p className="flex items-center gap-2">
        <DateIcon />
        <span>
          {formatDateTime(data.startTime).date} -{" "}
          {formatDateTime(data.endTime).date}
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

      {discount != 0 && (
        <div className="flex justify-between flex-wrap">
          <p className="text-sm line-through">{currencyFormatter(price)}</p>
          <p className="absolute top-2 right-2 flex gap-2 items-center bg-red-500 rounded-lg py-1 px-2 text-white">
            {discount | 0}% OFF
          </p>
        </div>
      )}

      {price != 0 && (
        <p className="font-bold text-lg">{currencyFormatter(totalPrice)}</p>
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

      {price != 0 && statusEvent.status != "expired" && !data.isRegistered && (
        <PaymentInfo />
      )}

      <button
        onClick={price != 0 ? handlePayment : handleRegister}
        className="text-white font-bold rounded-lg p-2 bg-primary text-center disabled:bg-[#d4d4d4] disabled:text-black"
        disabled={
          process || data.isRegistered || statusEvent.status === "expired"
        }
      >
        {process ? (
          <span className="animate-pulse">
            {price != 0 ? EventStatus.Waiting : EventStatus.Registering}
          </span>
        ) : statusEvent.status === "expired" ? (
          EventStatus.Past
        ) : price != 0 ? (
          data.isRegistered && data.isVerified ? (
            EventStatus.Paid
          ) : data.isRegistered ? (
            EventStatus.Waiting
          ) : (
            EventStatus.OpenOrder
          )
        ) : data.isRegistered ? (
          EventStatus.Registered
        ) : (
          EventStatus.Open
        )}
      </button>

      {/* {orderId && (
        <button
          onClick={handleCancelOrder}
          className="border border-dashed rounded-lg p-2 text-center disabled:bg-[#d4d4d4] disabled:text-black hover:bg-[#f1f1f1]"
        >
          batalkan pendaftaran
        </button>
      )} */}

      {/* <Link
        href={"#"}
        className="font-bold rounded-lg p-2 bg-gray-300 text-center"
      >
        Tambah ke Keranjang
      </Link> */}
    </CardBase>
  );
}
