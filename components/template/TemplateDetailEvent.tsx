import DetailWebinar from "@/components/card/DetailWebinar";
import Image from "next/image";
import DetailTraining from "../card/DetailTraining";
import DetailWorkshop from "../card/DetailWorkshop";

interface TemplateDetailEventProps {
  data: any;
  children: React.ReactNode;
  Card: typeof DetailWebinar | typeof DetailWorkshop | typeof DetailTraining;
  error: { status: boolean; message: string };
}

export default function TemplateDetailEvent({
  data,
  children,
  Card,
  error,
}: TemplateDetailEventProps) {
  return (
    <div
      className={`flex items-center flex-grow bg-[#f4f4f4] ${
        error.status
          ? "flex-grow justify-center items-center"
          : "flex flex-col gap-4 pt-8 xl:gap-6 items-center"
      }`}
    >
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col w-full gap-4">
        {data && (
          <div className="flex flex-col w-full gap-4">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              {data.title}
            </h1>
            <div className="flex flex-col xl:flex-row gap-4 w-full">
              <Image
                src={data.banner}
                alt="#"
                width={480}
                height={240}
                className="w-full xl:max-w-[calc(100%-24rem)] min-h-44 max-h-[40rem] object-cover object-center rounded-xl flex-grow"
              />

              <Card data={data} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
