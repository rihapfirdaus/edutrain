import { LucideIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import DropdownProfile from "./DropdownProfile";
import { Account } from "@/libs/entities/Account";

// interface NavItem {
//   Action: typeof DropdownCart | typeof DropdownNotification;
//   Icon: LucideIcon;
//   label: string;
// }

interface NavUserProps {
  // navs: NavItem[];
  toggleSidebar: () => void;
  account: Account | null;
}

export default function NavUser({
  // navs,
  toggleSidebar,
  account,
}: NavUserProps) {
  return (
    <>
      <nav className="fixed left-0 top-0 right-0 min-h-20 max-h-20 z-20">
        <div className="flex px-4 xl:px-10 py-2 min-h-20 max-h-20 justify-between items-center bg-gradient-to-r from-primary to-[#008ED6]">
          <button onClick={toggleSidebar}>
            <Image
              src="/edutrain_logo_white.png"
              alt="Logo Edutrain"
              width={160}
              height={100}
              priority={true}
              className="select-none pointer-events-none max-w-28 md:max-w-48 w-auto h-auto"
            />
          </button>
          <section className="flex gap-2 md:gap-4 text-white">
            {/* {navs.map(({ Action, Icon, label }) => (
              <Dropdown key={label}>
                <button
                  title={label}
                  type="button"
                  className="hidden px-4 py-2 sm:flex justify-center items-center"
                >
                  <Icon />
                </button>
                <Action />
              </Dropdown>
            ))} */}
            <Dropdown>
              <button
                title="Akun"
                type="button"
                className="px-4 py-2 flex justify-center items-center"
              >
                <UserIcon />
              </button>
              <DropdownProfile account={account} />
            </Dropdown>
          </section>
        </div>
      </nav>
    </>
  );
}
