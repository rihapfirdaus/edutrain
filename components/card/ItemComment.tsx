import CardBase from "./CardBase";
import { ThumbsUp as LikeIcon, ThumbsDown as DislikeIcon } from "lucide-react";
import ImageUser from "../custom/ImageUser";

export default function ItemComment() {
  return (
    <CardBase className="flex-col p-2 gap-2">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <ImageUser size="s" shape="circle" />
          <h4>Ijat Surijat</h4>
        </div>
        <p className="text-sm text-slate-500">10:00 WIB, 10 Feb 24</p>
      </div>
      <p>Saye Upin ini adik saye ijat, ini kisah kami berdua..</p>
      <div className="flex gap-4">
        <button className="flex gap-1 items-center">
          <LikeIcon size={20} />{" "}
          <span className="text-slate-500 text-sm">2JT</span>
        </button>
        <button className="flex gap-1 items-center">
          <DislikeIcon size={20} />{" "}
          <span className="text-slate-500 text-sm">0</span>
        </button>
      </div>
    </CardBase>
  );
}
