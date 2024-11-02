"use client";
import { usePathname } from "next/navigation";
import TemplateNavUser from "./TemplateNavUser";
import TemplateNavGuest from "./TemplateNavGuest";
import FloatingHelpCenterButton from "../custom/FloatingHelpCenterButton";
import { Account } from "@/libs/entities/Account";

interface TemplateCheckerProps {
  auth: boolean;
  children: React.ReactNode;
  account: Account | null;
}

export default function TemplateNavChecker({
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
        <>
          <TemplateNavUser account={account}>{children}</TemplateNavUser>
          <FloatingHelpCenterButton />
        </>
      ) : (
        <>
          <TemplateNavGuest>{children}</TemplateNavGuest>
          <FloatingHelpCenterButton />
        </>
      )}
    </>
  );
}
