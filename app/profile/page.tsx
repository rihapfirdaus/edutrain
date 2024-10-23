import MiniPoint from "@/components/card/MiniPoint";
import MiniProfile from "@/components/card/MiniProfile";
import FormUpdateProfile from "@/components/form/FormUpdateProfile";
import axiosInstance from "@/utils/axiosInstance";

export default async function ProfilePage() {
  let account = [];
  let error = { status: false, message: "" };
  try {
    const response = await axiosInstance.get("/profile");
    const accountData = response.data.data;
    console.log(accountData);

    if (!accountData || accountData.length === 0) {
      error = { status: true, message: "Webinar belum tersedia." };
    } else {
      account = accountData;
    }
  } catch (err: any) {
    const errorMessage = "Terjadi kesalahan, silakan coba lagi.";
    error = { status: true, message: errorMessage };
  }

  return (
    <div className="flex flex-col items-center py-8 flex-grow bg-[#f4f4f4]">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col lg:flex-row w-full gap-2 md:gap-4">
        <div className="flex flex-col md:flex-row lg:flex-col gap-2 md:gap-4 ">
          <MiniProfile account={account} showAsCard />
          <MiniPoint showAsCard />
        </div>
        <div className="w-full flex-grow">
          <FormUpdateProfile account={account} />
        </div>
      </div>
    </div>
  );
}
