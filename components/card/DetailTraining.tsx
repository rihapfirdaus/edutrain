import CardBase from "./CardBase";
import {
  Calendar as DateIcon,
  MapPinned as LocationIcon,
  Badge as RewardIcon,
} from "lucide-react";
import Link from "next/link";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import { dateFormatter } from "@/libs/helpers/formatter/dateFormatter";

interface DetailTrainingProps {
  data: any;
}

export default function DetailTraining({ data }: DetailTrainingProps) {
  const discount = data.lastTrainingHistory.discount;
  const price = data.lastTrainingHistory.price;

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

      {discount != null && (
        <div className="flex justify-between flex-wrap">
          <p className="text-sm line-through">{currencyFormatter(price)}</p>
          <p className="absolute top-2 right-2 flex gap-2  items-center bg-red-500 rounded-lg p-1 text-white">
            {discount | 0}% OFF
          </p>
        </div>
      )}

      <p className="font-bold text-lg">
        {currencyFormatter(discount ? price - (discount / 100) * price : price)}
      </p>

      <Link
        href={"#"}
        className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
      >
        Daftar Sekarang
      </Link>

      {/* <Link
        href={"#"}
        className="font-bold rounded-lg p-2 bg-gray-300 text-center"
      >
        Tambah ke Keranjang
      </Link> */}
    </CardBase>
  );
}
