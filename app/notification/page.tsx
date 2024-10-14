import ItemNotification from "@/components/card/ItemNotification";

export default function NotificationPage() {
  return (
    <div className="bg-[#f4f4f4] flex flex-col items-center gap-4 xl:gap-6 py-8 flex-grow">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col w-full gap-4">
        <h1 className="text-2xl lg:text-3xl font-bold border-b text-blue-500 border-blue-500 w-fit">
          Info Terbaru
        </h1>
        <div className="flex flex-wrap flex-col w-full gap-2 divide-y">
          {[...Array(10)].map(() => (
            <ItemNotification />
          ))}
        </div>
      </div>
    </div>
  );
}
