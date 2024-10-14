import React from "react";
import CardBase from "./CardBase";
import { Award as BadgeIcon } from "lucide-react";

interface MiniPointProps {
  showAsCard?: boolean;
  className?: string;
}

export default function MiniPoint({
  showAsCard = false,
  className,
}: MiniPointProps) {
  const Wrapper = showAsCard ? CardBase : "div";

  return (
    <Wrapper
      className={`flex flex-col justify-center items-center gap-4 w-full lg:max-w-80 min-w-80 px-4 py-8 ${className}`}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl text-center">Poin Edutrain</h2>
        <p className="text-center">Membership</p>
      </div>
      <div className="w-full max-w-[calc(100%-2rem)] flex gap-2 items-center">
        <BadgeIcon
          color="#fff"
          size={64}
          className="p-2 bg-yellow-500 rounded-xl"
        />
        <div>
          <p className="font-bold text-lg">250 Poin (Gold)</p>
          <p className="text-sm">Update terakhir:</p>
          <p className="text-sm">23 Mei 2024, 23.00 WIB</p>
        </div>
      </div>
      <div className="w-full max-w-[calc(100%-2rem)] flex flex-col">
        <p>Benefit</p>
        <ul className="list-outside">
          <li>Potongan Diskon 20% untuk setiap kursus</li>
          <li>Akses Materi dengan lebih cepat</li>
        </ul>
      </div>
    </Wrapper>
  );
}
