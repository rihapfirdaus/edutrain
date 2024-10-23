"use client";
import { usePathname } from "next/navigation";
import TemplateUser from "./TemplateUser";
import TemplateGuest from "./TemplateGuest";
import FloatingHelpCenterButton from "../custom/FloatingHelpCenterButton";

interface TemplateCheckerProps {
  auth: boolean;
  children: React.ReactNode;
  account: any | null;
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
        <>
          <TemplateUser account={account}>{children}</TemplateUser>
          <FloatingHelpCenterButton />
        </>
      ) : (
        <>
          <TemplateGuest>{children}</TemplateGuest>
          <FloatingHelpCenterButton />
        </>
      )}
    </>
  );
}
