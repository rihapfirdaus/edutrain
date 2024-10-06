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
        <div className="w-full px-2 py-8 bg-[#fff]">
          <h2 className="text-xl lg:text-3xl font-bold m-4 text-center">
            {title}
          </h2>
          <p className="lg:text-lg m-4 text-center">{desc}</p>
          <div className="flex overflow-x-auto max-w-[calc(100%-2rem)] m-4 gap-4 lg:items-center lg:justify-center py-4">
            {data.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
          <Link
            href={hrefSeeMore}
            className=" gap-2 text-center w-full flex justify-center items-center hover:scale-95 transition-all ease"
          >
            Lihat selengkapnya <SeeMoreIcon />
          </Link>
        </div>
      )}
    </>
  );
}
