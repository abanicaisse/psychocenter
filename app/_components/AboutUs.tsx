"use client";
import { Button } from "@/components/ui/button";
import {
  Gauge,
  HeartHandshake,
  Meh,
  Scale,
  ShieldCheck,
  Stamp,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
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
    <section className="pt-[1.5rem] -mt-[0rem] bg-whtie">
      <div className="w-full flex flex-col gap-4 max-w-[80rem] px-4 md:px-12 py-3 md:py-8 mx-auto mb-0">
        <h1 className="text-[#7D7D7D] text-[1.5rem]">A propos de nous</h1>
        <div>
          <div className="tabs w-full flex flex-wrap gap-4 [&::-webkit-scrollbar]:hidden cursor-pointer overflow-x-auto">
            {tabs.map((tab) => (
              <p
                onClick={() => {
                  setActiveTab(tab.tabName);
                }}
                className={`${
                  activeTab === tab.tabName
                    ? "bg-accent text-primary"
                    : "bg-[#E8E8E8] text-primary"
                } w-max flex items-center px-[0.5rem] py-[0.1rem] rounded-[1.5rem]`}
              >
                {tab.tabName}
              </p>
            ))}
          </div>
          <div className="mt-4">
            {activeTab === "Introduction" && (
              <>
                <p className="text-[#7D7D7D] leading-[159%]">
                  Crée en 2012, l&apos;association sans but lucrative dénommée
                  Psycho-Center en abrégé PSY-CO asbl, est une organisation des
                  professionnels en psychologies sociale ayant comme objectif
                  principal de promouvoir le bien être psychosociale et
                  socio-économique des populations et communautés de la RDC en
                  particulier de la sous-région des grands lacs en général au
                  travers d&apos;une approche Communautaire.
                </p>
                <Button className="bg-white text-primary hover:bg-primary hover:text-accent border-[1px] border-primary mt-5">
                  Lire Plus
                </Button>
              </>
            )}

            {activeTab === "Principes" && (
              <div className="w-full flex flex-col md:flex-row justify-center items-start md:items-center md:justify-start flex-wrap gap-6">
                <p className="w-[280px]md:w-fit flex gap-2 text-[#7D7D7D] ">
                  <HeartHandshake className="" />
                  <span>Solidarité</span>
                </p>
                <p className="w-[380px] md:w-fit flex gap-2 text-[#7D7D7D] ">
                  <Scale className="" />
                  <span>Défenses de droits humains</span>
                </p>
                <p className="w-[380px] md:w-fit flex gap-2 text-[#7D7D7D]">
                  <Meh className="" />
                  <span>Neutralité</span>
                </p>
                <p className="w-[380px]md:w-fit flex gap-2 text-[#7D7D7D]">
                  <Gauge className="" />
                  <span>Responsabilité et Transparence</span>
                </p>
                <p className="w-[380px] md:w-fit flex gap-2 text-[#7D7D7D]">
                  <ShieldCheck className="" />
                  <span>Impartialité</span>
                </p>
                <p className="w-[380px]md:w-fit flex gap-2 text-[#7D7D7D]">
                  <Stamp className="" />
                  <span>Indépendance</span>
                </p>
              </div>
            )}

            {activeTab === "Mission" && (
              <>
                <p className="text-[#7D7D7D] leading-[159%]">
                  Psycho-center asbl a pour mission de promouvoir l&apos;auto
                  prise en charge des communautés pour le bien-être psychosocial
                  des individus qui les composent au travers d&apos;une approche
                  psychosociale communautaire.
                </p>
                <Button className="bg-white text-primary hover:bg-primary hover:text-accent border-[1px] border-primary mt-5">
                  Lire Plus
                </Button>
              </>
            )}

            {activeTab === "Objectifs" && (
              <>
                <ul className="text-[#7D7D7D] leading-[159%] list-disc ml-[1rem]">
                  <li>
                    Contribuer à la prise en charge psycho-sociale des personnes
                    vulnérables suite aux diverses violences
                  </li>
                  <li>
                    Mobiliser les communautés en vue de contribuer au bien-être
                    psychosocial et passer des communautés victimes aux
                    communautés thérapeutes actrices de changement{" "}
                  </li>
                  <li>
                    Contribuer à la lutte contre les violences en général, les
                    viols et les violences sexuelles basée sur le genre (VSBG)
                    en particulier
                  </li>
                  <li>
                    Aménager des espaces de rayonnement communautaires,
                    d&apos;information, d&apos;apprentissage et d&apos;échange
                    sur les approches psychosociales{" "}
                  </li>
                  <li>
                    Contribuer au développent socio-économique et a
                    l&apos;amélioration de la santé mentale des communautés.
                  </li>
                </ul>
                <Button className="bg-white text-primary hover:bg-primary hover:text-accent border-[1px] border-primary mt-5">
                  Lire Plus
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="stats w-full max-w-[60rem] mx-auto flex flex-col md:flex-row flex-wrap justify-center  gap-4 text-center bg-accent text-primary px-[2.5rem] py-[1rem] rounded-[0.9rem] mt-[2rem]">
          <div className="border-b-[3px] border-primary md:border-b-0 md:border-r-[3px] px-[2rem] pt-[0.5rem] pb-[2rem]">
            <p className="text-[3.25rem] font-semibold leading-normal">13</p>
            <p className="text-[1.25rem] font-semibold leading-normal">
              Membres
            </p>
          </div>
          <div className="border-b-[3px] border-primary md:border-b-0 md:border-r-[3px] pl-[2rem] pr-[3rem] pt-[0.5rem] pb-[2rem]">
            <p className="text-[3.25rem] font-semibold leading-normal">3</p>
            <p className="text-[1.25rem] font-semibold leading-normal">
              Localités
            </p>
          </div>
          <div className="border-b-[3px] border-primary md:border-b-0 md:border-r-[3px] px-[2rem] pt-[0.5rem] pb-[2rem]">
            <p className="text-[3.25rem] font-semibold leading-normal">1220</p>
            <p className="text-[1.25rem] font-semibold leading-normal">
              personnes aidées
            </p>
          </div>
          <div className="px-[2rem] pt-[0.5rem] pb-[2rem]">
            <p className="text-[3.25rem] font-semibold leading-normal">3</p>
            <p className="text-[1.25rem] font-semibold leading-normal">
              Volontaires
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
