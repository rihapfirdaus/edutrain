import currencyFormatter from "@/libs/helpers/formatter/currencyFormatter.";

interface PaymentInfoProps {
  price?: number;
}

export default function PaymentInfo({ price }: PaymentInfoProps) {
  return price ? (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <p className="text-sm font-semibold">Lakukan pembayaran sebesar</p>
      <p>{currencyFormatter(price)} ke:</p>
      <p className="flex flex-col gap-1 flex-wrap text-start border border-dashed rounded-lg p-4 text-base">
        <span className="font-bold">Yogi Saputra:</span>
        <span>0405 0106 1209 506 (BRI)</span>
      </p>
    </div>
  ) : (
    <div className="flex flex-col rounded-lg border border-dashed p-4 gap-2">
      <p className="text-sm">Lakukan pembayaran ke: </p>
      <p className="flex flex-col flex-wrap gap-1 text-base">
        <span className="font-bold">Yogi Saputra:</span>0405 0106 1209 506 (BRI)
      </p>
    </div>
  );
}
