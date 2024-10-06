import {
  Search as SearchIcon,
  SlidersHorizontal as SettingIcon,
} from "lucide-react";
import CatalogWebinar from "../card/CatalogWebinar";
import CatalogTraining from "../card/CatalogTraining";
import CatalogWorkshop from "../card/CatalogWorkshop";
import ModalEmpty from "@/components/modal/ModalEmpty";
import TabLink, { TabLinkItem } from "../navigation/TabLink";
import { Input } from "../custom/Input";

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
    <div className="flex flex-col items-center gap-4 xl:gap-6 py-8 flex-grow bg-[#f4f4f4]">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col h-full w-full gap-4">
        {auth && tabs ? (
          <TabLink tabs={tabs} />
        ) : (
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
            {title}
          </h1>
        )}
        <div className="flex w-full gap-2">
          <Input name="search" type="text" placeholder={`Cari ${entity}`} />
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
          className={`flex flex-col h-full ${
            error.status
              ? "justify-center items-center"
              : "flex-wrap w-full gap-2"
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
    </div>
  );
}
