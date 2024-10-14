import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import CardBase from "./CardBase";
import Link from "next/link";

export default function TransactionDone() {
  return (
    <CardBase className="flex-col md:flex-row lg:max-w-none justify-between items-center w-full gap-2 p-2">
      <div className="flex flex-col gap-2 w-full lg:min-w-80">
        <h3 className="font-bold text-xl">Pembelian Workshop X</h3>
        <p className="bg-green-500 text-white py-1 px-2 rounded-lg text-sm w-fit">
          Pembayaran Selesai
        </p>
        <div>
          <p className="text-blue-500 font-bold">
            Total: {currencyFormatter(200000)}
          </p>
          <p>12 Maret 2024 pukul 12.41 WIB</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:max-w-80 lg:min-w-80 h-fit mb-auto">
        <Link
          href={"/transaction/id"}
          className="flex-grow p-2 bg-[#969696] text-white flex justify-center rounded-lg"
        >
          Lihat Rincian Pesanan
        </Link>
      </div>
    </CardBase>
  );
}
