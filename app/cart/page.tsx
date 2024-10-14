"use client";
import { useState } from "react";
import TransactionTable from "@/components/table/TransactionTable";
import TemplateTransaction from "@/components/template/TemplateTransaction";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";
import Link from "next/link";

export default function CartPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <TemplateTransaction>
      <div className="w-full overflow-x-auto">
        <TransactionTable
          action
          checkBox
          value={(selectedItems, totalPriceValue, totalQuantityValue) => {
            setSelected(selectedItems);
            setTotalPrice(totalPriceValue);
            setTotalQuantity(totalQuantityValue);
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2 justify-end">
        {selected.length > 0 && (
          <p className="font-bold rounded-lg p-2 bg-gray-400 text-white text-center">
            Total belanja: {currencyFormatter(totalPrice)} ({totalQuantity}{" "}
            item)
          </p>
        )}
        <Link
          href={"/transaction/payment"}
          className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
        >
          Bayar Sekarang
        </Link>
      </div>
    </TemplateTransaction>
  );
}
