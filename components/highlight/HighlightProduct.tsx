import {
  Search as SearchIcon,
  SlidersHorizontal as SettingIcon,
} from "lucide-react";
import CatalogWorkshop from "../card/CatalogWorkshop";
import CatalogTraining from "../card/CatalogTraining";
import CatalogWebinar from "../card/CatalogWebinar";
import { Input } from "../custom/Input";

interface HighlightProductProps {
  entity: string;
  Card: typeof CatalogWebinar | typeof CatalogTraining | typeof CatalogWorkshop;
  data: any[];
}

export default function HighlightProduct({
  entity,
  Card,
  data,
}: HighlightProductProps) {
  return (
    <>
      {data.length > 0 && (
        <div className="w-full">
          <div className="flex flex-col md:flex-row w-full gap-2">
            <p className="px-4 py-2 bg-[#0041A1] text-white rounded-lg text-center">
              {entity}
            </p>
            <form className="flex gap-2 w-full">
              <Input
                name="search"
                type="text"
                placeholder={`Cari ${entity}`}
                className="border-2 bg-white rounded-lg px-4 py-2 h-10 flex-1"
              />
              <button
                title="Cari"
                className="px-4 py-2 bg-[#0041A1] text-white rounded-lg"
              >
                <SearchIcon />
              </button>
              <button
                title="Pengaturan Pencarian"
                className="px-4 py-2 bg-[#0041A1] text-white rounded-lg"
              >
                <SettingIcon />
              </button>
            </form>
          </div>
          <div
            className={`flex w-full overflow-x-auto max-w-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] gap-4 py-4 ${
              data.length === 1
                ? "items-center justify-center "
                : "lg:items-center lg:justify-center"
            }"`}
          >
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
