import { ArrowLeft as BackIcon } from "lucide-react";
import Link from "next/link";
import FormBase from "./FormBase";
import { Input } from "../custom/Input";

export default function FormForgotPassword() {
  return (
    <FormBase layout="right">
      <Link
        href={"/auth/login"}
        className="absolute top-4 md:top-8 left-0 rounded-full hover:text-white hover:bg-[#0041A1] p-2"
      >
        <BackIcon />
      </Link>
      <h2 className="text-2xl md:text-3xl font-bold">Lupa Kata Sandi?</h2>
      <p className="text-start">
        Untuk proses verifikasi, masukkan alamat email Anda. Kami akan
        mengirimkan tautan untuk mengatur ulang kata sandi ke email tersebut.
      </p>
      <form className="flex flex-col w-full gap-4">
        <Input
          title="Masukkan alamat email Anda."
          type="email"
          placeholder="Email"
          name="email"
          required
          disabled
        />
        <button
          type="submit"
          className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center shadow-lg"
        >
          Lanjutkan
        </button>
      </form>
    </FormBase>
  );
}
