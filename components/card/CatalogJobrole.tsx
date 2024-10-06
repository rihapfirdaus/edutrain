import CardBase from "./CardBase";
import { LayoutDashboard as DefaultIcon } from "lucide-react";

export default function CatalogJobrole() {
  return (
    <CardBase
      href="/job-role/id"
      className="flex-col text-black min-w-48 max-w-48 min-h-28 p-2 justify-center items-center"
    >
      <DefaultIcon size={40} strokeWidth={1.5} />
      <span className="text-xl text-center">Cyber Security Manajer</span>
    </CardBase>
  );
}
