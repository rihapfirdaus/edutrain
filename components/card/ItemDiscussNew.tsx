import Link from "next/link";
import ImageUser from "../custom/ImageUser";

export default function ItemDiscussNew() {
  return (
    <div className=" flex flex-col p-2 gap-1">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <ImageUser size="md" shape="circle" />
          <div className="flex flex-col">
            <h4 className="text-lg">Ahmad Subarjo</h4>
            <p className="text-sm text-slate-500">Dosen di UIN SGD Bandung</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">10 Feb 24</p>
      </div>
      <Link href="/forum-diskusi/id" className="text-blue-700 hover:underline">
        Siapakah yang membuat frontend user website edutrain?
      </Link>
    </div>
  );
}
