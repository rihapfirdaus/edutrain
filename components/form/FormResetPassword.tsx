import { Input } from "../custom/Input";
import FormBase from "./FormBase";

export default function FormResetPassword() {
  return (
    <FormBase layout="right">
      <h2 className="text-2xl md:text-3xl font-bold">Atur Ulang Kata Sandi</h2>
      <p className="flex flex-col gap-2 text-start">
        <span>
          Buat kata sandi baru* untuk akun Anda untuk mendapatkan akses dan
          menikmati semua fitur.
        </span>
        <span className="text-sm">*minimal 8 karakter, case sensitive</span>
      </p>
      <form className="flex flex-col w-full gap-4">
        <Input
          title="Buat kata sandi yang kuat (minimal 8 karakter)"
          type="password"
          placeholder="Kata Sandi"
          name="password"
          required
          disabled
        />
        <Input
          title="Masukkan ulang kata sandi Anda."
          type="password"
          placeholder="Konfirmasi Kata Sandi"
          name="repassword"
          required
          disabled
        />
        <button
          type="submit"
          className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center shadow-lg"
        >
          Kirim
        </button>
      </form>
    </FormBase>
  );
}
