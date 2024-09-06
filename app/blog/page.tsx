import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ArticleTabsBar from "./ArticleTabsBar";
import activite1 from "@/public/articles/psycho-center-activite1.jpeg";
import Image, { StaticImageData } from "next/image";
import { Clock4, MapPin } from "lucide-react";

const Blogs = () => {
  const blogArticles: {
    title: string;
    pubDate: string;
    description: string;
    location: string;
    img: StaticImageData;
    tag?: string;
  }[] = [
    {
      title: "Sensibilisation aux déplacés internes lors de la clinique mobile",
      pubDate: "05 Septembre, 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos debitis ducimus velit officiis qui.",
      location: "Bukavu, Sud-Kivu",
      img: activite1,
      tag: "Activité",
    },
    {
      title: "Sensibilisation aux déplacés internes lors de la clinique mobile",
      pubDate: "05 Septembre, 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos debitis ducimus velit officiis qui.",
      location: "Bukavu, Sud-Kivu",
      img: activite1,
      tag: "Général ",
    },
    {
      title: "Sensibilisation aux déplacés internes lors de la clinique mobile",
      pubDate: "05 Septembre, 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos debitis ducimus velit officiis qui.",
      location: "Bukavu, Sud-Kivu",
      img: activite1,
      tag: "Général ",
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
            Bienvenue sur notre blog, l'endroit où nous parlons de toutes nos
            activités, de nos conseils et pratiques en matière de santé mentale,
            ainsi que de nos actualités communautaires et de nos histoires
            d'impact.
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
            rowGap: "2rem",
            columnGap: "2.5rem",
            justifyContent: "center",
          }}
        >
          {blogArticles.map((article, i) => (
            <div className={`w-full flex flex-col gap-[1.5rem]`}>
              <div className="w-full flex-1 flex flex-col gap-6">
                <Image
                  src={article.img}
                  width={100}
                  height={100}
                  alt={`activité ${i + 1}`}
                  className="w-full rounded-[0.6rem]"
                />
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
                <Button className="bg-primary hover:scale-[1.01] hover:bg-accent hover:text-primary mt-[1.5rem] md:mt-[3rem]">
                  Lire l'article
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
