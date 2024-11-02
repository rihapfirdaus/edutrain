"use client";
import {
  Search as SearchIcon,
  SlidersHorizontal as SettingIcon,
  X as CloseIcon,
} from "lucide-react";
import CatalogWebinar from "../card/CatalogWebinar";
import CatalogTraining from "../card/CatalogTraining";
import CatalogWorkshop from "../card/CatalogWorkshop";
import ModalEmpty from "@/components/modal/ModalEmpty";
import TabLink, { TabLinkItem } from "../navigation/TabLink";
import { Input } from "../custom/Input";
import { ErrorMessage } from "@/libs/entities/Error";
import { useEffect, useState } from "react";
import { Filter, searchEvent, Sort } from "@/libs/services/SearchService";
import HistoryWebinar from "../card/HistoryWebinar";
import HistoryWorkshop from "../card/HistoryWorkshop";
import HistoryTraining from "../card/HistoryTraining";

interface TemplateCatalogProps {
  title: string;
  entity: string;
  Card:
    | typeof CatalogWebinar
    | typeof CatalogTraining
    | typeof CatalogWorkshop
    | typeof HistoryWebinar
    | typeof HistoryWorkshop
    | typeof HistoryTraining;
  data: any[];
  auth: boolean;
  tabs?: TabLinkItem[];
}

export default function TemplateCatalog({
  title,
  entity,
  Card,
  data,
  auth,
  tabs,
}: TemplateCatalogProps) {
  const [datas, setDatas] = useState<any[]>(data || []);
  const [query, setQuery] = useState<string>("");
  const [filter, setFilter] = useState<Filter>(Filter.None);
  const [sort, setSort] = useState<Sort>(Sort.None);

  const [advancedSearch, setAdvancedSearch] = useState<boolean>(false);

  const handleAdvancedSearch = () => {
    if (advancedSearch) {
      setFilter(Filter.None);
      setSort(Sort.None);
      setAdvancedSearch(false);
    } else {
      setAdvancedSearch(true);
    }
  };

  useEffect(() => {
    const response = searchEvent({ data, query, filter, sort });
    setDatas(response);
  }, [filter, sort, query, data]);

  return (
    <div className="flex flex-col items-center gap-4 xl:gap-6 py-8 flex-grow bg-secondary transition-all">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col h-full w-full gap-4">
        {auth && tabs ? (
          <TabLink tabs={tabs} />
        ) : (
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
            {title}
          </h1>
        )}

        <div className="flex flex-col w-full gap-2">
          <div className="flex w-full gap-2">
            <Input
              name="search"
              type="text"
              placeholder={`Cari ${entity}`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <button
              title={`${
                advancedSearch
                  ? "Reset Pengaturan Pencarian"
                  : "Pengaturan Pencarian"
              }`}
              type="button"
              onClick={handleAdvancedSearch}
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              {advancedSearch ? <CloseIcon /> : <SettingIcon />}
            </button>
          </div>
          {advancedSearch && (
            <div className="flex flex-col gap-2 p-4 bg-white rounded-lg border">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Filter pencarian:</label>
                <div className="flex gap-2 flex-wrap">
                  {Object.values(Filter)
                    .filter((filterOption) =>
                      auth
                        ? true
                        : filterOption !== Filter.Registered &&
                          filterOption !== Filter.Unregistered
                    )
                    .map((filterOption) => (
                      <label
                        key={filterOption}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="filter"
                          value={filterOption}
                          checked={filter === filterOption}
                          onChange={() => setFilter(filterOption)}
                        />
                        {filterOption}
                      </label>
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">
                  Urutkan hasil berdasarkan:
                </label>
                <div className="flex gap-2 flex-wrap">
                  {Object.values(Sort).map((sortOption) => (
                    <label key={sortOption} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sort"
                        value={sortOption}
                        checked={sort === sortOption}
                        onChange={() => setSort(sortOption)}
                      />
                      {sortOption}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={`flex h-full ${
            datas === null || datas.length === 0
              ? "justify-center items-center"
              : "flex-wrap w-full gap-4"
          }`}
        >
          {datas === null || datas.length === 0 ? (
            <ModalEmpty message={ErrorMessage.Empty} />
          ) : (
            <>
              {datas.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
