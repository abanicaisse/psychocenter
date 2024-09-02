import Image from "next/image";
import React from "react";
import psychocenterImg from "@/public/psycho-center.jpg";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks: { label: string; url: string }[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Events",
      url: "#",
    },
    {
      label: "Blog",
      url: "#",
    },
    {
      label: "About",
      url: "#",
    },
    {
      label: "Contact us",
      url: "#",
    },
  ];

  return (
    <footer className="flex mt-auto bg-secondary text-[#494444] mx-0 px-0">
      <div className="w-full max-w-[80rem] flex flex-col gap-5 px-4 md:px-12 py-3 md:py-8 mx-auto mb-0">
        <div className="w-full block md:flex gap-4 justify-between items-start">
          <div className="w-full flex items-center gap-8 mb-10 md:mb-0">
            <Image
              src={psychocenterImg}
              width={128}
              height={128}
              alt="psychocenter"
            />
            <p className="w-fit max-w-[20.625rem] text-[#494444]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate atque perspiciatis harum molestiae asperiores error!
            </p>
          </div>
          <div className="w-full flex gap-10 justify-between">
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link href={link.url} className="hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-primary text-2xl">Registered Office</h2>
              <p>D.R.Congo, Sud-Kivu 243</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-between gap-5 border-t-[1px] border-t-solid  pt-12 pb-6">
          <div className="flex gap-4 items-center">
            <Link href={"#"}>
              <Facebook width={24} height={24} className="hover:underline" />
            </Link>
            <Link href={"#"}>
              <Linkedin width={24} height={24} className="hover:underline" />
            </Link>
            <Link href={"#"}>
              <Instagram width={24} height={24} className="hover:underline" />
            </Link>
          </div>
          <p className="cursor-pointer hover:underline">+243 000-000-000</p>
          <p className="cursor-pointer hover:underline">
            psychocenter@gmail.com
          </p>
          <p className="cursor-pointer hover:underline">
            &copy;Copyright - psychocenter asbl
          </p>
        </div>
        <p className="w-full text-center border-t-[1px] border-t-solid pt-6">
          Built with love by{" "}
          <Link
            href={"https://www.github.com/abanicaisse"}
            target="_blank"
            className="underline hover:underline"
          >
            Aba Nicaisse
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
