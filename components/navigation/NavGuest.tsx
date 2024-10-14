import Image from "next/image";
import Link from "next/link";
import { Phone as PhoneIcon, Mail as MailIcon } from "lucide-react";

interface NavLinkItem {
  href: string;
  label: string;
  desc: string;
}

interface NavGuestProps {
  navlinks: NavLinkItem[];
}

export default function NavGuest({ navlinks }: NavGuestProps) {
  return (
    <nav className="fixed left-0 top-0 right-0 min-h-28 max-h-28 z-20">
      <div className="flex bg-[#0040A1] min-h-8 max-h-8 text-white px-4 xl:px-10 py-2 justify-center md:justify-between items-center">
        <section className="md:flex gap-4 hidden ">
          <Link
            href="https://wa.me/+6281214030521"
            target="_blank"
            className="flex items-center justify-center gap-2 hover:underline"
          >
            <PhoneIcon size={18} />
            <p>+62 (812) 1403 0521</p>
          </Link>
          <Link
            href="mailto:info@uinsgd.ac.id"
            target="_blank"
            className="flex items-center justify-center gap-2 hover:underline"
          >
            <MailIcon size={18} />
            <p>info@uinsgd.ac.id</p>
          </Link>
        </section>
        <section className="flex gap-4 text-sm md:text-base">
          {navlinks.map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              title={desc}
              className="hover:underline"
            >
              {label}
            </Link>
          ))}
        </section>
      </div>
      <div className="flex px-4 xl:px-10 py-2 min-h-20 max-h-20 justify-between items-center bg-gradient-to-r from-[#0041A1] to-[#008ED6]">
        <Link href="/">
          <Image
            src="/edutrain_logo_white.png"
            alt="Logo Edutrain"
            width={160}
            height={100}
            priority={true}
            className="select-none pointer-events-none max-w-28 md:max-w-48 w-auto h-auto"
          />
        </Link>
        <section className="flex gap-4 text-white">
          <Link href={"/auth/login"} className="px-4 py-2 hover:underline">
            Masuk
          </Link>
          <Link href={"/auth/register"} className="px-4 py-2 hover:underline">
            Daftar
          </Link>
        </section>
      </div>
    </nav>
  );
}
