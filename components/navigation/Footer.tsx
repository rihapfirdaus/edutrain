"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as LocationIcon,
} from "lucide-react";
import {
  faInstagram as InstagramIcon,
  faYoutube as YoutubeIcon,
  faFacebookF as FacebookIcon,
  faTiktok as TiktokIcon,
  faXTwitter as TwitterIcon,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Footer() {
  const sosmeds = [
    {
      href: "https://www.instagram.com/uinsgd.official/",
      icon: InstagramIcon,
      label: "Instagram",
    },
    {
      href: "https://www.youtube.com/@uinsgd.official/",
      icon: YoutubeIcon,
      label: "Youtube",
    },
    {
      href: "https://www.facebook.com/uinsgdofficial/",
      icon: FacebookIcon,
      label: "Facebook",
    },
    {
      href: "https://www.tiktok.com/@uinsgd.official/",
      icon: TiktokIcon,
      label: "Tiktok",
    },
    {
      href: "https://x.com/uinsgd_official",
      icon: TwitterIcon,
      label: "Twitter",
    },
  ];

  const maps = [
    {
      href: "https://maps.app.goo.gl/Zkfx5i1n1eiFdfnk7",
      label: "Kampus 1",
      location:
        "Jalan A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614",
    },
    {
      href: "https://maps.app.goo.gl/W8j3R8WjWhR3cuBS9",
      label: "Kampus 2",
      location:
        "Jalan Cimencrang, Panyileukan, Cimencrang, Gedebage, Kota Bandung, Jawa Barat 40292",
    },
    {
      href: "https://maps.app.goo.gl/21MGcRK5RaioNJqC9",
      label: "Kampus 3",
      location:
        "Jalan Cileunyi, Kec. Cileunyi, Kabupatan Bandung, Jawa Barat 40622",
    },
  ];
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 65, 161, 0.8), rgba(0, 142, 214, 0.8)), url('/bg_uin_1.jpg'",
      }}
      className="flex flex-col py-12 px-4 md:px-8 gap-4 text-white bg-center bg-cover"
    >
      <div className="flex flex-col xl:flex-row justify-around flex-wrap gap-8 xl:gap-0">
        <section className="md:max-w-96 xl:min-w-80 flex flex-col gap-4">
          <p className="text-center md:text-start text-lg md:text-2xl font-bold">
            Tentang
          </p>
          <Link className="hover:underline" href="#">
            Tentang Kami
          </Link>
          <Link className="hover:underline" href="#">
            Kebijakan Privasi
          </Link>
        </section>
        <section className="md:max-w-96 xl:min-w-80 flex flex-col gap-4">
          <p className="text-center md:text-start text-lg md:text-2xl font-bold">
            Hubungi Kami
          </p>
          <Link
            className="hover:underline flex gap-2 items-center"
            href="https://wa.me/+6281214030521"
            target="_blank"
          >
            <PhoneIcon />
            <p>+62 (812) 1403 0521</p>
          </Link>
          <Link
            className="hover:underline gap-2 flex items-center"
            href="mailto:info@uinsgd.ac.id"
            target="_blank"
          >
            <MailIcon />
            <p>info@uinsgd.ac.id</p>
          </Link>
          <p className="flex gap-2">
            {sosmeds.map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                title={label}
                className="p-2 bg-white text-blue-800 max-w-8 min-w-8 min-h-8 max-h-8 flex items-center justify-center rounded-full"
              >
                <FontAwesomeIcon icon={icon} size="lg" />
              </Link>
            ))}
          </p>
        </section>
        <section className="md:max-w-96 xl:min-w-80 flex flex-col gap-4">
          <p className="text-center md:text-start text-lg md:text-2xl font-bold">
            Lokasi
          </p>
          {maps.map(({ href, label, location }) => (
            <div key={href}>
              <p className="flex gap-2 items-center font-bold">
                <LocationIcon /> {label}
              </p>
              <Link className="hover:underline" href={href}>
                {location}
              </Link>
            </div>
          ))}
        </section>
      </div>
      <p className="self-center text-center font-bold">
        &copy;2024 PTIPD UIN Sunan Gunung Djati Bandung
      </p>
    </div>
  );
}
