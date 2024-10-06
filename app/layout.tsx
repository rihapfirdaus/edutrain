import type { Metadata } from "next";
import "./globals.css";
import TemplateChecker from "@/components/template/TemplateChecker";
import { auth } from "@/libs/actions/auth/tokenHandler";
import { getAccount } from "@/libs/actions/auth/cookieHandler";
import FloatingHelpCenterButton from "@/components/custom/FloatingHelpCenterButton";

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
  const account = await getAccount();
  return (
    <html lang="in">
      <body>
        <TemplateChecker auth={isAuth} account={account}>
          {children}
        </TemplateChecker>
        <FloatingHelpCenterButton />
      </body>
    </html>
  );
}
