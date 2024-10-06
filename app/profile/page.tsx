import MiniPoint from "@/components/card/MiniPoint";
import MiniProfile from "@/components/card/MiniProfile";
import FormChangeProfile from "@/components/form/FormChangeProfile";
import { getAccount } from "@/libs/actions/auth/cookieHandler";

export default async function ProfilePage() {
  const account = await getAccount();
  return (
    <div className="flex flex-col items-center gap-4 xl:gap-6 py-8 min-h-[45rem] bg-[#f4f4f4]">
      <div className="flex flex-col lg:flex-row w-full max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] gap-4">
        <div className="flex flex-col md:flex-row lg:flex-col gap-4">
          <MiniProfile account={account} showAsCard />
          <MiniPoint showAsCard />
        </div>
        <div className="w-full flex-grow">
          <FormChangeProfile account={account} />
        </div>
      </div>
    </div>
  );
}
