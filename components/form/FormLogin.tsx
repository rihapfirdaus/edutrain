"use client";

import Link from "next/link";
import FormBase from "./FormBase";
import { useState } from "react";
import { Input } from "../custom/Input";
import { actionLoginAccount } from "@/libs/actions/actionLoginAccount";

export default function FormLogin() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    await actionLoginAccount(formData);

    setLoading(false);
  };

  return (
    <FormBase>
      <h2 className="text-2xl md:text-3xl font-bold">
        Selamat Datang Kembali!
      </h2>
      <p>Akses akunmu:</p>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
        <Input
          title="Masukkan alamat email Anda."
          type="email"
          placeholder="Email"
          name="email"
          disabled={loading}
          required
        />
        <Input
          title="Kata Sandi (minimal 8 karakter)"
          type="password"
          placeholder="Kata Sandi"
          name="password"
          disabled={loading}
          required
        />

        <button
          type="submit"
          className="text-white font-bold rounded-lg p-2 bg-primary text-center shadow-lg"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-pulse">Tunggu Sebentar</span>
          ) : (
            "Masuk"
          )}
        </button>
      </form>
      <p>
        Belum punya akun?{" "}
        <Link
          href={"/auth/register"}
          className="font-bold text-yellow-300 hover:underline"
        >
          Buat akun baru sekarang
        </Link>
      </p>
    </FormBase>
  );
}
