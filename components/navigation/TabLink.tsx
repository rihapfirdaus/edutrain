"use client";
import {
  Timer as HistoryIcon,
  Hourglass as DelayIcon,
  List as AllIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface TabLinkItem {
  href: string;
  icon: "history" | "delay" | "all";
  label: string;
}

interface TabLinkProps {
  tabs: TabLinkItem[];
}

export default function TabLink({ tabs }: TabLinkProps) {
  const pathName = usePathname();

  const getIcon = (icon: string) => {
    switch (icon) {
      case "history":
        return <HistoryIcon />;
      case "delay":
        return <DelayIcon />;
      case "all":
        return <AllIcon />;
      default:
        return <AllIcon />;
    }
  };

  const pageActive = (page: string): boolean => {
    return pathName === page;
  };

  return (
    <div className="flex gap-2 w-full max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] bg-transparent">
      {tabs.map(({ href, icon, label }) => (
        <Link
          href={href}
          className={`text-lg lg:text-2xl flex gap-2 items-center hover:text-blue-500 ${
            pageActive(href) &&
            "text-blue-500 border-b-2 border-blue-500 font-semibold"
          }`}
        >
          {getIcon(icon)} <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
