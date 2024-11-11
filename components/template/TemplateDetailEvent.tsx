import DetailWebinar from "@/components/card/DetailWebinar";
import Image from "next/image";
import DetailTraining from "../card/DetailTraining";
import DetailWorkshop from "../card/DetailWorkshop";
import { Account } from "@/libs/entities/Account";

interface TemplateDetailEventProps {
  data: any;
  children: React.ReactNode;
  Card: typeof DetailWebinar | typeof DetailWorkshop | typeof DetailTraining;
  account?: Account | null;
}

export default function TemplateDetailEvent({
  data,
  children,
  Card,
  account,
}: TemplateDetailEventProps) {
  return (
    <main className="flex items-center flex-grow flex-col gap-4 pt-8 xl:gap-6">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col w-full gap-4">
        {data && (
          <div className="flex flex-col w-full gap-4">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              {data.title}
            </h1>
            <div className="flex flex-col xl:flex-row gap-4 w-full">
              <Image
                src={data.banner}
                alt={data.title}
                width={480}
                height={240}
                className="w-full xl:max-w-[calc(100%-24rem)] min-h-44 max-h-[40rem] object-cover object-center rounded-xl flex-grow border-2 bg-[#d4d4d4]"
              />

              <Card data={data} account={account} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
        )}
      </div>
      <div className="w-full">{children}</div>
    </main>
  );
}
