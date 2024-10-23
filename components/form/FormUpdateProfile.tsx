"use client";
import { useState } from "react";
import CardBase from "../card/CardBase";
import { Input } from "../custom/Input";
import { Select } from "../custom/Select";
import {
  inputDateFormatter,
  ISOFormatter,
} from "@/libs/helpers/formatter/dateFormatter";
import { CheckCircle as SuccesIcon, Frown as FailedIcon } from "lucide-react";
import ModalAction from "../modal/ModalAction";
import { FinalReturn, updateProfile } from "@/libs/actions/account/actions";

interface FormUpdateProfileProps {
  account: any | null;
}

export default function FormUpdateProfile({ account }: FormUpdateProfileProps) {
  const [fullname, setFullname] = useState(account?.fullname || "");
  const [email, setEmail] = useState(account?.email || "");
  const [username, setUsername] = useState(account?.username || "");
  const [gender, setGender] = useState(account?.gender || "");
  const [birthdate, setBirthdate] = useState(
    account?.birthdate || "01-01-2001"
  );
  const [organization, setOrganization] = useState(account?.organization || "");
  const [university, setUniversity] = useState(account?.university || "");
  const [phone, setPhone] = useState(account?.phone || "");
  const [address, setAddress] = useState(account?.address || "");

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<FinalReturn>();

  const handleEditMode = () => setEditMode(!editMode);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("id", account.id);
    formData.append("fullname", fullname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append(
      "gender",
      gender === "Laki-laki"
        ? "LAKI_LAKI"
        : gender === "Perempuan"
        ? "PEREMPUAN"
        : gender
    );
    formData.append("birthdate", ISOFormatter(birthdate));
    formData.append("university", university);
    formData.append("organization", organization);
    formData.append("phone", phone);
    formData.append("address", address);

    const result: FinalReturn = await updateProfile(formData);

    setLoading(false);
    setResponse(result);
  };

  return (
    <>
      <CardBase className="flex-col p-4 md:p-8">
        <h1 className="text-xl font-bold">
          {editMode ? "Edit Profil" : "Profil Anda"}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            label="Username"
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled
          />

          <Input
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />

          <Input
            label="Nama lengkap"
            type="text"
            placeholder="Fullname"
            name="fullname"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            disabled={loading || !editMode}
          />

          <Select
            label="Jenis Kelamin"
            placeholder="Jenis Kelamin"
            name="gender"
            option={["Laki-laki", "Perempuan"]}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            disabled={loading || !editMode}
          />

          <Input
            label="Tanggal Lahir"
            type="date"
            placeholder="Tanggal Lahir"
            name="birthdate"
            value={inputDateFormatter(birthdate)}
            onChange={(e) => setBirthdate(e.target.value)}
            required
            disabled={loading || !editMode}
          />

          <Input
            label="Instansi"
            type="text"
            placeholder="Instansi"
            name="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            required
            disabled={loading || !editMode}
          />

          <Input
            label="Universitas"
            type="text"
            placeholder="Universitas"
            name="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
            disabled={loading || !editMode}
          />

          <Input
            label="No. Telepon"
            type="tel"
            placeholder="No. Telepon"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={loading || !editMode}
          />

          <Input
            label="Alamat"
            type="textarea"
            placeholder="Alamat"
            name="alamat"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            disabled={loading || !editMode}
          />

          {editMode ? (
            <div className="self-start flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center"
              >
                {loading ? (
                  <span className="animate-pulse">Tunggu Sebentar</span>
                ) : (
                  "Perbarui Profil"
                )}
              </button>
              <button
                type="reset"
                className="text-black rounded-lg p-2 text-center hover:bg-[#f4f4f4]"
                onClick={handleEditMode}
              >
                Batalkan
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="text-white font-bold rounded-lg p-2 bg-[#0041A1] text-center self-start"
              onClick={handleEditMode}
            >
              Edit Profil
            </button>
          )}
        </form>
      </CardBase>
      {response?.status === 200 ? (
        <ModalAction action={() => setResponse(undefined)}>
          <SuccesIcon size={58} />
          <p className="text-2xl text-center">{response.message}</p>
          <button
            className="text-white font-bold rounded-lg py-2 px-4 bg-[#0041A1] text-center shadow-lg hover:"
            onClick={() => {
              setLoading(false);
              window.location.reload();
            }}
          >
            OK
          </button>
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
