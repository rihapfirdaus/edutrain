"use client";

import NavUser from "../navigation/NavUser";
import {
  Home as HomeIcon,
  LaptopMinimal as WebinarIcon,
  BriefcaseBusiness as JobRoleIcon,
  Presentation as WorkshopIcon,
  Library as TrainingIcon,
  CircleHelp as HelpIcon,
  UserRound as ProfileIcon,
  Wallet as TransactionIcon,
  Bell as NotificationIcon,
  ShoppingCart as CartIcon,
} from "lucide-react";
import SidebarClosed from "../navigation/SidebarClosed";
import SidebarOpen from "../navigation/SidebarOpen";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "../navigation/Footer";
import DropdownCart from "../navigation/DropdownCart";
import DropdownNotification from "../navigation/DropdownNotification";

interface TemplateUserProps {
  children: React.ReactNode;
  account: any | null;
}

export default function TemplateUser({ children, account }: TemplateUserProps) {
  const [sidebar, setSidebar] = useState(false);

  const pathName = usePathname();

  const toggleSidebar = () => setSidebar(!sidebar);

  const pageActive = (page: string): boolean => {
    return pathName === page
      ? true
      : pathName.startsWith(page) && page !== "/"
      ? true
      : false;
  };

  const navs = [
    { Action: DropdownCart, Icon: CartIcon, label: "Keranjang", href: "/cart" },
    {
      Action: DropdownNotification,
      Icon: NotificationIcon,
      label: "Notifikasi",
    },
  ];

  const sidebars = [
    { href: "/", Icon: HomeIcon, label: "Semua Akses" },
    { href: "/webinar", Icon: WebinarIcon, label: "Webinar" },
    // { href: "/job-role", Icon: JobRoleIcon, label: "Job Role" },
    { href: "/workshop", Icon: WorkshopIcon, label: "Workshop" },
    { href: "/training", Icon: TrainingIcon, label: "Training" },
    // { href: "/cart", Icon: CartIcon, label: "Keranjang" },
    { href: "/transaction", Icon: TransactionIcon, label: "Transaksi" },
    // { href: "/notification", Icon: NotificationIcon, label: "Info" },
    { href: "/profile", Icon: ProfileIcon, label: "Profile" },
    { href: "/faq", Icon: HelpIcon, label: "Pusat Bantuan" },
  ];
  return (
    <div className="flex flex-col">
      <div className="min-h-20 max-h-20">
        <NavUser navs={[]} account={account} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex">
        {sidebar ? (
          <div className="xl:min-w-64 xl:max-w-64">
            <SidebarOpen
              sidebars={sidebars}
              toggleSidebar={toggleSidebar}
              pageActive={pageActive}
            />
          </div>
        ) : (
          <div className="hidden xl:block min-w-20 max-w-20">
            <SidebarClosed sidebars={sidebars} pageActive={pageActive} />
          </div>
        )}
        <div
          className={`flex flex-col h-screen overflow-x-hidden w-full xl:w-auto flex-grow xl:max-w-[calc(100%-${
            sidebar ? "16rem" : "5rem"
          })] overflow-x-hidden`}
        >
          <div className="flex flex-col flex-grow">{children}</div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
