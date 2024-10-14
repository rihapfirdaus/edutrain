import CatalogJobrole from "@/components/card/CatalogJobrole";
import TemplateCatalog from "@/components/template/TemplateCatalog";
import { auth } from "@/libs/actions/auth/tokenHandler";
import axiosInstance from "@/utils/axiosInstance";

export default async function JobrolePage() {
  const isAuth = await auth();

  let jobroles = [];
  let error = { status: false, message: "" };
  try {
    const response = await axiosInstance.get("/jobroles");
    const jobroleData = response.data.data;

    if (!jobroleData || jobroleData.length === 0) {
      error = { status: true, message: "Jobrole belum tersedia." };
    } else {
      jobroles = jobroleData;
    }
  } catch (err: any) {
    const errorMessage =
      err.response?.status === 404
        ? "Jobrole belum tersedia."
        : "Terjadi kesalahan, silakan coba lagi.";
    error = { status: true, message: errorMessage };
  }
  return (
    <TemplateCatalog
      entity="Job Role"
      auth={isAuth}
      error={{ status: false, message: "" }} // change this to error={error}
      title="Pilih saran konten sesuai minatmu."
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_3.jpg')",
        }}
        className="py-8 px-12 w-full flex gap-4 self-center justify-center items-center rounded-3xl text-white font-bold bg-cover flex-wrap"
      >
        {[...Array(20)].map((item) => (
          <CatalogJobrole />
        ))}
        {/* {jobroles.map(() => {
          <CatalogJobrole />;
        })} */}
      </div>
    </TemplateCatalog>
  );
}
