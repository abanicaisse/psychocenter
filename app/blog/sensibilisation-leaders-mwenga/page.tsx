"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Clock4, MapPin } from "lucide-react";

import activiteImg from "@/public/activites/sensibilisation-leader-mwenga.jpeg";

const SensibilisationLeadersMwenga = () => {
  const blogArticle: {
    title: string;
    pubDate: string;
    description: string;
    location: string;
    img: StaticImageData;
    tag?: string;
  } = {
    title: "Sensibilisation des leaders communautaires á Mwenga Centre",
    pubDate: "02 Août, 2025",
    description: "Sensibilisation des leaders communautaires á Mwenga Centre",
    location: "Mwenga, Sud-Kivu",
    img: activiteImg,
    tag: "Activité",
  };

  return (
    <main className="pt-[3rem] -mt-[2rem]">
      <div className="w-full flex items-center max-w-[80rem] px-4 md:px-12 py-3 md:py-8 mx-auto mb-0">
        <div className={`w-full flex flex-col gap-[1.5rem]`}>
          <h1 className="text-2xl font-semibold leading-normal mb-0">
            {blogArticle.title}
          </h1>
          <div className="w-full flex-1 flex flex-col gap-6">
            <Image
              src={blogArticle.img}
              width={100}
              height={100}
              alt={`activité`}
              className="w-full rounded-[0.6rem]"
            />
          </div>
          <div className="w-full flex-1">
            <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-3">
              <Clock4 /> <span>{blogArticle.pubDate}</span>
            </p>
            <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-6">
              <MapPin /> <span>{blogArticle.location}</span>
            </p>
            <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-xl mb-3">
              {blogArticle.description}
            </p>
          </div>
          <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg -mt-3"></p>
          <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg -mt-3"></p>
          <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg -mt-3"></p>
        </div>
      </div>
    </main>
  );
};

export default SensibilisationLeadersMwenga;
