import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_2.jpg'",
        }}
        className="flex flex-col gap-4 justify-center items-center text-white bg-cover bg-center rounded-3xl p-12 w-full max-w-[calc(100%-4rem)] md:w-auto md:max-w-none"
      >
        <h2 className="text-4xl lg:text-8xl">404</h2>
        <h3 className="text-xl lg:text-4xl">This Page Not Found</h3>
        <p className="lg:text-xl md:max-w-96  xl:max-w-[40rem] text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          href={"/"}
          className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:scale-105"
        >
          Kembali Ke Dashbord
        </Link>
      </div>
    </div>
  );
}
