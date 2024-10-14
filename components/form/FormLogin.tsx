"use client";

import Link from "next/link";
import FormBase from "./FormBase";
import { useEffect, useState } from "react";
import { CheckCircle as SuccesIcon, Frown as FailedIcon } from "lucide-react";
import ModalAction from "../modal/ModalAction";
import { Input } from "../custom/Input";
import { useRouter } from "next/navigation";
import { FinalReturn, loginAction } from "@/libs/actions/auth/actions";

export default function FormLogin() {
  const [response, setResponse] = useState<FinalReturn>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result: FinalReturn = await loginAction(formData);

    setLoading(false);
    setResponse(result);
  };

  useEffect(() => {
    if (response?.status === 200) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [response, router]);
  return (
    <>
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
          <Link
            className="font-bold self-end hover:underline"
            href={"/auth/forgot-password"}
          >
            Lupa Kata Sandi?
          </Link>
          <button
            type="submit"
            className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center shadow-lg"
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
      {response?.status === 200 ? (
        <ModalAction action={() => setResponse(undefined)}>
          <SuccesIcon size={58} />
          <p className="text-2xl text-center">{response.message}</p>
          <Link
            href={"/"}
            className="text-white font-bold rounded-lg py-2 px-4 bg-[#0041A1] text-center shadow-lg hover:"
            onClick={() => setLoading(true)}
          >
            Lanjutkan
          </Link>
        </ModalAction>
      ) : response ? (
        <ModalAction action={() => setResponse(undefined)}>
          <FailedIcon size={58} />
          <p className="text-2xl text-center">{response.message}</p>
          <button
            className="text-white font-bold rounded-lg py-2 px-4 bg-[#0041A1] text-center shadow-lg hover:"
            onClick={() => setResponse(undefined)}
          >
            OK
          </button>
        </ModalAction>
      ) : (
        <></>
      )}
    </>
  );
}
