import Image from "next/image";
import Link from "next/link";

export default function MitraSection() {
  const mitras = [
    {
      href: "https://grow.google/intl/id_id/certificates/",
      logo: "/logo_google_academy.png",
      label: "Google Academy",
    },
    {
      href: "https://learn.microsoft.com/id-id/training/",
      logo: "/logo_microsoft.png",
      label: "Microsoft",
    },
    {
      href: "https://certiportacademy.com/",
      logo: "/logo_certiport.png",
      label: "Certiport",
    },
    {
      href: "https://mikrotik.com/training/academy",
      logo: "/logo_mikrotik_academy.png",
      label: "Mikrotik Academy",
    },
    {
      href: "https://academy.oracle.com/",
      logo: "/logo_oracle_academy.png",
      label: "Oracle Academy",
    },
    {
      href: "https://www.netacad.com/",
      logo: "/logo_cisco_academy.png",
      label: "Cisco Networking Academy",
    },
  ];
  return (
    <div className="w-full py-8 flex flex-col gap-2 px-2 justify-center items-center">
      <h2 className="text-xl lg:text-3xl font-bold text-center">Mitra Kami</h2>
      <p className="lg:text-lg text-center">
        Berikut adalah daftar mitra yang bekerja sama dengan kami
      </p>
      <div className="flex flex-wrap p-4 gap-4 items-center justify-center">
        {mitras.map(({ href, logo, label }) => (
          <Link key={href} href={href} target="_blank" title={label}>
            <Image src={logo} alt={label} width={140} height={100} />
          </Link>
        ))}
      </div>
    </div>
  );
}
