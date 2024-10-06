"use server";
import { cookies } from "next/headers";

interface StoreTokenRequest {
  token: string;
}

export async function storeAuthToken(request: StoreTokenRequest) {
  cookies().set({
    name: "accessToken",
    value: request.token,
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    maxAge: 6 * 60 * 60,
  });
}

export async function auth() {
  const authToken = cookies().get("accessToken")?.value;

  return authToken ? true : false;
}

export async function getAuthToken() {
  const authToken = cookies().get("accessToken")?.value;

  return authToken;
}

export async function removeAuthToken() {
  cookies().delete("accessToken");
}
