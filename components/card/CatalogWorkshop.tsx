import Image from "next/image";
import CardBase from "./CardBase";
import { ShoppingCart as CartIcon, List as DetailIcon } from "lucide-react";
import Link from "next/link";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";

interface CatalogWorkshopProps {
  data: any;
}

export default function CatalogWorkshop({ data }: CatalogWorkshopProps) {
  const discount = data.lastWorkshopHistory.discount;
  const price = data.lastWorkshopHistory.price;

  return (
    <CardBase
      showStatus
      createdDate={data.createdAt}
      eventDate={data.startTime}
      className="flex-col min-w-80 max-w-80"
    >
      <Image
        src={data.banner}
        alt={data.title}
        width={480}
        height={240}
        className="h-44 object-cover object-center"
      />

      <Link href={`/workshop/${data.id}`} className="flex flex-col gap-2 p-2">
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
        <div className="flex gap-2">
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
        </div>
      </div>
    </CardBase>
  );
}
