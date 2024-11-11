import {
  LaptopMinimal as WebinarIcon,
  BriefcaseBusiness as JobRoleIcon,
  Presentation as WorkshopIcon,
  Library as TrainingIcon,
  CircleHelp as HelpIcon,
  MessagesSquare as ForumIcon,
} from "lucide-react";
import Link from "next/link";

interface MenuProps {
  auth: boolean;
  account: any | null;
}

export default function Menu({ auth, account }: MenuProps) {
  const menus = [
    { href: "/webinar", Icon: WebinarIcon, label: "Webinar" },
    { href: "/workshop", Icon: WorkshopIcon, label: "Workshop" },
    { href: "/training", Icon: TrainingIcon, label: "Training" },
    // { href: "/job-role", Icon: JobRoleIcon, label: "Job Role" },
    // { href: "/forum-diskusi", Icon: ForumIcon, label: "Forum Diskusi" },
    { href: "/faq", Icon: HelpIcon, label: "Pusat Bantuan" },
  ];
  return (
    // <div className="py-8 px-12 flex flex-col gap-4 self-center justify-center items-center rounded-3xl text-white font-bold bg-cover bg-blend-color-burn bg-center bg-[url('/bg_uin_2.jpg')] bg-[#008ED6]">
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_4.jpeg')",
      }}
      className="min-h-[40rem] py-4 flex flex-col gap-4 max-w-full justify-end items-center text-white font-bold bg-cover bg-center"
    >
      {auth && account ? (
        <>
          <p className="text-lg xl:text-3xl text-center">
            Halo {account.fullname}, selamat datang di Edutrain.
          </p>
          <p className="text-md xl:text-2xl">
            Pilih layanan sesuai minat anda:
          </p>
        </>
      ) : (
        <p className="text-lg xl:text-2xl text-center">
          Pilih layanan sesuai minat anda:
        </p>
      )}
      <div className="flex gap-4 max-w-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] overflow-x-scroll p-4">
        {menus.map(({ href, Icon, label }) => (
          <Link
            key={href}
            href={href}
            className="max-w-40 min-w-40 p-4 text-center bg-white text-blue-950 flex flex-col gap-2 justify-center items-center rounded-xl hover:scale-105 "
          >
            <Icon size={36} />
            <p>{label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
