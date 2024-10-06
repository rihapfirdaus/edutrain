import Link from "next/link";
import ItemNotification from "../card/ItemNotification";

export default function DropdownNotification() {
  return (
    <>
      {[1, 2, 3].map((index) => (
        <ItemNotification key={index} />
      ))}
      <Link
        href={"/notification"}
        className="text-sm self-end p-2 hover:underline"
      >
        Lihat lebih banyak...
      </Link>
    </>
  );
}
