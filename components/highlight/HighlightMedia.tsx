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
        <div className="w-full py-8 flex flex-col gap-2 px-2 justify-center items-center">
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
        </div>
      )}
    </>
  );
}
