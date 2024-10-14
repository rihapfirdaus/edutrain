"use client";
import { useEffect, useState } from "react";
import { Search as SearchIcon, Trash2 as DeleteIcon } from "lucide-react";
import CheckBox from "../custom/CheckBox";
import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";

interface TransactionTableProps {
  checkAll?: boolean;
  checkBox?: boolean;
  action?: boolean;
  footer?: boolean;
  value?: (
    selected: number[],
    totalPrice: number,
    totalQuantity: number
  ) => void;
}

export default function TransactionTable({
  checkAll,
  checkBox,
  action,
  footer,
  value,
}: TransactionTableProps) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const rows = [...Array(5)].map((_, index) => ({
    id: index,
    name: "Kelas " + (index + 1),
    type: isPrime(index + 1)
      ? "Training"
      : (index + 1) % 2 === 0
      ? "Workshop"
      : "Webinar",
    benefit: "Sertifikat",
    quantity: index + 1,
    price: 20000 * (index + 1),
  }));

  function isPrime(num: number) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const isAllChecked = selectedRows.size === rows.length;
  const isPartiallyChecked = selectedRows.size > 0 && !isAllChecked;

  const toggleAll = () => {
    if (isAllChecked) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(rows.map((row) => row.id)));
    }
  };

  const toggleRow = (id: number) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const selectedItems = rows.filter((row) => selectedRows.has(row.id));
  const totalQuantity = selectedItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    if (checkAll) {
      setSelectedRows(new Set(rows.map((row) => row.id)));
    }
  }, [checkAll, rows]);

  useEffect(() => {
    if (value) {
      const selectedIds = Array.from(selectedRows);
      value(selectedIds, totalPrice, totalQuantity);
    }
  }, [selectedRows, totalPrice, totalQuantity, value]);

  return (
    <table className="table-fixed overflow-clip rounded-lg w-full min-w-[58rem]">
      <thead>
        <tr className="bg-[#0041A1] text-white">
          {checkBox && (
            <th className="px-2 w-[3.5%]">
              <CheckBox
                checked={isAllChecked}
                icon={isAllChecked ? "reset" : "check"}
                setChecked={toggleAll}
              />
            </th>
          )}
          <th className="p-4 w-1/3 text-start">Nama Kelas</th>
          <th className="p-4 w-1/12 text-center">Jenis Kelas</th>
          <th className="p-4 w-1/6 text-start">Benefit</th>
          <th className="p-4 w-1/12 text-end">Jumlah</th>
          <th className="p-4 w-1/6 text-end">Harga</th>
          {action && <th className="p-4 w-1/12 text-center">Aksi</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => (
          <tr
            key={item.id}
            className={`border-b hover:bg-[#fff] cursor-pointer ${
              selectedRows.has(item.id) && "bg-white"
            }`}
            onClick={checkBox ? () => toggleRow(item.id) : undefined}
          >
            {checkBox && (
              <td className="px-2 w-[3.5%]">
                <CheckBox
                  checked={selectedRows.has(item.id)}
                  setChecked={() => toggleRow(item.id)}
                />
              </td>
            )}
            <td className="p-4">{item.name}</td>
            <td className="p-4 text-center">
              <span
                className={`p-2 ${
                  item.type === "Webinar"
                    ? "bg-red-500"
                    : item.type === "Training"
                    ? "bg-green-500"
                    : item.type === "Workshop"
                    ? "bg-blue-500"
                    : "bg-orange-500"
                } text-white rounded-lg`}
              >
                {item.type}
              </span>
            </td>
            <td className="p-4">{item.benefit}</td>
            <td className="p-4 text-end">{item.quantity}</td>
            <td className="p-4 text-end">{currencyFormatter(item.price)}</td>
            {action && (
              <td>
                <span className="p-4 flex justify-center items-center gap-2">
                  <button title="lihat">
                    <SearchIcon
                      size={28}
                      className="p-1 bg-[#d4d4d4] rounded-lg"
                    />
                  </button>
                  <button title="hapus">
                    <DeleteIcon
                      size={28}
                      className="p-1 text-white rounded-lg bg-red-500"
                    />
                  </button>
                </span>
              </td>
            )}
          </tr>
        ))}
        {footer && (
          <tr className="border-b bg-blue-200">
            <td
              colSpan={checkBox ? 4 : 3}
              className="p-4 text-center font-bold"
            >
              Total
            </td>
            <td className="p-4 text-end font-bold">{totalQuantity}</td>
            <td colSpan={action ? 2 : 1} className="p-4 text-end font-bold">
              {currencyFormatter(totalPrice)}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
