"use client";
import { Input } from "@/components/custom/Input";
import TransactionTable from "@/components/table/TransactionTable";
import TemplateTransaction from "@/components/template/TemplateTransaction";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <TemplateTransaction>
      <div className="w-full overflow-x-auto">
        <TransactionTable />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-6 w-full">
        <div className="flex-grow flex flex-col gap-2 ">
          <div className="border-2 px-2 py-4 text-xl font-bold text-blue-500 flex justify-between items-center bg-white">
            <p>Total:</p>
            <p>{currencyFormatter(800000)}</p>
          </div>
          <div className="border-2 p-2 flex flex-col gap-2 bg-[#d9d9d9]">
            <span className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p>{currencyFormatter(850000)}</p>
            </span>
            <p className="font-bold">Voucher</p>
            <span className="flex items-center justify-between">
              <p>KODE VOUCHER</p>
              <p>{currencyFormatter(-50000)}</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full lg:max-w-96 gap-2 justify-end">
          <form className="flex gap-2">
            <Input
              name="voucher"
              placeholder="Masukkan kode voucher"
              type="text"
            />
            <button
              type="submit"
              className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
            >
              Klaim
            </button>
          </form>
          <p className="text-yellow-500 text-sm font-semibold">
            *Voucher berhasil digunakan!
          </p>
          <p className="font-bold rounded-lg p-2 bg-gray-400 text-white text-center">
            Pilih metode pembayaran
          </p>
          <Link
            href={"/transaction/history"}
            className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
          >
            Bayar Sekarang
          </Link>
        </div>
      </div>
    </TemplateTransaction>
  );
}
