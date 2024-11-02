import { MoveRight as SeeMoreIcon } from "lucide-react";
import Link from "next/link";
import CatalogWorkshop from "../card/CatalogWorkshop";
import CatalogTraining from "../card/CatalogTraining";
import CatalogWebinar from "../card/CatalogWebinar";
import ScrollableParent from "../custom/ScrollableParent";

interface HighlightCatalogProps {
  title: string;
  desc: string;
  Card: typeof CatalogWebinar | typeof CatalogTraining | typeof CatalogWorkshop;
  hrefSeeMore: string;
  data: any[];
}

export default function HighlightCatalog({
  title,
  desc,
  Card,
  hrefSeeMore,
  data,
}: HighlightCatalogProps) {
  const datas = data.length > 0 ? data.slice(0, 4) : data;

  return (
    datas.length > 0 && (
      <div className="w-full flex flex-col justify-center items-center">
        <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col w-full gap-4">
          <div className="w-full py-8 flex flex-col gap-2 px-2 justify-center items-center">
            <h2 className="text-xl lg:text-3xl font-bold text-center">
              {title}
            </h2>
            <p className="lg:text-lg text-center">{desc}</p>
            <ScrollableParent>
              {datas.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </ScrollableParent>
            <Link
              href={hrefSeeMore}
              className="gap-2 text-center w-fit flex justify-center items-center hover:text-blue-500"
            >
              <span>Lihat selengkapnya</span>
              <SeeMoreIcon />
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
