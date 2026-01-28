"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

import { Clock4, MapPin } from "lucide-react";

import psychoEdImg from "@/public/activites/psychoeducation-de-groupe.jpeg";
import seanceDiscGroup from "@/public/activites/seance-discussion-de-groupe-batumba.jpeg";
import { useRouter } from "next/navigation";

const LatestArticles = () => {
  const router = useRouter();

  const latestArticles: {
    title: string;
    pubDate: string;
    description: string;
    location: string;
    img: StaticImageData;
    tag?: string;
    href: string;
  }[] = [
    {
      title:
        "Psychoeducation de groupe sur la santé et droit sexuelle à Irangui, Chefferie de Lundi",
      pubDate: "01 Août, 2025",
      description:
        "Psychoeducation de groupe sur la santé et droit sexuelle à Irangui, Chefferie de Lundi",
      location: "Mwenga, Sud-Kivu",
      img: psychoEdImg,
      tag: "Activité",
      href: "/blog/psychoeducation-de-groupe",
    },
    {
      title: "Seance de discussion de groupe á Batumba, chefferie de Basile",
      pubDate: "02 Août, 2025",
      description:
        "Seance de discussion de groupe á Batumba, chefferie de Basile",
      location: "Mwenga, Sud-Kivu",
      img: seanceDiscGroup,
      tag: "Activité",
      href: "/blog/seance-discussion-de-groupe-de-batumba",
    },
  ];
  return (
    <section className="pt-[1.5rem] pb-[2rem] -mt-[0rem] bg-white">
      <div className="w-full flex flex-col gap-[2rem] md:gap-[3.45rem] max-w-[80rem] px-4 md:px-12 py-3 md:py-8 mx-auto mb-0">
        <h1 className="text-center text-3xl font-semibold leading-normal">
          Articles Recents de Notre Blog
        </h1>
        <div className="w-full flex flex-col gap-12 md:gap-16">
          {latestArticles.map((article, i) => (
            <div
              key={i}
              className={`w-full flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-[1.5rem]`}
            >
              <div className="w-full flex-1 flex flex-col md:flex-row  gap-6">
                {i % 2 !== 0 && (
                  <div className="w-full hidden md:flex md:w-[10px] h-[10px] md:h-full bg-accent rounded-lg"></div>
                )}
                <Image
                  src={article.img}
                  width={100}
                  height={100}
                  alt={`activité ${i + 1}`}
                  className="w-full rounded-[0.6rem]"
                />
                {i % 2 === 0 && (
                  <div className="w-full md:w-[10px] h-[10px] md:h-full bg-accent rounded-lg"></div>
                )}
                {i % 2 !== 0 && (
                  <div className="w-full md:hidden md:w-[10px] h-[10px] md:h-full bg-accent rounded-lg"></div>
                )}
              </div>
              <div className="w-full flex-1">
                <h1 className="text-2xl font-semibold leading-normal mb-6">
                  {article.title}
                </h1>
                <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-3">
                  <Clock4 /> <span>{article.pubDate}</span>
                </p>
                <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-6">
                  <MapPin /> <span>{article.location}</span>
                </p>
                <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-xl mb-3">
                  {article.description}
                </p>
                <Button
                  onClick={() => router.push(article.href)}
                  className="bg-primary hover:scale-[1.01] hover:bg-accent hover:text-primary mt-[1.5rem] md:mt-[3rem]"
                >
                  Lire l&apos;article
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={() => router.push("/blog")}
          className="w-fit mx-auto bg-white text-primary hover:bg-primary hover:text-accent border-[1px] border-primary mt-0"
        >
          Visiter Notre Blog
        </Button>
      </div>
    </section>
  );
};

export default LatestArticles;
