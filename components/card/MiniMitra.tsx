import Link from "next/link";
import CardBase from "./CardBase";
import Image from "next/image";

export default function MiniMitra() {
  const mitras = [
    {
      href: "https://www.netacad.com/",
      logo: "/logo_cisco_academy.png",
      label: "Cisco Networking Academy",
    },
    {
      href: "https://learn.microsoft.com/id-id/training/",
      logo: "/logo_microsoft.png",
      label: "Microsoft",
    },
    {
      href: "https://mikrotik.com/training/academy",
      logo: "/logo_mikrotik_academy.png",
      label: "Mikrotik Academy",
    },
    {
      href: "https://certiportacademy.com/",
      logo: "/logo_certiport.png",
      label: "Certiport",
    },
    {
      href: "https://academy.oracle.com/",
      logo: "/logo_oracle_academy.png",
      label: "Oracle Academy",
    },
    {
      href: "https://grow.google/intl/id_id/certificates/",
      logo: "/logo_google_academy.png",
      label: "Google Academy",
    },
  ];
  return (
    <CardBase className="w-full px-2 p-4 flex-col">
      <h3 className="text-xl lg:text-2xl font-bold text-center">Mitra Kami</h3>
      <div className="flex flex-wrap p-4 items-center justify-center">
        {mitras.map(({ href, logo, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            title={label}
            className="p-4"
          >
            <Image src={logo} alt={label} width={140} height={100} />
          </Link>
        ))}
      </div>
    </CardBase>
  );
}
