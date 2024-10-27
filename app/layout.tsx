import type { Metadata } from "next";
import "./globals.css";
import TemplateChecker from "@/components/template/TemplateChecker";
import { auth } from "@/libs/actions/tokenHandler";
import FloatingHelpCenterButton from "@/components/custom/FloatingHelpCenterButton";
import { getAccount } from "@/libs/fetchs/fetchAccount";
import { Account } from "@/libs/entities/Account";
import LoadingProvider from "@/components/provider/LoadingProvider";
import ModalProvider from "@/components/provider/ModalProvider";

export const metadata: Metadata = {
  title: "EduTrain",
  description:
    "Train of Education for Training and Educate yourself presented by UIN Sunan Gunung Djati Bandung",
  keywords:
    "edutrain, uin bandung, edutrain uin bandung, edutrain uin sunan gunung djati",
  openGraph: {
    title: "EduTrain",
    description:
      "Train of Education for Training and Educate yourself presented by UIN Sunan Gunung Djati Bandung",
    images: "/edutrain_rocket.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await auth();
  const account: Account = await getAccount();

  return (
    <html lang="in">
      <body>
        <LoadingProvider>
          <ModalProvider>
            <TemplateChecker auth={isAuth} account={account}>
              {children}
            </TemplateChecker>
            <FloatingHelpCenterButton />
          </ModalProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
