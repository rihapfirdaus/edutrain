"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import axiosInstance from "@/utils/axiosInstance";

type Banner = {
  id: string;
  url: string;
  title: string;
};

export default function Carousel() {
  const [banners, setBanners] = useState<Banner[]>([]); // State untuk menyimpan data banner

  useEffect(() => {
    const fetch = async () => {
      const { status, data } = await axiosInstance.get("/banners");
      setBanners(data.data);
    };

    fetch();
  }, []);

  const settings = {
    className: "w-full",
    infinite: true,
    autoplaySpeed: 8000,
    speed: 4000,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {banners.map((banner) => (
        <Image
          className="w-auto h-auto"
          key={banner.id}
          src={banner.url}
          alt={banner.title}
          width={960}
          height={240}
          priority={true}
        />
      ))}
    </Slider>
  );
}
