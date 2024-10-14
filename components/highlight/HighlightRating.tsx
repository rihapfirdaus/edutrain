import ItemRating from "../card/ItemRating";

export default function HighlightRating() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_2.jpg')",
      }}
      className="flex flex-col justify-center items-center py-8 max-w-full bg-cover bg-center"
    >
      <div className="flex flex-col w-full overflow-x-auto max-w-[calc(100%-1rem)] md:max-w-[calc(100%-2rem)] gap-4 py-4">
        <p className="text-xl xl:text-2xl text-center text-white font-bold">
          Apa kata mereka?
        </p>
        <p className="text-white font-bold text-center">
          Lihat daftar ulasan di bawah ini
        </p>
        <div className="flex gap-4 w-full overflow-x-scroll p-4">
          {[...Array(10)].map(() => (
            <ItemRating />
          ))}
        </div>
      </div>
    </div>
  );
}
