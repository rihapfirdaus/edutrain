import FormBase from "./FormBase";
import { Input } from "../custom/Input";

export default function FormForgotPassword() {
  return (
    <FormBase layout="right">
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
