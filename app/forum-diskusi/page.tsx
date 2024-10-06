import ItemDiscussNew from "@/components/card/ItemDiscussNew";
import QuestionSection from "@/components/section/QuestionSection";

export default function ForumPage() {
  return (
    <div className="bg-[#f4f4f4] flex flex-col items-center gap-4 xl:gap-6 py-8 flex-grow">
      <div className="flex flex-col gap-4 w-full max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)]">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          Forum Diskusi
        </h1>
        <div className="flex gap-4 flex-col lg:flex-row">
          <QuestionSection />

          <div className="flex flex-col gap-2 bg-white p-4 h-fit rounded-xl border shadow-sm">
            <h3 className="text-xl font-bold text-blue-500 border-b border-blue-500 w-fit">
              Pertanyaan Terbaru
            </h3>
            <div className="flex flex-col divide-y">
              {[1, 2, 3, 4, 5].map((item) => (
                <ItemDiscussNew key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
