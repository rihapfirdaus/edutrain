import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import CardBase from "./CardBase";
import { Power as ExpiredIcon } from "lucide-react";
import Link from "next/link";

export default function TransactionPending() {
  return (
    <CardBase className="flex-col md:flex-row lg:max-w-none justify-between items-center w-full gap-2 p-2">
      <div className="flex flex-col gap-2 w-full lg:min-w-80">
        <h3 className="font-bold text-xl">Pembelian Workshop X</h3>
        <p className="bg-red-500 text-white py-1 px-2 rounded-lg text-sm w-fit">
          Menunggu Pembayaran
        </p>
        <div>
          <p className="text-blue-500 font-bold">
            Total: {currencyFormatter(200000)}
          </p>
          <p>12 Maret 2024 pukul 12.41 WIB</p>
          <p className="flex items-center text-sm gap-2 text-yellow-500 font-semibold">
            <ExpiredIcon />{" "}
            <span>Kadaluarsa pada 13 Maret 2024 pukul 12.41 WIB</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:max-w-80 lg:min-w-80 h-fit">
        <Link
          href={"/transaction/payment"}
          className="flex-grow p-2 bg-[#0041A1] text-white flex justify-center rounded-lg h-fit"
        >
          Bayar Sekarang
        </Link>
        <Link
          href={"#"}
          className="flex-grow p-2 bg-red-500 text-white flex justify-center rounded-lg h-fit"
        >
          Batalkan
        </Link>
        <Link
          href={"/cart"}
          className="flex-grow p-2 bg-[#969696] text-white flex justify-center rounded-lg h-fit"
        >
          Lihat Rincian
        </Link>
      </div>
    </CardBase>
  );
}
