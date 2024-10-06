import {
  Search as SearchIcon,
  SlidersHorizontal as SettingIcon,
} from "lucide-react";
import CatalogWorkshop from "../card/CatalogWorkshop";
import CatalogTraining from "../card/CatalogTraining";
import CatalogWebinar from "../card/CatalogWebinar";

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
          <div className="flex w-full gap-2">
            <p className="px-4 py-2 bg-[#0041A1] text-white rounded-lg">
              {entity}
            </p>
            <input
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
          </div>
          <div className="flex overflow-x-auto max-w-[calc(100%-2rem)] m-4 gap-4 lg:items-center lg:justify-center py-4">
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
