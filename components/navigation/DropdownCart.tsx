import Link from "next/link";
import ItemCart from "../card/ItemCart";

export default function DropdownCart() {
  return (
    <>
      {[1, 2, 3].map((index) => (
        <ItemCart key={index} />
      ))}
      <Link href={"/cart"} className="text-sm self-end p-2 hover:underline">
        Lihat lebih banyak...
      </Link>
    </>
  );
}
