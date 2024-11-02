"use server";
import MiniFaq from "@/components/card/MiniFaq";
import { Input } from "@/components/custom/Input";
import ModalEmpty from "@/components/modal/ModalEmpty";
import { ErrorMessage } from "@/libs/entities/Error";
import { getFaqs } from "@/libs/fetchs/fetchFaqs";

export default async function FaqPage() {
  const faqs = (await getFaqs()) ?? [];

  return (
    <div className="flex flex-col items-center bg-secondary h-full flex-grow">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_2.jpg')",
        }}
        className="py-8 flex flex-col gap-2 lg:gap-8 w-full max-w-full justify-center items-center text-white bg-cover bg-center min-h-[32rem]"
      >
        <p className="font-bold">FAQs</p>
        <h1 className="text-3xl lg:text-5xl font-bold">Tanya Kami</h1>

        <form action="" className="flex flex-col gap-8 max-w-64 md:max-w-none">
          <p className="font-bold text-center">
            Punya pertanyaan? kami siap membantu Anda.
          </p>
          <Input
            type="search"
            name="faq"
            placeholder="Cari pertanyaan disini..."
          />
        </form>
      </div>

      <div
        className={`flex h-full p-8 w-full max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex-grow ${
          faqs === null || faqs.length === 0
            ? "justify-center items-center"
            : "flex-wrap w-full gap-4"
        }`}
      >
        {faqs === null || faqs.length === 0 ? (
          <ModalEmpty message={ErrorMessage.Empty} />
        ) : (
          <>
            {faqs.map((item: any) => (
              <MiniFaq key={item.id} data={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
