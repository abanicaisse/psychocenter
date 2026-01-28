"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Gauge,
  HeartHandshake,
  Meh,
  Scale,
  ShieldCheck,
  Stamp,
  Target,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const AboutUs = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState("Introduction");

  const tabs: { tabName: string }[] = [
    {
      tabName: "Introduction",
    },
    {
      tabName: "Principes",
    },
    {
      tabName: "Mission",
    },
    {
      tabName: "Objectifs",
    },
  ];

  return (
    <section
      className={cn(
        "relative py-20 bg-gradient-to-b from-white via-muted/30 to-white",
        className,
      )}
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Notre Organisation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            À Propos de Nous
          </h2>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto">
            Découvrez notre mission et nos valeurs au service des communautés
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab.tabName)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.tabName
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white text-primary border-2 border-primary/10 hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/5">
          {activeTab === "Introduction" && (
            <div className="space-y-6">
              <p className="text-lg text-primary/80 leading-relaxed">
                Créée en 2012, l&apos;association sans but lucratif dénommée
                Psycho-Center en abrégé PSY-CO asbl, est une organisation des
                professionnels en psychologie sociale ayant comme objectif
                principal de promouvoir le bien-être psychosocial et
                socio-économique des populations et communautés de la RDC en
                particulier de la sous-région des grands lacs en général au
                travers d&apos;une approche Communautaire.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                En savoir plus
              </Button>
            </div>
          )}

          {activeTab === "Principes" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: HeartHandshake,
                  title: "Solidarité",
                  desc: "Entraide et soutien mutuel",
                },
                {
                  icon: Scale,
                  title: "Défense des droits",
                  desc: "Protection des droits humains",
                },
                {
                  icon: Meh,
                  title: "Neutralité",
                  desc: "Impartialité dans nos actions",
                },
                {
                  icon: Gauge,
                  title: "Responsabilité",
                  desc: "Transparence et redevabilité",
                },
                {
                  icon: ShieldCheck,
                  title: "Impartialité",
                  desc: "Traitement équitable pour tous",
                },
                {
                  icon: Stamp,
                  title: "Indépendance",
                  desc: "Autonomie d'action",
                },
              ].map((principle, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-gradient-to-br from-accent/5 to-white rounded-2xl border-2 border-accent/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <principle.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-primary/70">{principle.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Mission" && (
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-accent/10 to-white rounded-2xl border border-accent/30">
                <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Notre Mission
                  </h3>
                  <p className="text-lg text-primary/80 leading-relaxed">
                    Psycho-center asbl a pour mission de promouvoir l&apos;auto
                    prise en charge des communautés pour le bien-être
                    psychosocial des individus qui les composent au travers
                    d&apos;une approche psychosociale communautaire.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Objectifs" && (
            <div className="space-y-4">
              {[
                "Contribuer à la prise en charge psycho-sociale des personnes vulnérables suite aux diverses violences",
                "Mobiliser les communautés en vue de contribuer au bien-être psychosocial",
                "Contribuer à la lutte contre les violences en général et les VSBG en particulier",
                "Aménager des espaces de rayonnement communautaires et d'échange",
                "Contribuer au développement socio-économique et à l'amélioration de la santé mentale",
              ].map((objective, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-gradient-to-r from-accent/5 to-white rounded-xl border-l-4 border-primary hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-primary/80 pt-1">{objective}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-br from-accent via-accent to-accent/90 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/20">
            {[
              { icon: Users, value: "13", label: "Membres" },
              { icon: Target, value: "3", label: "Localités" },
              { icon: Heart, value: "1220", label: "Personnes aidées" },
              { icon: TrendingUp, value: "3", label: "Volontaires" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 text-center group hover:bg-accent/80 transition-all"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-primary/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
