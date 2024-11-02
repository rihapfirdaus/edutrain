import { Frown as EmptyIcon } from "lucide-react";
import Link from "next/link";

interface ModalEmptyProps {
  message: string;
}

export default function ModalEmpty({ message }: ModalEmptyProps) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_2.jpg'",
      }}
      className="flex flex-col gap-4 justify-center items-center text-white bg-cover bg-center rounded-3xl p-12 h-fit"
    >
      <EmptyIcon color="white" size={40} strokeWidth={1.5} />
      <p className="text-lg font-bold text-center">{message}</p>
      <Link
        href={"/"}
        className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:scale-105"
      >
        Kembali Ke Dashbord
      </Link>
    </div>
  );
}
