"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Slider from "react-slick";

interface CarouselProps {
  slides: [{ id: string; url: string; title: string }];
}

export default function Carousel({ slides }: CarouselProps) {
  const settings = {
    className: "w-full",
    infinite: true,
    autoplaySpeed: 8000,
    speed: 4000,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <>
      {slides.length > 0 && (
        <Slider {...settings}>
          {slides.map((slide) => (
            <Image
              className="w-auto h-auto"
              key={slide.id}
              src={slide.url}
              alt={slide.title}
              width={960}
              height={240}
              priority={true}
            />
          ))}
        </Slider>
      )}
    </>
  );
}
