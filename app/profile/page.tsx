import MiniPoint from "@/components/card/MiniPoint";
import MiniProfile from "@/components/card/MiniProfile";
import FormChangeProfile from "@/components/form/FormChangeProfile";
import { getAccount } from "@/libs/actions/auth/cookieHandler";

export default async function ProfilePage() {
  const account = await getAccount();
  return (
    <div className="flex flex-col items-center py-8 flex-grow bg-[#f4f4f4]">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col lg:flex-row w-full gap-2 md:gap-4">
        <div className="flex flex-col md:flex-row lg:flex-col gap-2 md:gap-4 ">
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
