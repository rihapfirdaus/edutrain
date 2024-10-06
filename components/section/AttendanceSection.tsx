interface AttendanceSectionProps {
  status?: "open" | "closed" | "done";
}

export default function AttendanceSection({
  status = "open",
}: AttendanceSectionProps) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col gap-2">
      {status === "closed" ? (
        <>
          <h3 className="font-bold text-xl">Presensi telah ditutup</h3>
          <p>
            Mohon maaf, presensi untuk webinar ini telah ditutup. Jika Anda
            memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi
            kami. Terima kasih atas perhatiannya.
          </p>
        </>
      ) : status === "done" ? (
        <>
          <h3 className="font-bold text-xl">Anda telah melakukan presensi</h3>
          <p>
            Terima kasih telah mengisi presensi! Kami telah mencatat kehadiran
            Anda untuk webinar ini. Jika Anda memiliki pertanyaan lebih lanjut,
            jangan ragu untuk menghubungi kami. Terima kasih atas perhatiannya.
          </p>
        </>
      ) : (
        <>
          <h3 className="font-bold text-xl">
            Form Presensi Event "Judul Event"
          </h3>
          <p>
            Silakan tandai kehadiran Anda hari ini dengan memilih salah satu
            opsi di bawah ini. Pastikan untuk mengisi presensi sebelum waktu{" "}
            <span className="text-red-500 font-bold">
              penutupan pukul 13:00 WIB.
            </span>
          </p>
          <form className="flex flex-col gap-2">
            <label className="flex gap-2">
              <input type="radio" name="option" value="option1" />
              Hadir
            </label>
            <label className="flex gap-2">
              <input type="radio" name="option" value="option2" />
              Tidak hadir
            </label>

            <button
              type="submit"
              className="text-white w-fit font-bold rounded-lg py-2 px-4 bg-[#0041A1] text-center"
            >
              Kirim
            </button>
          </form>
        </>
      )}
    </div>
  );
}
