"use server";
import TransactionPending from "@/components/card/TransactionPending";
import TabLink, { TabLinkItem } from "@/components/navigation/TabLink";
import axiosInstance from "@/utils/axiosInstance";

export default async function TransactionPage() {
  const tabs: TabLinkItem[] = [
    {
      href: "/transaction",
      icon: "delay",
      label: "Transaksi Tertunda",
    },
    {
      href: "/transaction/history",
      icon: "history",
      label: "Riwayat Transaksi",
    },
  ];

  let transactions = [];
  let error = { status: false, message: "" };
  try {
    const response = await axiosInstance.get("/transactions");
    const transactionData = response.data.data;

    if (!transactionData || transactionData.length === 0) {
      error = {
        status: true,
        message: "Anda belum memiliki transaksi tertunda.",
      };
    } else {
      transactions = transactionData;
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.status === 404
        ? "Anda belum memiliki transaksi tertunda."
        : "Terjadi kesalahan, silakan coba lagi.";
    error = { status: true, message: errorMessage };
  }

  return (
    <div className="flex flex-col items-center gap-4 xl:gap-6 py-8 flex-grow bg-[#f4f4f4]">
      <div className="flex flex-col gap-4 w-full max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] ">
        <TabLink tabs={tabs} />

        <div className="flex flex-col w-full gap-2">
          {[...Array(10)].map(() => (
            <TransactionPending />
          ))}
        </div>
        {/* <div
        className={`flex ${
          error.status
            ? "flex-grow justify-center items-center"
            : "flex-col w-full max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] gap-2"
        }`}
      >
        {error.status ? (
          <ModalEmpty message={error.message} />
        ) : (
          <>
            {transactions.map(() => (
              <TransactionPending />
            ))}
          </>
        )}
      </div> */}
      </div>
    </div>
  );
}
