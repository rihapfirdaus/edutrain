"use server";
import { redirect } from "next/navigation";
import { removeAuthToken } from "./tokenHandler";
import { removeAccount } from "./cookieHandler";

export interface FinalReturn {
  status: number;
  message: string;
}

export async function logoutAction(): Promise<FinalReturn | void> {
  let finalReturn: FinalReturn | undefined;

  try {
    removeAuthToken();
    removeAccount();
  } catch (e: any) {
    finalReturn = {
      status: e.status || 500,
      message: e.message || "Logout gagal",
    };
  } finally {
    if (!finalReturn) {
      redirect("/");
    }
  }

  return finalReturn;
}
