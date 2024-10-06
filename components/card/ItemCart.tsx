import Image from "next/image";
import { Trash2 as DeleteIcon } from "lucide-react";

export default function ItemCart() {
  return (
    <div className="p-2 flex gap-2 items-center hover:bg-[#e9e9e9] cursor-pointer w-full">
      <Image
        src="/bg_uin_1.jpg"
        alt="cart image"
        width={480}
        height={240}
        className="w-24 rounded-md hidden lg:block"
      />
      <div className="flex flex-col flex-grow max-w-[calc(100%-2.5rem)] lg:max-w-[calc(100%-8.5rem)]">
        <h3 className="font-bold truncate overflow-hidden whitespace-nowrap">
          Nama Cart Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptas tempora quos facilis.
        </h3>
        <p className="text-sm">Rp. 30.0000</p>
      </div>
      <DeleteIcon className="text-[#d4d4d4] hover:text-red-800 cursor-pointer ml-auto" />
    </div>
  );
}
