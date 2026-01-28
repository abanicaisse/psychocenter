import Image from "next/image";
import psychocenter from "@/public/psycho-center.jpg";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Target,
  Users,
  TrendingUp,
  HeartHandshake,
  Scale,
  Meh,
  Gauge,
  ShieldCheck,
  Stamp,
  ArrowRight,
  Award,
  Globe,
  HandHeart,
} from "lucide-react";
import Link from "next/link";

export default function AboutUsPage() {
  const principles = [
    {
      icon: HeartHandshake,
      title: "Solidarité",
      desc: "Nous croyons en l'entraide et le soutien mutuel au sein des communautés",
    },
    {
      icon: Scale,
      title: "Défense des droits",
      desc: "Protection active des droits humains et de la dignité de chaque personne",
    },
    {
      icon: Meh,
      title: "Neutralité",
      desc: "Impartialité totale dans toutes nos interventions et actions",
    },
    {
      icon: Gauge,
      title: "Responsabilité",
      desc: "Transparence et redevabilité envers les communautés que nous servons",
    },
    {
      icon: ShieldCheck,
      title: "Impartialité",
      desc: "Traitement équitable pour tous, sans discrimination",
    },
    {
      icon: Stamp,
      title: "Indépendance",
      desc: "Autonomie d'action et de décision dans nos missions",
    },
  ];

  const objectives = [
    {
      title: "Prise en charge psycho-sociale",
      desc: "Contribuer à la prise en charge psycho-sociale des personnes vulnérables suite aux diverses violences",
    },
    {
      title: "Mobilisation communautaire",
      desc: "Mobiliser les communautés en vue de contribuer au bien-être psychosocial collectif",
    },
    {
      title: "Lutte contre les violences",
      desc: "Contribuer à la lutte contre les violences en général et les VSBG en particulier",
    },
    {
      title: "Espaces de rayonnement",
      desc: "Aménager des espaces de rayonnement communautaires et d'échange pour favoriser le dialogue",
    },
    {
      title: "Développement socio-économique",
      desc: "Contribuer au développement socio-économique et à l'amélioration de la santé mentale des communautés",
    },
  ];

  const stats = [
    { icon: Users, value: "1220+", label: "Personnes aidées" },
    { icon: Target, value: "13", label: "Membres actifs" },
    { icon: Globe, value: "3", label: "Localités" },
    { icon: HandHeart, value: "3", label: "Volontaires" },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Fondation",
      desc: "Création de Psycho-Center ASBL par des professionnels en psychologie sociale",
    },
    {
      year: "2015",
      title: "Expansion",
      desc: "Extension de nos services à plusieurs localités du Sud-Kivu",
    },
    {
      year: "2020",
      title: "Impact communautaire",
      desc: "Plus de 1000 personnes bénéficiaires de nos programmes psychosociaux",
    },
    {
      year: "2026",
      title: "Présent",
      desc: "Continuation de notre mission avec une équipe renforcée et diversifiée",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/40 via-white to-accent/10 overflow-hidden -mt-10 pt-20 pb-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-primary/60 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">À Propos</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  À Propos de Psychocenter ASBL
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
                Au Service du
                <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mt-2">
                  Bien-être Psychosocial
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-primary/70 leading-relaxed">
                Depuis 2012, nous œuvrons pour promouvoir le bien-être
                psychosocial des populations de la RDC et de la sous-région des
                Grands Lacs à travers une approche communautaire.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">14+</p>
                    <p className="text-sm text-primary/60">
                      Ans d&apos;expérience
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md border border-primary/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">1220+</p>
                    <p className="text-sm text-primary/60">Personnes aidées</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

                {/* Main image */}
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
                  <Image
                    src={psychocenter}
                    alt="Psychocenter ASBL"
                    fill
                    className="object-cover rounded-3xl shadow-2xl relative z-10 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border-2 border-accent/30 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-primary/60">Depuis</p>
                      <p className="text-2xl font-bold text-primary">2012</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:hidden mb-8">
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl"></div>
                <Image
                  src={psychocenter}
                  alt="Notre équipe"
                  fill
                  className="object-cover rounded-3xl shadow-xl relative z-10"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Notre Histoire
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Qui Sommes-Nous?
              </h2>

              <p className="text-lg text-primary/80 leading-relaxed">
                Créée en 2012, l&apos;association sans but lucratif dénommée{" "}
                <strong>Psycho-Center</strong> en abrégé{" "}
                <strong>PSY-CO ASBL</strong>, est une organisation de
                professionnels en psychologie sociale ayant comme objectif
                principal de promouvoir le bien-être psychosocial et
                socio-économique des populations et communautés de la RDC.
              </p>

              <p className="text-lg text-primary/80 leading-relaxed">
                Nous travaillons particulièrement dans la sous-région des Grands
                Lacs au travers d&apos;une approche communautaire qui place les
                communautés au cœur de nos interventions et favorise leur
                autonomisation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 bg-gradient-to-br from-accent/10 to-white rounded-2xl border border-accent/20">
                  <p className="text-4xl font-bold text-primary mb-2">2012</p>
                  <p className="text-primary/70 font-medium">
                    Année de création
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-white rounded-2xl border border-primary/20">
                  <p className="text-4xl font-bold text-primary mb-2">14+</p>
                  <p className="text-primary/70 font-medium">
                    Années d&apos;expérience
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] w-full">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl"></div>
                <Image
                  src={psychocenter}
                  alt="Notre équipe"
                  fill
                  className="object-cover rounded-3xl shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Notre Mission
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ce Qui Nous Guide
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary via-primary to-primary/95 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"></div>
            <div className="relative z-10">
              <Target className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Notre Mission
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed text-white/95 max-w-4xl">
                Psycho-Center ASBL a pour mission de promouvoir
                l&apos;auto-prise en charge des communautés pour le bien-être
                psychosocial des individus qui les composent, au travers
                d&apos;une approche psychosociale communautaire participative et
                durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <HeartHandshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Nos Valeurs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Principes Fondamentaux
            </h2>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              Les valeurs qui guident chacune de nos actions et interventions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-accent/5 to-white rounded-2xl border-2 border-accent/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {principle.title}
                </h3>
                <p className="text-primary/70 leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Nos Objectifs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Ce Que Nous Visons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white rounded-2xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center flex-shrink-0 font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-primary/70 leading-relaxed">
                      {objective.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Notre Parcours
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Notre Évolution
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}
                  >
                    {idx % 2 === 0 && (
                      <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
                        <h3 className="text-3xl font-bold text-primary mb-2">
                          {milestone.year}
                        </h3>
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-primary/70">{milestone.desc}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent"></div>
                  </div>

                  <div
                    className={`flex-1 ${idx % 2 === 1 ? "md:text-left" : "md:text-right"}`}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
                      <h3 className="text-3xl font-bold text-primary mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-xl font-semibold text-primary mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-primary/70">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre Impact
            </h2>
            <p className="text-xl text-white/90">
              Des chiffres qui témoignent de notre engagement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all text-center"
              >
                <stat.icon className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Rejoignez Notre Mission
          </h2>
          <p className="text-xl text-primary/80 mb-8 leading-relaxed">
            Ensemble, nous pouvons créer un impact durable sur le bien-être
            psychosocial des communautés. Votre soutien fait la différence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all group">
              Faire un don
              <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all group"
              >
                Nous contacter
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
