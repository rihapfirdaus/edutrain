import Image from "next/image";
import DetailTraining from "../card/DetailTraining";
import DetailWorkshop from "../card/DetailWorkshop";
import TabComponent from "../navigation/TabComponent";
import DetailWebinar from "../card/DetailWebinar";
import { Account } from "@/libs/entities/Account";
import { ErrorMessage } from "@/libs/entities/Error";

interface TemplateHistoryEventProps {
  data: any;
  entity: "Webinar" | "Workshop" | "Training";
  children?: React.ReactNode;
  account: Account | null;
  Card: typeof DetailWebinar | typeof DetailWorkshop | typeof DetailTraining;
}

export default function TemplateHistoryEvent({
  data,
  entity,
  children,
  account,
  Card,
}: TemplateHistoryEventProps) {
  return (
    <>
      <div className="flex items-center flex-grow bg-secondary flex-col gap-4 pt-8 xl:gap-6">
        <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col w-full gap-4">
          {data && (
            <div className="flex flex-col w-full gap-4">
              <h1 className="text-lg lg:text-2xl font-bold border-b text-blue-500 border-blue-500 w-fit">
                Riwayat {entity}
              </h1>
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
              <TabComponent tabs={["Deskripsi", "Pertanyaan", "Presensi"]}>
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
                <>{ErrorMessage.Upcoming}</>
                <>{ErrorMessage.Upcoming}</>
                {/* <QuestionSection /> */}
                {/* <AttendanceSection /> */}
              </TabComponent>
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  );
}
