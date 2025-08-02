"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import ArticleTabsBar from "./ArticleTabsBar";
import { useRouter } from "next/navigation";

import Image, { StaticImageData } from "next/image";
import { Clock4, MapPin } from "lucide-react";

import psychoEdImg from "@/public/activites/psychoeducation-de-groupe.jpeg";
import seanceDiscGroup from "@/public/activites/seance-discussion-de-groupe-batumba.jpeg";
import sensibilisationAVEC from "@/public/activites/sensibilisation-AVEC-1.jpeg";
import sensibilisationEleves from "@/public/activites/sensibilisation-eleves.jpeg";
import sensibilisationMasculinite from "@/public/activites/sensibilisation-masculinite.jpeg";
import sensibilisationLeaders from "@/public/activites/sensibilisation-leader-mwenga.jpeg";
import sensibilisationFamilleDeplacee from "@/public/activites/sensibilisation-famille-deplacee.jpeg";
import SensibilisationFemmesTheme from "@/public/activites/sensibilisations-femmes-theme.jpeg";

const Blogs = () => {
  const router = useRouter();
  const blogArticles: {
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
    {
      title:
        "Sensibilisation aux membres de l’Association Villageoises d’Epargne et de Credit( AVEC ) Psychocenter à Wamulinde",
      pubDate: "02 Août, 2025",
      description:
        "Sensibilisation aux membres de l’Association Villageoises d’Epargne et de Credit( AVEC ) Psychocenter à Wamulinde",
      location: "Mwenga, Sud-Kivu",
      img: sensibilisationAVEC,
      tag: "Activité",
      href: "/blog/sensibilisation-AVEC",
    },
    {
      title: "Sensibilisation aux familles déplacées à Iganda Wamuzimu",
      pubDate: "02 Août, 2025",
      description: "Sensibilisation aux familles déplacées à Iganda Wamuzimu",
      location: "Mwenga, Sud-Kivu",
      img: sensibilisationFamilleDeplacee,
      tag: "Activité",
      href: "/blog/sensibilisation-familles-deplacees",
    },
    {
      title:
        "Activités de sensibilisation aux femmes sur les violences basées sur le genre (vbg) à Irangî /Luindi/ Mwenga",
      pubDate: "02 Août, 2025",
      description:
        "Sensibilisation aux femmes sur les violences basées sur le genre (VBG) à Irangî /Luindi/ Mwenga",
      location: "Mwenga, Sud-Kivu",
      img: SensibilisationFemmesTheme,
      tag: "Activité",
      href: "/blog/sensibilisation-femmes-theme",
    },
    {
      title: "Sensibilisation des leaders communautaires á Mwenga Centre",
      pubDate: "02 Août, 2025",
      description: "Sensibilisation des leaders communautaires á Mwenga Centre",
      location: "Mwenga, Sud-Kivu",
      img: sensibilisationLeaders,
      tag: "Activité",
      href: "/blog/sensibilisation-leaders-mwenga",
    },
    {
      title: "Sensibilisation sur la masculinité positive",
      pubDate: "02 Août, 2025",
      description: "Sensibilisation sur la masculinité positive",
      location: "Lwindi, Sud-Kivu",
      img: sensibilisationMasculinite,
      tag: "Activité",
      href: "/blog/sensibilisation-masculinite",
    },
    {
      title: "Sensibilisation des élèves à l’institut de Kalama Lwindi",
      pubDate: "02 Août, 2025",
      description: "Sensibilisation des élèves à l’institut de Kalama Lwindi",
      location: "Lwindi, Sud-Kivu",
      img: sensibilisationEleves,
      tag: "Activité",
      href: "/blog/sensibilisations-des-eleves",
    },
  ];
  return (
    <main className="pt-[3rem] -mt-[3rem]">
      <div className="w-full flex flex-col max-w-[80rem] px-4 md:px-12 py-3 md:py-8 mx-auto mb-0">
        <div className="w-full max-w-[38.625rem] mx-auto flex flex-col items-center gap-6 text-center mt-4">
          <h1 className="text-center text-3xl font-semibold leading-normal">
            Blog
          </h1>
          <p className="text-[#7D7D7D] leading-[159%]">
            Bienvenue sur notre blog, l&apos;endroit où nous parlons de toutes
            nos activités, de nos conseils et pratiques en matière de santé
            mentale, ainsi que de nos actualités communautaires et de nos
            histoires d&apos;impact.
          </p>
          <div className="w-full h-fit flex items-center justify-between gap-2 border-[1px] rounded-[0.5rem] px-[0.75rem] py-[0.65rem]">
            <input
              type="search"
              name="search-blog"
              id="search-blog"
              placeholder="Rechercher le blog"
              className="w-full py-2 px-2 outline-none text-[#7D7D7D]"
            />
            <Button className="bg-primary hover:scale-[1.01] hover:bg-accent hover:text-primary">
              Rechercher
            </Button>
          </div>
        </div>
        <ArticleTabsBar />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(20.25rem, 1fr))",
            rowGap: "3rem",
            columnGap: "2.5rem",
            justifyContent: "center",
          }}
        >
          {blogArticles.map((article, i) => (
            <div key={i} className={`w-full flex flex-col gap-[1.5rem]`}>
              <div className="h-[280px] max-h-[280px] w-full flex-1 flex flex-col">
                <Image
                  src={article.img}
                  width={100}
                  height={100}
                  alt={`activité ${i + 1}`}
                  className="w-full h-[280px] object-cover rounded-[0.6rem]"
                />
              </div>
              <div className="w-full flex-1">
                <h1 className="text-2xl font-semibold leading-normal mb-6">
                  {article.title.split(" ").length > 5
                    ? article.title.split(" ").slice(0, 5).join(" ") + "..."
                    : article.title}
                </h1>
                <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-3">
                  <Clock4 /> <span>{article.pubDate}</span>
                </p>
                <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-lg mb-6">
                  <MapPin /> <span>{article.location}</span>
                </p>
                <p className="w-full flex gap-3 items-center text-[#7D7D7D] text-xl mb-3">
                  {article.description.split(" ").length > 7
                    ? article.description.split(" ").slice(0, 7).join(" ") +
                      "..."
                    : article.description}
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
      </div>
    </main>
  );
};

export default Blogs;
