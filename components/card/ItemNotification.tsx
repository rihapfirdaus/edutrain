import Link from "next/link";

export default function ItemNotification() {
  return (
    <Link
      href={"/notification/id"}
      className="p-2 hover:bg-[#e9e9e9] cursor-pointer w-full"
    >
      <div className="flex gap-2 items-center">
        <h3 className="font-bold flex-grow truncate overflow-hidden whitespace-nowrap max-w-[calc(100%-5.5rem)]">
          Title Notification Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Et eaque vel quasi.
        </h3>
        <p className="text-sm ml-auto">12.30 WIB</p>
      </div>
      <p className="text-sm line-clamp-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias fuga
        sunt natus iste culpa tempore dolorum architecto incidunt molestiae
        inventore.
      </p>
    </Link>
  );
}
