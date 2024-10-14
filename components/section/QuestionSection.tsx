import ItemDiscussBasic from "../card/ItemDiscussBasic";
import { Input } from "../custom/Input";
import {
  Search as SearchIcon,
  SlidersHorizontal as SettingIcon,
} from "lucide-react";
import FormForum from "../form/FormForum";

export default function QuestionSection() {
  return (
    <div className="flex flex-col gap-4 flex-grow">
      <FormForum type="question" />
      <form className="flex gap-2 justify-center">
        <Input name="search" type="text" placeholder="Cari Pertanyaan" />
        <button
          title="Cari"
          className="px-4 py-2 bg-[#0041A1] text-white rounded-lg"
        >
          <SearchIcon />
        </button>
        <button
          title="Pengaturan Pencarian"
          className="px-4 py-2 bg-[#0041A1] text-white rounded-lg"
        >
          <SettingIcon />
        </button>
      </form>
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <ItemDiscussBasic key={item} />
        ))}
      </div>
    </div>
  );
}
