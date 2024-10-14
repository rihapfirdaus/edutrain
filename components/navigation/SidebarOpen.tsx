import { LucideIcon } from "lucide-react";
import { Menu as CloseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SidebarItem {
  href: string;
  Icon: LucideIcon;
  label: string;
}

interface SidebarOpenProps {
  sidebars: SidebarItem[];
  toggleSidebar: () => void;
  pageActive: (page: string) => boolean;
}

export default function SidebarOpen({
  sidebars,
  toggleSidebar,
  pageActive,
}: SidebarOpenProps) {
  return (
    <nav
      className={`fixed min-w-64 max-w-64 bg-[#0f172a] top-0 bottom-0 left-0 z-20 px-4 py-4 gap-2 flex flex-col items-center overflow-y-auto transition-all duration-500`}
    >
      <button
        className="sticky top-0 right-0 self-end text-white"
        onClick={toggleSidebar}
      >
        <CloseIcon size={36} />
      </button>
      <Image
        src="/edutrain_square_blue.png"
        width={500}
        height={500}
        alt="logo"
        className="select-none pointer-events-none"
      />
      <div className="flex flex-col w-full gap-4">
        {sidebars.map(({ href, Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex gap-4 px-4 p-3 w-full text-white rounded self-start items-center hover:bg-gradient-to-r from-[#0041A1] to-[#008ED6] ${
              pageActive(href)
                ? "bg-gradient-to-r from-[#0041A1] to-[#008ED6]"
                : ""
            }`}
          >
            <Icon />
            <p>{label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
