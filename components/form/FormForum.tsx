"use client";
import { useState } from "react";
import ImageUser from "../custom/ImageUser";
import { Star as RatingIcon } from "lucide-react";

interface FormForumProps {
  type: "question" | "comment" | "rating";
  placeholder?: string;
  title?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  loading?: boolean;
}

export default function FormForum({
  type,
  placeholder,
  title,
  disabled,
  className,
  loading,
}: FormForumProps) {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (value: number) => {
    setRating(value);
  };
  return (
    <form className="flex flex-col gap-2">
      {type === "rating" && (
        <div className="flex flex-col p-2 gap-2 border rounded-lg items-start">
          <p>Seberapa puas anda?</p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <RatingIcon
                key={index}
                fill={index < rating ? "gold" : "none"} // Isi bintang berdasarkan rating
                color="gold"
                onClick={() => handleRating(index + 1)} // Set nilai rating saat bintang diklik
                className="cursor-pointer" // Menambahkan pointer pada mouse
              />
            ))}
            <span>
              {rating === 5
                ? "Puas Banget"
                : rating === 4
                ? "Puas Sekali"
                : rating === 3
                ? "Puas Aja"
                : rating === 2
                ? "Puas Ko"
                : rating === 1
                ? "Puas"
                : ""}
            </span>
          </div>
        </div>
      )}
      <div className="relative">
        <textarea
          rows={4}
          className={`resize-y pb-24 pt-3 pr-2 pl-12 rounded-lg border text-slate-950 w-full bg-white ${className}`}
          placeholder={
            placeholder || type === "comment"
              ? "Tulis Komentar Anda..."
              : type === "question"
              ? "Tulis Pertanyaan Anda..."
              : "Tulis Ulasan Anda..."
          }
          name={type}
          title={title}
          required
          disabled={disabled}
        />
        <ImageUser size="s" shape="circle" className="absolute top-2 left-2" />
        <button
          type="submit"
          className="text-white min-w-36 font-bold rounded-lg p-2 bg-[#0041A1] text-center absolute bottom-3 right-2"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-pulse">Tunggu Sebentar</span>
          ) : (
            "Kirim"
          )}
        </button>
      </div>
    </form>
  );
}
