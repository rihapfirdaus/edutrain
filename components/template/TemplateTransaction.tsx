interface TemplateTransactionProps {
  children: React.ReactNode;
}

export default function TemplateTransaction({
  children,
}: TemplateTransactionProps) {
  return (
    <div className="flex flex-col items-center gap-4 xl:gap-6 py-8 min-h-[45rem] bg-[#f4f4f4]">
      <div className="flex flex-col md:flex-row w-full max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] gap-4">
        <div className="flex flex-col gap-2 min-w-80 md:max-w-80 xl:max-w-96 xl:min-w-96">
          <h2 className="text-2xl font-bold">Rincian Pelanggan</h2>
          <p>Nama pelanggan</p>
          <p>user@gmail.com</p>
          <p>085123456789</p>
        </div>
        <div className="flex flex-col gap-2 min-w-80 md:max-w-80 xl:max-w-96 xl:min-w-96 md:ml-auto">
          <h2 className="text-2xl font-bold">Alamat Pembayaran</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            tempora quae molestias rem. Accusamus voluptatibus animi tempore
            saepe eos fuga repudiandae minima molestias, inventore placeat
            veniam perferendis iusto mollitia quod.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
