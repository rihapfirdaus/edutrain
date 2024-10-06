import { Star as RatingIcon } from "lucide-react";
import CardBase from "./CardBase";

interface ItemRatingProps {
  card?: boolean;
}

export default function ItemRating({ card = true }: ItemRatingProps) {
  const rating: number = 5;

  return (
    <CardBase
      className={`text-black p-2 flex-col gap-0 min-w-80 max-w-96 h-fit ${
        !card && "w-full min-w-0 max-w-none"
      }`}
    >
      <h3 className="font-bold">Daus Firdaus</h3>
      <p className="text-sm font-light text-slate-500">Mahasiswa Harvard</p>
      <div className="flex gap-2">
        {[...Array(5)].map((_, index) => (
          <RatingIcon
            key={index}
            fill={index < rating ? "gold" : "none"}
            color="gold"
          />
        ))}
      </div>
      <p className="line-clamp-4">
        Kelas ini memberikan cara pandang baru bagi saya ketika mengembangkan
        sebuah aplikasi Android. Kelas ini mengajarkan bahwa sebuah aplikasi
        haruslah menerapkan best practices dan standar yang baik, sehingga
        aplikasi yang dihasilkan dapat menjadi lebih scalable, maintainable,
        serta mengurangi risiko munculnya masalah di masa depan.
      </p>
    </CardBase>
  );
}
