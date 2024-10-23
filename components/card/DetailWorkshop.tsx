import CardBase from "./CardBase";
import {
  User as InstructorIcon,
  Grid2X2 as CategoryIcon,
  MapPinned as LocationIcon,
  Badge as RewardIcon,
} from "lucide-react";
import Link from "next/link";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";

interface DetailWorkshopProps {
  data: any;
}

export default function DetailWorkshop({ data }: DetailWorkshopProps) {
  const discount = data.lastWorkshopHistory.discount;
  const price = data.lastWorkshopHistory.price;

  return (
    <CardBase className="flex-col w-full min-w-80 xl:max-w-96 p-4 h-fit relative">
      <h4 className="text-xl font-bold">Rincian Workshop:</h4>
      <p className="flex items-center gap-2">
        <InstructorIcon />
        <span>{data.instructor}</span>
      </p>

      <p className="flex items-center gap-2">
        <CategoryIcon />
        <span>
          {data.category.name}, {data.subCategory.name}
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
