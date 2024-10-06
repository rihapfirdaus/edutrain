import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SidebarItem {
  href: string;
  Icon: LucideIcon;
  label: string;
}

interface SidebarOpenProps {
  sidebars: SidebarItem[];
  pageActive: (page: string) => boolean;
}

export default function SidebarClosed({
  sidebars,
  pageActive,
}: SidebarOpenProps) {
  return (
    <nav className="fixed min-w-20 max-w-20 bg-[#0f172a] top-0 bottom-0 left-0 z-10 px-2 pt-24 pb-4 gap-4 flex flex-col items-center overflow-y-auto transition-all duration-500">
      <div className="flex flex-col w-full gap-4">
        {sidebars.map(({ href, Icon, label }) => (
          <Link
            title={label}
            key={href}
            href={href}
            className={`flex p-2 w-full text-white rounded self-start justify-center items-center hover:bg-gradient-to-r from-[#0041A1] to-[#008ED6] ${
              pageActive(href)
                ? "bg-gradient-to-r from-[#0041A1] to-[#008ED6]"
                : ""
            }`}
          >
            <Icon size={32} />
          </Link>
        ))}
      </div>
    </nav>
  );
}
