import MiniProfile from "@/components/card/MiniProfile";
import FormUpdateProfile from "@/components/form/FormUpdateProfile";
import { getAccount } from "@/libs/fetchs/fetchAccount";

export default async function ProfilePage() {
  const account = await getAccount();

  return (
    <div className="flex flex-col items-center py-8 flex-grow bg-[#f4f4f4]">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col lg:flex-row w-full gap-2 md:gap-4">
        <div className="flex flex-col gap-2 md:gap-4 w-full items-center">
          <MiniProfile account={account} showAsCard />
          <FormUpdateProfile account={account} />
        </div>
      </div>
    </div>
  );
}
