import type { Metadata } from "next";
import "./globals.css";
import TemplateChecker from "@/components/template/TemplateChecker";
import { auth } from "@/libs/actions/auth/tokenHandler";
import FloatingHelpCenterButton from "@/components/custom/FloatingHelpCenterButton";
import axiosInstance from "@/utils/axiosInstance";

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
  let account = [];
  let error = { status: false, message: "" };

  try {
    const response = await axiosInstance.get("/profile");
    const accountData = response.data.data;
    console.log(accountData);

    if (!accountData || accountData.length === 0) {
      error = { status: true, message: "Webinar belum tersedia." };
    } else {
      account = accountData;
    }
  } catch (err: any) {
    const errorMessage = "Terjadi kesalahan, silakan coba lagi.";
    error = { status: true, message: errorMessage };
  }

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
