import Image from "next/image";
import DetailTraining from "../card/DetailTraining";
import DetailWorkshop from "../card/DetailWorkshop";
import TabComponent from "../navigation/TabComponent";
import QuestionSection from "../section/QuestionSection";
import AttendanceSection from "../section/AttendanceSection";
import DetailHistoryWebinar from "../card/DetailHistoryWebinar";
import MiniMitra from "../card/MiniMitra";

interface TemplateHistoryEventProps {
  data: any;
  entity: "Webinar" | "Workshop" | "Training";
  children?: React.ReactNode;
  Card:
    | typeof DetailHistoryWebinar
    | typeof DetailWorkshop
    | typeof DetailTraining;
  error: { status: boolean; message: string };
}

export default function TemplateHistoryEvent({
  data,
  entity,
  children,
  Card,
  error,
}: TemplateHistoryEventProps) {
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
            <h1 className="text-lg lg:text-2xl font-bold border-b text-blue-500 border-blue-500 w-fit">
              Riwayat {entity}
            </h1>
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              {data.title}
            </h1>
            <div className="flex flex-col xl:flex-row gap-4 w-full">
              <div className="flex flex-col gap-4 w-auto flex-grow">
                <Image
                  src={data.banner}
                  alt="#"
                  width={480}
                  height={240}
                  className="min-h-44 max-h-[40rem] w-full object-cover object-center rounded-xl"
                />
                <Card className="xl:hidden" data={data} />
                <TabComponent tabs={["Deskripsi", "Pertanyaan", "Presensi"]}>
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                  <QuestionSection />
                  <AttendanceSection />
                </TabComponent>
              </div>

              <div className="xl:flex flex-col gap-4 max-w-96 hidden">
                <Card data={data} />
                <MiniMitra />
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
