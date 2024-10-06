import CardBase from "./CardBase";
import {
  MapPinned as LocationIcon,
  Badge as RewardIcon,
  User as UserIcon,
  MailIcon,
  Banknote as MoneyIcon,
  Download as DownloadIcon,
  User as InstructorIcon,
  Grid2X2 as CategoryIcon,
} from "lucide-react";
import Link from "next/link";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";

interface DetailHistoryWorkshopProps {
  data: any;
  className?: string;
}

export default function DetailHistoryWorkshop({
  data,
  className,
}: DetailHistoryWorkshopProps) {
  const discount = data.lastWorkshopHistory.discount;
  const price = data.lastWorkshopHistory.price;

  return (
    <CardBase
      className={`flex-col w-full min-w-80 xl:max-w-96 p-4 h-fit ${className}`}
    >
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
