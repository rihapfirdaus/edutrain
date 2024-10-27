"use client";
import { LogOut as LogOutIcon } from "lucide-react";
import Link from "next/link";
import ImageUser from "../custom/ImageUser";
import { actionLogoutAccount } from "@/libs/actions/actionLogoutAccount";
import { capitalizeEachWord } from "@/libs/helpers/formatter/stringFormatter";

interface DropdownProfileProps {
  account: any | null;
}

export default function DropdownProfile({ account }: DropdownProfileProps) {
  const handleSubmit = async () => {
    await actionLogoutAccount();
  };
  return (
    <>
      <Link href={"/profile"} className="flex gap-2 p-2 hover:bg-[#e9e9e9]">
        <ImageUser size="md" shape="squircle" className="shadow-md" />
        <div className="flex flex-col justify-center flex-grow max-w-[calc(100%-4rem)]">
          <h2 className="font-bold truncate overflow-hidden whitespace-nowrap">
            {capitalizeEachWord(account?.fullname)}
          </h2>
          <p className="text-sm truncate overflow-hidden whitespace-nowrap">
            {account?.username}
          </p>
        </div>
      </Link>

      <button
        onClick={handleSubmit}
        className="flex gap-2 p-2 justify-center items-center flex-row-reverse w-full hover:bg-[#e9e9e9]"
      >
        <LogOutIcon className="text-[#d4d4d4]" />
        <span className="flex-grow text-start">Logout</span>
      </button>
    </>
  );
}
