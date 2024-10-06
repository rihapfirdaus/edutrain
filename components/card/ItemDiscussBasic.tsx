import {
  ThumbsUp as LikeIcon,
  MessageSquareMore as CommentIcon,
} from "lucide-react";
import CardBase from "./CardBase";
import ImageUser from "../custom/ImageUser";
export default function ItemDiscussBasic() {
  return (
    <CardBase href="/forum-diskusi/id" className="flex-col p-2 gap-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ImageUser size="s" shape="circle" />
          <h4 className="truncate overflow-hidden whitespace-nowrap">
            Ahmad Subarjo
          </h4>
        </div>
        <div className="items-center gap-2 hidden xl:flex">
          <p className="p-1 text-sm rounded-lg bg-[#0041A1] text-white">
            Online Training
          </p>
          <p className="p-1 text-sm rounded-lg bg-green-500 text-white">
            Cyber Security
          </p>
        </div>
      </div>
      <p className="text-sm text-slate-500">
        Sabtu, 10 Februari 2024 - 10:00 WIB
      </p>
      <p>Siapakah yang membuat frontend user website edutrain?</p>
      <div className="flex gap-4">
        <button className="flex gap-1 items-center">
          <LikeIcon size={20} fill="blue" />{" "}
          <span className="text-slate-500 text-sm">2JT Suka</span>
        </button>
        <button className="flex gap-1 items-center">
          <CommentIcon size={20} />{" "}
          <span className="text-slate-500 text-sm">2000 Komentar</span>
        </button>
      </div>
    </CardBase>
  );
}
