import Image from "next/image";
import CardBase from "./CardBase";
import { Calendar as DateIcon } from "lucide-react";
import Link from "next/link";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";

interface PreviewTrainingProps {
  data: any;
}

export default function PreviewTraining({ data }: PreviewTrainingProps) {
  const discount = data.lastTrainingHistory.discount;
  const price = data.lastTrainingHistory.price;

  return (
    <CardBase
      showStatus
      createdDate={data.createdAt}
      eventDate={data.startTime}
      className="flex-col min-w-80"
    >
      <h1 className="font-bold pt-2 px-2">Preview</h1>
      <Image
        src={data.banner}
        alt="#"
        width={480}
        height={240}
        className="min-h-44 max-h-[40rem] w-auto object-cover object-center  flex-grow"
      />

      <Link href={`/training/${data.id}`} className="flex flex-col gap-2 p-2">
        <div className="flex justify-between items-center flex-wrap">
          <p className="flex gap-2 text-sm items-center">
            <DateIcon size={20} />
            <span>
              {dateFormatter(data.startTime)} - {dateFormatter(data.endTime)}
            </span>
          </p>
        </div>

        <h4
          className="text-xl font-bold truncate overflow-hidden whitespace-nowrap"
          title={data.title}
        >
          {data.title}
        </h4>

        {discount != null && (
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
            {currencyFormatter(
              discount ? price - (discount / 100) * price : price
            )}
          </p>
          {/* <p className="flex gap-2 text-base items-center">
            <SoldIcon size={20} />
            <span>355 Terjual</span>
            </p> */}
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <p className="text-sm">{data.status}</p>
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
