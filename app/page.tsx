import Image from "next/image";
import psychocenter from "@/public/psycho-center.jpg";
import { Button } from "@/components/ui/button";
import AboutUs from "./_components/AboutUs";
import TeamMembers from "./_components/TeamMembers";
import LatestArticles from "./_components/LatestArticles";
import { ArrowRight, Heart, Users, Target } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative min-h-[85vh] bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden pt-[-4rem] -mt-[3rem]">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>

        <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto pt-20 pb-16 md:pt-28 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-8 text-white">
              <div className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Santé Mentale pour Tous
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-accent">Soins de Santé Mentale:</span>
                <br />
                <span className="text-white">
                  Prise en charge psychosociale
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-2xl">
                Accompagnement individuel et communautaire pour le bien-être
                psychologique et social de tous.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all group">
                  Découvrir nos services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-xl transition-all"
                >
                  Nous contacter
                </Button>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-white/20">
                <div>
                  <p className="text-3xl font-bold text-accent">1220+</p>
                  <p className="text-white/70 text-sm">Personnes aidées</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">13</p>
                  <p className="text-white/70 text-sm">Professionnels</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">3</p>
                  <p className="text-white/70 text-sm">Localités</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square w-full max-w-lg ml-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
                <Image
                  src={psychocenter}
                  alt="Psychocenter"
                  fill
                  className="object-cover rounded-3xl shadow-2xl ring-4 ring-white/10 relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </main>

      <AboutUs className="" />
      <TeamMembers />
      <LatestArticles />
    </>
  );
}
