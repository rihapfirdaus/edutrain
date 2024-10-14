import React from "react";
import CardBase from "./CardBase";
import {
  Building2 as CompanyIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
} from "lucide-react";
import { Account } from "@/libs/actions/auth/cookieHandler";
import { phoneFormatter } from "@/libs/helpers/formatter/phoneFormatter";
import ImageUser from "../custom/ImageUser";

interface MiniProfileProps {
  showAsCard?: boolean;
  className?: string;
  account: Account | null;
}

export default function MiniProfile({
  showAsCard = false,
  className,
  account,
}: MiniProfileProps) {
  const Wrapper = showAsCard ? CardBase : "div";

  return (
    <Wrapper
      className={`flex flex-col justify-center items-center gap-4 w-full lg:max-w-80 min-w-80 px-4 py-8 ${className}`}
    >
      <ImageUser size="xl" shape="squircle" className="shadow-md" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-xl text-center">
          {account?.fullname || "Nama"}
        </h2>
        <p className="text-center">{account?.username || "username"}</p>
      </div>
      <div className="w-full max-w-[calc(100%-2rem)] flex flex-col gap-2">
        <p className=" flex gap-2 justify-center items-center w-full">
          <CompanyIcon
            color="#008ED6"
            size={40}
            className="p-2 bg-[#f4f4f4] rounded-xl"
          />
          <span className="font-semibold flex-grow">
            {account?.organization || "belum diatur"}
          </span>
        </p>
        <p className=" flex gap-2 justify-center items-center w-full">
          <PhoneIcon
            color="#008ED6"
            size={40}
            className="p-2 bg-[#f4f4f4] rounded-xl"
          />
          <span className="font-semibold flex-grow">
            {(account?.phone && phoneFormatter(account.phone)) ||
              "belum diatur"}
          </span>
        </p>
        <p className=" flex gap-2 justify-center items-center w-full">
          <MailIcon
            color="#008ED6"
            size={40}
            className="p-2 bg-[#f4f4f4] rounded-xl"
          />
          <span className="font-semibold flex-grow">
            {account?.email || "belum diatur"}
          </span>
        </p>
      </div>
    </Wrapper>
  );
}
