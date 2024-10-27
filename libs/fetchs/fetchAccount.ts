import axiosInstance from "@/utils/axiosInstance";
import { Account } from "../entities/Account";
import { auth } from "../actions/tokenHandler";

export async function getAccount() {
  try {
    const isAuth = await auth();
    if (isAuth) {
      const response = await axiosInstance.get("/profile");

      const account: Account = response.data.data;
      return account;
    } else {
      return null;
    }
  } catch (err: any) {
    return err;
  }
}
