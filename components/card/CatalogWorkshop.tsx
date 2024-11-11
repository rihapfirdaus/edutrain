"use client";

import Image from "next/image";
import CardBase from "./CardBase";
import Link from "next/link";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import {
  EventStatus,
  eventStatusChecker,
} from "@/libs/helpers/eventStatusChecker";
import { actionRegisterEvent } from "@/libs/actions/actionRegisterEvent";
import { useState } from "react";
import { Workshop } from "@/libs/entities/Workshop";
import {
  capitalizeEachWord,
  formatUrlString,
} from "@/libs/helpers/formatter/stringFormatter";
import { actionPaymentEvent } from "@/libs/actions/actionPaymentEvent";

interface CatalogWorkshopProps {
  data: Workshop;
}

export default function CatalogWorkshop({ data }: CatalogWorkshopProps) {
  const statusEvent = eventStatusChecker(data.createdAt, data.startTime);
  const [process, setProcess] = useState(false);

  const handleRegister = async () => {
    setProcess(true);

    const formData = new FormData();
    formData.append("eventId", data.id);
    formData.append("eventTitle", data.title);
    formData.append("eventType", data.eventType);

    await actionRegisterEvent(formData);
    setProcess(false);
  };

  const discount = parseInt(data.lastWorkshopHistory?.discount || "0");
  const price = parseInt(data.lastWorkshopHistory?.price || "0");
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

  return (
    <CardBase
      showStatus
      createdDate={data.createdAt}
      eventDate={data.startTime}
      className="flex-col min-w-80 max-w-80 gap-4 min-h-96"
    >
      <Image
        src={data.banner}
        alt={data.title}
        width={480}
        height={240}
        className="h-44 object-cover object-center bg-[#d4d4d4]"
      />

      <Link
        href={`/workshop/${data.id}`}
        className="flex flex-col gap-2 px-4 flex-grow"
        title={data.title}
      >
        <h4 className="text-xl font-bold truncate overflow-hidden whitespace-nowrap">
          {data.title}
        </h4>

        {discount != 0 && (
          <div className="flex justify-between flex-wrap">
            <p className="flex gap-2 text-sm items-center line-through">
              {currencyFormatter(price)}
            </p>
            <p className="flex gap-2  items-center bg-red-500 rounded-lg px-2 text-white">
              Potongan harga {discount | 0}%
            </p>
          </div>
        )}

        <div className="flex justify-between items-center flex-wrap">
          <p className="flex gap-2  items-center ">
            {price != 0 ? currencyFormatter(totalPrice) : "Free"}
          </p>
          {/* <p className="flex gap-2 text-base items-center">
            <SoldIcon size={20} />
            <span>355 Terjual</span>
            </p> */}
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <p className="text-sm">{data.status}</p>
          <p className="text-sm">{data.certificate != null && "Sertifikat"}</p>
        </div>
      </Link>

      <div className="flex flex-col gap-2 pb-4 px-4">
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
        {/* <div className="flex gap-2">
          <Link
            href={"#"}
            title="Tambah ke keranjang"
            className="flex-grow p-2 bg-gray-300 flex justify-center rounded-lg"
          >
            <CartIcon />
          </Link>
          <Link
            href={"#"}
            title="Tambah ke wishlist"
            className="flex-grow p-2 bg-gray-300 flex justify-center rounded-lg"
          >
            <DetailIcon />
          </Link>
        </div> */}
      </div>
    </CardBase>
  );
}
