export interface Account {
  id: string;
  fullname: string;
  username: string;
  email: string;
  phone: string | null;
  adress: string | null;
  birthdate: string | null;
  organization: string | null;
  university: string | null;
  gender: Gender;
}

export enum Gender {
  Male = "LAKI_LAKI",
  Female = "PEREMPUAN",
}
