"use client";
import { usePathname } from "next/navigation";
import TemplateUser from "./TemplateUser";
import TemplateGuest from "./TemplateGuest";
import { Account } from "@/libs/actions/auth/cookieHandler";

interface TemplateCheckerProps {
  auth: boolean;
  children: React.ReactNode;
  account: Account | null;
}

export default function TemplateChecker({
  auth,
  children,
  account,
}: TemplateCheckerProps) {
  const pathName = usePathname();

  const authPages = ["register", "login", "forgot-password", "reset-password"];
  const isAuthPage = authPages.some((page) => pathName.includes(page));

  return (
    <>
      {isAuthPage ? (
        children
      ) : auth ? (
        <TemplateUser account={account}>{children}</TemplateUser>
      ) : (
        <TemplateGuest>{children}</TemplateGuest>
      )}
    </>
  );
}
