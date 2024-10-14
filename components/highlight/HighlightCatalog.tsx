import { MoveRight as SeeMoreIcon } from "lucide-react";
import Link from "next/link";
import CatalogWorkshop from "../card/CatalogWorkshop";
import CatalogTraining from "../card/CatalogTraining";
import CatalogWebinar from "../card/CatalogWebinar";

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
  return (
    <>
      {data.length > 0 && (
        <div className="w-full py-8 flex flex-col gap-2 px-2 justify-center items-center bg-white">
          <h2 className="text-xl lg:text-3xl font-bold text-center">{title}</h2>
          <p className="lg:text-lg text-center">{desc}</p>
          <div
            className={`flex w-full overflow-x-auto max-w-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] gap-4 py-4 lg:items-center lg:justify-center ${
              data.length === 1 && "items-center justify-center "
            }"`}
          >
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
          <Link
            href={hrefSeeMore}
            className="gap-2 text-center w-fit flex justify-center items-center hover:text-blue-500"
          >
            <span>Lihat selengkapnya</span>
            <SeeMoreIcon />
          </Link>
        </div>
      )}
    </>
  );
}
