import {
  Search as SearchIcon,
  SlidersHorizontal as SettingIcon,
} from "lucide-react";
import CatalogWebinar from "../card/CatalogWebinar";
import CatalogTraining from "../card/CatalogTraining";
import CatalogWorkshop from "../card/CatalogWorkshop";
import ModalEmpty from "@/components/modal/ModalEmpty";
import TabLink, { TabLinkItem } from "../navigation/TabLink";

interface TemplateCatalogWithCard {
  title: string;
  entity: string;
  Card: typeof CatalogWebinar | typeof CatalogTraining | typeof CatalogWorkshop;
  data: any[];
  error: { status: boolean; message: string };
  auth: boolean;
  tabs?: TabLinkItem[];
}

interface TemplateCatalogWithChildren {
  title: string;
  entity: string;
  error: { status: boolean; message: string };
  auth: boolean;
  tabs?: TabLinkItem[];
  children: React.ReactNode;
}

type TemplateCatalogProps =
  | TemplateCatalogWithCard
  | TemplateCatalogWithChildren;

export default function TemplateCatalog(props: TemplateCatalogProps) {
  const { title, entity, error, auth, tabs } = props;

  return (
    <div className="flex flex-col items-center gap-4 xl:gap-6 py-8 min-h-[45rem] bg-[#f4f4f4]">
      {auth && tabs ? (
        <TabLink tabs={tabs} />
      ) : (
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">{title}</h1>
      )}
      <div className="flex w-full max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] gap-2">
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

      <div
        className={`flex ${
          error.status
            ? "flex-grow justify-center items-center"
            : "flex-wrap w-full max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] gap-2"
        }`}
      >
        {error.status ? (
          <ModalEmpty message={error.message} />
        ) : (
          <>
            {"children" in props
              ? props.children
              : props.Card &&
                props.data?.map((item) => (
                  <props.Card key={item.id} data={item} />
                ))}
          </>
        )}
      </div>
    </div>
  );
}
