"use client";
import MiniFaq from "@/components/card/MiniFaq";
import { Input } from "@/components/custom/Input";
import ModalEmpty from "@/components/modal/ModalEmpty";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

export default function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axiosInstance.get("/faqs");
        const faqData = response.data.data;

        if (!faqData || faqData.length === 0) {
          setError({ status: true, message: "FAQ belum tersedia." });
        } else {
          setFaqs(faqData);
        }
      } catch (err: any) {
        const errorMessage =
          err.response?.status === 404
            ? "Faq belum tersedia."
            : "Terjadi kesalahan, silakan coba lagi.";
        setError({ status: true, message: errorMessage });
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#f4f4f4] h-full flex-grow">
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
        className={`flex p-8 justify-center flex-wrap w-full max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex-grow ${
          error.message && "items-center"
        }`}
      >
        {error.status ? (
          <ModalEmpty message={error.message} />
        ) : (
          <>
            {faqs.map((item) => (
              <MiniFaq data={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
