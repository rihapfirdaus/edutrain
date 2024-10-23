"use client";
import { LogOut as LogOutIcon } from "lucide-react";
import { useState } from "react";
import { Frown as FailedIcon } from "lucide-react";
import ModalAction from "../modal/ModalAction";
import Link from "next/link";
import ImageUser from "../custom/ImageUser";
import { FinalReturn, logoutAccount } from "@/libs/actions/auth/actions";

interface DropdownProfileProps {
  account: any | null;
}

export default function DropdownProfile({ account }: DropdownProfileProps) {
  const [response, setResponse] = useState<FinalReturn | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result: FinalReturn | void = await logoutAccount();

    setLoading(false);

    if (result) {
      setResponse(result);
    }
  };
  return (
    <>
      <Link href={"/profile"} className="flex gap-2 p-2 hover:bg-[#e9e9e9]">
        <ImageUser size="md" shape="squircle" className="shadow-md" />
        <div className="flex flex-col justify-center flex-grow max-w-[calc(100%-4rem)]">
          <h2 className="font-bold truncate overflow-hidden whitespace-nowrap">
            {account?.fullname}
          </h2>
          <p className="text-sm truncate overflow-hidden whitespace-nowrap">
            {account?.username}
          </p>
        </div>
      </Link>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="flex gap-2 p-2 justify-center items-center flex-row-reverse w-full hover:bg-[#e9e9e9]"
        >
          <LogOutIcon className="text-[#d4d4d4]" />
          <span className="flex-grow text-start">Logout</span>
        </button>
      </form>
      {response && (
        <ModalAction action={() => setResponse(undefined)}>
          <FailedIcon size={58} />
          <p className="text-2xl text-center">{response.message}</p>
          <button
            className="text-white font-bold rounded-lg py-2 px-4 bg-[#0041A1] text-center shadow-lg hover:"
            onClick={() => setResponse(undefined)}
          >
            OK
          </button>
        </ModalAction>
      )}
    </>
  );
}
