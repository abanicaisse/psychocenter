"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Clock4, MapPin, ArrowRight, BookOpen } from "lucide-react";

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
    <section className="relative py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Notre Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Articles Récents
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto">
            Découvrez nos dernières activités et initiatives au service des
            communautés
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-12">
          {latestArticles.map((article, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary/5 hover:border-primary/20"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  i % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden ${
                    i % 2 !== 0 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={article.img}
                    fill
                    alt={article.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {article.tag && (
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-primary text-white px-4 py-2 text-sm shadow-xl">
                        {article.tag}
                      </Badge>
                    </div>
                  )}
                  {/* Decorative accent bar */}
                  <div
                    className={`absolute ${
                      i % 2 === 0 ? "right-0" : "left-0"
                    } top-0 bottom-0 w-2 bg-accent`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Meta */}
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
                    <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight group-hover:text-primary/80 transition-colors line-clamp-3">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-primary/70 leading-relaxed line-clamp-3">
                      {article.description}
                    </p>

                    {/* CTA */}
                    <Button
                      onClick={() => router.push(article.href)}
                      className="w-fit bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group/btn"
                    >
                      Lire l&apos;article
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl shadow-2xl">
            <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Explorez Tous Nos Articles
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              Découvrez l&apos;ensemble de nos activités, conseils et histoires
              d&apos;impact
            </p>
            <Button
              onClick={() => router.push("/blog")}
              variant="outline"
              className="bg-white text-primary hover:bg-accent hover:text-primary border-2 border-white font-semibold px-8 py-6 text-lg rounded-xl transition-all group"
            >
              Visiter Notre Blog
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
