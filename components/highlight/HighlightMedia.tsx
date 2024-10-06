import MediaYoutube from "../card/MediaYoutube";

interface HighlightMediaProps {
  title: string;
  desc: string;
  Card: typeof MediaYoutube;
  data: any[];
}

export default function HighlightMedia({
  title,
  desc,
  Card,
  data,
}: HighlightMediaProps) {
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
        </div>
      )}
    </>
  );
}
