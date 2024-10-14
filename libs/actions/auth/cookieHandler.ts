"use server";
import { cookies } from "next/headers";

export interface Account {
  id: string;
  fullname: string;
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
  phone: string | null;
  address: string | null;
  birthdate: string | null;
  organization: string | null;
  gender: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function storeAccount(account: Account) {
  cookies().set({
    name: "account",
    value: JSON.stringify(account),
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
    maxAge: 6 * 60 * 60,
  });
}

export async function getAccount() {
  const cookieStore = cookies();
  const accountCookie = cookieStore.get("account");

  if (accountCookie) {
    try {
      const accountData = accountCookie.value;
      return JSON.parse(accountData) as Account;
    } catch (error) {
      console.error("Error parsing account data from cookie:", error);
      return null;
    }
  }
  return null;
}

export async function removeAccount() {
  cookies().delete("account");
}
