"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React, { useState, useMemo } from "react";
import ArticleTabsBar from "./_components/ArticleTabsBar";
import { useRouter } from "next/navigation";
import BlogPagination from "@/app/blog/_components/BlogPagination";

import Image, { StaticImageData } from "next/image";
import { Clock4, MapPin, Search } from "lucide-react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

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

  // Calculate pagination
  const totalPages = Math.ceil(blogArticles.length / itemsPerPage);

  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogArticles.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, blogArticles]);

  // Reset to page 1 when items per page changes
  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-muted to-white">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-accent/10 via-white to-accent/5 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-primary text-center mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-primary/70 text-center leading-relaxed font-light mb-10 max-w-3xl mx-auto">
            Bienvenue sur notre blog, l&apos;endroit où nous parlons de toutes
            nos activités, de nos conseils et pratiques en matière de santé
            mentale, ainsi que de nos actualités communautaires et de nos
            histoires d&apos;impact.
          </p>

          {/* Modern Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
              <input
                type="search"
                name="search-blog"
                id="search-blog"
                placeholder="Rechercher des articles..."
                className="w-full py-4 pl-12 pr-32 rounded-xl border-2 border-primary/10 focus:border-primary/30 outline-none text-primary placeholder:text-primary/40 transition-colors shadow-sm"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg">
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ArticleTabsBar />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {paginatedArticles.map((article, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-primary/5 hover:border-primary/20 cursor-pointer"
              onClick={() => router.push(article.href)}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src={article.img}
                  fill
                  alt={article.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {article.tag && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white px-3 py-1 shadow-lg">
                      {article.tag}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col gap-4">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-primary/60">
                  <div className="flex items-center gap-2">
                    <Clock4 className="w-4 h-4 text-primary" />
                    <span className="font-medium">{article.pubDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium">{article.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-primary leading-tight line-clamp-3 group-hover:text-primary/80 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-base text-primary/70 leading-relaxed line-clamp-2">
                  {article.description}
                </p>

                {/* Read More Button */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(article.href);
                  }}
                  className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 group-hover:shadow-lg"
                >
                  Lire l&apos;article
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 mb-8">
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={blogArticles.length}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default Blogs;
