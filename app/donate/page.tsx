"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  Users,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time",
  );

  const donationAmounts = [25, 50, 100, 250, 500];

  const impactStories = [
    {
      amount: 25,
      impact: "Fournit une session de soutien psychosocial individuel",
      icon: Heart,
    },
    {
      amount: 50,
      impact: "Finance un atelier de groupe pour 10 personnes",
      icon: Users,
    },
    {
      amount: 100,
      impact: "Soutient une formation complète pour un volontaire",
      icon: Award,
    },
    {
      amount: 250,
      impact: "Permet d'organiser un programme communautaire d'un mois",
      icon: Globe,
    },
  ];

  const howWeUse = [
    {
      percentage: "75%",
      category: "Programmes directs",
      description: "Soutien psychosocial et interventions communautaires",
    },
    {
      percentage: "15%",
      category: "Formation & Développement",
      description: "Formation du personnel et développement de programmes",
    },
    {
      percentage: "10%",
      category: "Frais administratifs",
      description: "Gestion et opérations essentielles",
    },
  ];

  const whyDonate = [
    {
      icon: BadgeCheck,
      title: "Impact Mesurable",
      description:
        "Chaque don contribue directement au bien-être de nos bénéficiaires",
    },
    {
      icon: Shield,
      title: "Transparence Totale",
      description: "Rapports détaillés sur l'utilisation des fonds",
    },
    {
      icon: TrendingUp,
      title: "Résultats Prouvés",
      description: "Plus de 1220 personnes aidées depuis notre création",
    },
    {
      icon: Sparkles,
      title: "Changement Durable",
      description: "Approche communautaire pour un impact à long terme",
    },
  ];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    alert(
      `Merci pour votre générosité! Don ${donationType === "monthly" ? "mensuel" : "unique"} de $${amount}. (La page de paiement sera intégrée prochainement)`,
    );
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-12">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Faire un Don</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
                <Heart className="w-4 h-4 text-accent fill-accent" />
                <span className="text-sm font-semibold text-accent">
                  Soutenez Notre Mission
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Transformez Des Vies
                <span className="block text-accent mt-2">
                  Par Votre Générosité
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                Votre soutien permet à Psychocenter ASBL de poursuivre sa
                mission de soutien psychosocial et de bien-être mental pour les
                communautés du Sud-Kivu.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() =>
                    document
                      .getElementById("donation-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all group"
                >
                  Faire un Don
                  <Heart className="ml-2 w-5 h-5 fill-primary group-hover:scale-110 transition-transform" />
                </Button>
                <Link href="/about-us">
                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-primary hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl transition-all w-full"
                  >
                    Notre Impact
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Paiement Sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-accent" />
                  <span>ONG Reconnue</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Transparence Totale</span>
                </div>
              </div>
            </div>

            {/* Right Column - Impact Stats Card */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>

                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Notre Impact En Chiffres
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">1220+</p>
                      <p className="text-white/70 text-sm">
                        Personnes Accompagnées
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">14+</p>
                      <p className="text-white/70 text-sm">
                        Années d&apos;Expérience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">3</p>
                      <p className="text-white/70 text-sm">
                        Localités Couvertes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-2xl border border-accent/20 text-center">
                  <p className="text-white/90 font-medium">
                    🎯 75% des fonds vont directement aux programmes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donation-form" className="py-20 bg-white">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="bg-gradient-to-br from-accent/5 to-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-accent/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Choisissez Votre Don
              </h2>
              <p className="text-lg text-primary/70">
                Chaque contribution compte et fait une différence réelle
              </p>
            </div>

            {/* Donation Type Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white rounded-xl p-1 shadow-md border border-primary/10">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    donationType === "one-time"
                      ? "bg-primary text-white shadow-lg"
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  Don Unique
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    donationType === "monthly"
                      ? "bg-primary text-white shadow-lg"
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  Don Mensuel
                </button>
              </div>
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-xl font-bold text-lg transition-all ${
                    selectedAmount === amount && !customAmount
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-white border-2 border-primary/20 text-primary hover:border-primary/40 hover:shadow-md"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-primary mb-2">
                Ou entrez un montant personnalisé
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-primary/50">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="0"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full pl-10 pr-4 py-6 text-2xl font-bold rounded-xl border-2 border-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Donate Button */}
            <Button
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
              className="w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary font-bold text-lg py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Faire un Don de ${customAmount || selectedAmount || 0}
              {donationType === "monthly" && " par mois"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-center text-sm text-primary/60 mt-4">
              🔒 Paiement sécurisé • Déductible fiscalement
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Votre Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Ce Que Votre Don Peut Réaliser
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactStories.map((story, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white rounded-2xl border-2 border-primary/10 hover:border-accent/40 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <story.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary mb-2">
                      ${story.amount}
                    </p>
                    <p className="text-lg text-primary/80">{story.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Pourquoi Nous Soutenir?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDonate.map((reason, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-primary/70">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Funds */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/95">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Utilisation des Fonds
            </h2>
            <p className="text-xl text-white/90">
              Transparence totale sur l&apos;allocation de vos dons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeUse.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 hover:bg-white/20 transition-all"
              >
                <p className="text-6xl font-bold text-accent mb-4">
                  {item.percentage}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.category}
                </h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-xl border border-accent/30">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-white font-medium">
                Audits annuels indépendants pour garantir la transparence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Autres Façons d&apos;Aider
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col min-h-20 p-8 bg-white rounded-2xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Devenir Bénévole
              </h3>
              <p className="text-primary/70 mb-6">
                Rejoignez notre équipe et contribuez directement sur le terrain
              </p>
              <Link href="/contact-us" className="w-fit mt-auto">
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col min-h-20 p-8 bg-white rounded-2xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Partagez Notre Mission
              </h3>
              <p className="text-primary/70 mb-6">
                Sensibilisez votre réseau à notre cause
              </p>
              <Button
                variant="outline"
                className="w-fit border-2 border-primary text-primary hover:bg-primary hover:text-white mt-auto"
              >
                Partager
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="flex flex-col min-h-20 p-8 bg-white rounded-2xl border-2 border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Partenariat Entreprise
              </h3>
              <p className="text-primary/70 mb-6">
                Engagez votre entreprise dans notre mission
              </p>
              <Link href="/contact-us" className="w-fit mt-auto">
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Contactez-nous
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Faites la Différence Aujourd&apos;hui
          </h2>
          <p className="text-xl text-primary/80 mb-8 leading-relaxed">
            Chaque don nous rapproche de notre objectif: un bien-être
            psychosocial accessible à tous dans notre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all group"
            >
              Faire un Don Maintenant
              <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Link href="/about-us">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all group"
              >
                Notre Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
