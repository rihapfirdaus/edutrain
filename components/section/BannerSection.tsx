import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="w-full bg-gradient-to-r from-[#fff] from-35% via-[#80C7EB] via-74% to-[#008ED6] py-8 px-4 md:px-8 flex flex-wrap md:gap-2 items-center justify-center">
      <Image
        src="/edutrain_rocket.png"
        alt="Edutrain"
        width={200}
        height={100}
      />
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-xl pb-2">
          Tingkatkan profesi & keterampilan Anda
        </h4>
        <p>
          Temukan berbagai konten menarik di EduTrain yang sesuai dengan peran
          pekerjaan Anda
        </p>
        <p>Mulai dari Webinar, Workshop, Micro-Learning hingga Pelatihan</p>
        <Link
          href={"#"}
          className=" w-fit text-white py-2 px-8 rounded-lg bg-[#0040a1]"
        >
          Mulai Jelajahi
        </Link>
      </div>
    </div>
  );
}
