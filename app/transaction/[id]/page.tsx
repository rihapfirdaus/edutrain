import TransactionTable from "@/components/table/TransactionTable";

export default function TransactionDetail() {
  return (
    <div className="bg-[#f4f4f4] flex flex-col items-center gap-4 xl:gap-6 py-8 min-h-[45rem]">
      <div className="flex flex-col gap-4 w-full max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)]">
        <h1 className="text-2xl text-blue-500 font-bold border-b-2 border-blue-500 w-fit">
          Rincian Transaksi
        </h1>

        <div className="flex flex-col lg:flex-row lg:justify-between bg-white py-2 px-6">
          <div className="flex flex-col gap-2 min-w-80 max-w-80">
            <h3 className="text-xl font-bold">Invoice</h3>
            <p>No: #INV2024022001</p>
            <p>Tanggal transaksi: 12 September 2024</p>
            <p>Tanggal pembayaran: 13 September 2024</p>
          </div>
          <div className="flex flex-col gap-2 min-w-80 max-w-80">
            <h3 className="text-xl font-bold">Nama Perusahaan</h3>
            <p>info@uinsgd.ac.id - (022) 7800525</p>
            <p>
              Jalan A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa
              Barat 40614
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between bg-white py-2 px-6">
          <div className="flex flex-col gap-2 min-w-80 max-w-80">
            <h3 className="text-xl font-bold">Rincian Pelanggan</h3>
            <p>Dian Saputra</p>
            <p>dayensptr@gmail.com</p>
            <p>+62 (812) 3456 7890</p>
          </div>
          <div className="flex flex-col gap-2 min-w-80 max-w-80">
            <h3 className="text-xl font-bold">Alamat Pembayaran</h3>
            <p>
              Jalan Cimencrang, Panyileukan, Cimencrang, Gedebage, Kota Bandung,
              Jawa Barat 40292
            </p>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)]">
        <TransactionTable checkAll footer />
      </div>
    </div>
  );
}
