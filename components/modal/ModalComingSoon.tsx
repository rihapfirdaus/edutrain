import { Frown as FailedIcon } from "lucide-react";
import Link from "next/link";

export default function ModalComingSoon() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 grid place-items-center z-30">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_1.jpg')",
        }}
        className="flex flex-col justify-center items-center text-white font-bold bg-cover bg-center max-w-80 min-w-80 rounded-3xl min-h-64 shadow-xl relative gap-2 border-2 p-2"
      >
        <FailedIcon size={58} />
        <p className="text-2xl text-center">
          Fitur ini belum tersedia, tunggu info dari kami yaa..
        </p>
        <Link
          href={"/"}
          className="text-white font-bold rounded-lg py-2 px-4 bg-primary text-center shadow-lg hover:"
        >
          kembali ke dashboard
        </Link>
      </div>
    </div>
  );
}
