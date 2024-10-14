"use client";
import ButtonPicker from "@/components/custom/ButtonPicker";
import CatalogWebinar from "@/components/card/CatalogWebinar";
import HighlightProduct from "@/components/highlight/HighlightProduct";
import { useState } from "react";

export default function JobroleDetail() {
  const sampleDeskripsi = `
  <p>Cyber Security Manager memiliki peran dalam mengembangkan rencana strategis dan taktis untuk manajemen risiko keamanan informasi. Seorang Cyber Security Manager menetapkan kerangka kerja tata kelola keamanan informasi dengan tujuan memberikan jaminan bahwa strategi keamanan informasi konsisten dengan perundangan dan peraturan yang berlaku. Cyber Security Manager melakukan identifikasi inisiatif dan program keamanan utama melalui pendekatan berbasis risiko, mengomunikasikan inisiatif dan risiko keamanan kepada manajemen puncak dan pemangku kepentingan untuk memastikan bahwa risiko informasi dipahami dan diidentifikasi.</p>
  
  <h3>Tugas Utama:</h3>
  <ul>
    <li>Mengidentifikasi persyaratan standar keamanan</li>
    <li>Memilih kendali keamanan secara tepat</li>
    <li>Menilai kesesuaian organisasi dengan standar keamanan yang digunakan</li>
    <li>Menguraikan langkah implementasi Sistem Manajemen Keamanan Informasi</li>
    <li>Mengenali sasaran keamanan informasi</li>
    <li>Menggambarkan model rancangan arsitektur keamanan</li>
  </ul>
`;

  const sampleSkill = `
  <ul>
    <li>Bisa mengidentifikasikan persyaratan standar ISO 27001</li>
    <li>Bisa menentukan berbagai dokumentasi sesuai ISO 27001</li>
    <li>Bisa memilih kendali ISO 27001 secara tepat</li>
    <li>Bisa menilai kesesuaian organisasi dengan standar ISO 27001</li>
    <li>Bisa menguraikan langkah implementasi Sistem Manajemen Keamanan Informasi</li>
    <li>Bisa mengenali sasaran keamanan informasi</li>
    <li>Bisa menjelaskan kerangka arsitektur keamanan SABSA</li>
    <li>Bisa mengidentifikasikan enam layer arsitektur keamanan</li>
    <li>Bisa mendesain rancangan arsitektur keamanan SABSA</li>
    <li>Bisa menentukan jenis kendali keamanan informasi</li>
    <li>Bisa menggambarkan model rancangan arsitektur keamanan</li>
    <li>Bisa menilai risiko keamanan informasi</li>
  </ul>
`;

  const sampleData = [
    {
      id: "5c621113-bf9a-4ee6-840d-01de5d3f5b82",
      title: "Testing Webinar",
      banner:
        "https://edutrain.uinsgd.ac.id/api/dev/uploads/banner/webinar/1721215158584-a7e121a7-ef49-43d1-bb01-9a39de0edde4.png",
      description: "Webinar Event",
      startTime: "2024-07-25T18:18:00.000Z",
      endTime: "2024-07-25T23:00:00.000Z",
      eventStatus: "OFFLINE",
      maxAttendees: 100,
      lastWebinarHistoryId: "3e65cc7d-914b-46fc-b444-64477d05987c",
      certificate: null,
      categoryId: "43fa9698-c6bf-4269-a589-6720386d6de9",
      subCategoryId: "e460f1d3-1658-40ab-8d46-aff22b91e12e",
      createdAt: "2024-07-17T11:19:18.592Z",
      updatedAt: "2024-07-17T11:19:18.592Z",
      webinarHistories: [
        {
          id: "3e65cc7d-914b-46fc-b444-64477d05987c",
          price: "1000000",
          webinarId: "5c621113-bf9a-4ee6-840d-01de5d3f5b82",
          createdAt: "2024-07-17T11:19:18.592Z",
          updatedAt: "2024-07-17T11:19:18.592Z",
          discount: null,
        },
      ],
      lastWebinarHistory: {
        id: "3e65cc7d-914b-46fc-b444-64477d05987c",
        price: "1000000",
        webinarId: "5c621113-bf9a-4ee6-840d-01de5d3f5b82",
        createdAt: "2024-07-17T11:19:18.592Z",
        updatedAt: "2024-07-17T11:19:18.592Z",
        discount: null,
      },
      category: {
        id: "43fa9698-c6bf-4269-a589-6720386d6de9",
        name: "Testing",
        createdAt: "2024-06-26T05:13:33.549Z",
      },
      subCategory: {
        id: "e460f1d3-1658-40ab-8d46-aff22b91e12e",
        name: "Testing Sub",
        createdAt: "2024-06-26T05:13:40.145Z",
      },
    },
  ];

  const [productFilter, setProductFilter] = useState<Set<string>>(new Set());
  return (
    <div className="bg-[#f4f4f4] flex flex-col items-center gap-4 xl:gap-6 py-8 flex-grow">
      <div className="max-w-[calc(100%-1rem)] md:max-w-[calc(100%-4rem)] xl:max-w-[calc(100%-16rem)] flex flex-col w-full gap-4">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          Cyber Security Manager
        </h1>
        <div className="flex divide-x divide-black ml-[-0.5rem]">
          <p className="px-2">12 Skills</p>
          <p className="px-2">6 Courses</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="bg-white p-4 rounded-lg shadow-md lg:max-w-[calc((100%/3)*2)]">
            <h3 className="font-bold text-xl">Deskripsi</h3>
            <div dangerouslySetInnerHTML={{ __html: sampleDeskripsi }} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md lg:max-w-[calc(100%/3)]">
            <h3 className="font-bold text-xl">Skills</h3>
            <div dangerouslySetInnerHTML={{ __html: sampleSkill }} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-xl text-center md:text-start lg:text-2xl">
            Produk Terkait dengan Cyber Security Manager
          </h2>
          <ButtonPicker
            option={[
              "Semua Kelas",
              "ISO 27001 Security Governance",
              "Enterprise Architecture Security with SABSA",
              "Information System Security Protection Knowledge",
              "IT Security Awarness",
            ]}
            defaultValue="Semua Kelas"
            value={productFilter}
            setValue={(value) => setProductFilter(value)}
          />
          <HighlightProduct
            entity="Webinar"
            Card={CatalogWebinar}
            data={sampleData}
          />
        </div>
      </div>
    </div>
  );
}
