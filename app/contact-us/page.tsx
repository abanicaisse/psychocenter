"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const result = await response.json();

  //     if (!response.ok) {
  //       throw new Error(result.error || "Erreur lors de l'envoi");
  //     }

  //     // Success
  //     setIsSubmitted(true);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       subject: "",
  //       message: "",
  //     });

  //     // Reset success message after 5 seconds
  //     setTimeout(() => setIsSubmitted(false), 5000);
  //   } catch (error: any) {
  //     console.error("Error submitting form:", error);
  //     alert(
  //       "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
  //     );
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "+243 834 051 717",
      link: "tel:+243834051717",
      description: "Appelez-nous durant les heures de bureau",
    },
    {
      icon: Mail,
      title: "Email",
      value: "psychocenter20@gmail.com",
      link: "mailto:psychocenter20@gmail.com",
      description: "Nous répondons sous 24-48h",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Sud-Kivu 243, R. D. Congo",
      link: "#",
      description: "Visitez notre bureau principal",
    },
  ];

  const officeHours = [
    { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
    { day: "Samedi", hours: "9h00 - 13h00" },
    { day: "Dimanche", hours: "Fermé" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/40 via-white to-white overflow-hidden -mt-10 pt-20 pb-16">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-primary/60 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Contact</span>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Nous Contacter
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary mb-6">
              Restons en
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mt-2">
                Contact
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary/70 leading-relaxed mb-8">
              Notre équipe est à votre écoute. N&apos;hésitez pas à nous
              contacter pour toute question ou demande d&apos;information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="group p-8 bg-gradient-to-br from-accent/5 to-white rounded-2xl border-2 border-accent/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-primary/90 mb-2">
                  {info.value}
                </p>
                <p className="text-sm text-primary/60">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-primary via-primary to-primary/95 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Heures d&apos;Ouverture
                  </h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-white/90 font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-accent font-semibold">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 border-2 border-primary/10 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Suivez-nous
                </h3>
                <a
                  href="https://web.facebook.com/profile.php?id=61579025191318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-primary/60">
                      Rejoignez-nous sur
                    </p>
                    <p className="font-semibold text-primary">Facebook</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary/40 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Envoyez-nous un Message
                  </h2>
                  <p className="text-lg text-primary/70">
                    Remplissez le formulaire ci-dessous et nous vous répondrons
                    dans les plus brefs délais.
                  </p>
                </div>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-medium">
                      Votre message a été envoyé avec succès! Nous vous
                      répondrons bientôt.
                    </p>
                  </div>
                )}

                <form
                  // onSubmit={handleSubmit}
                  className="space-y-6"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="dcd066e4-5307-401c-a089-6ea916c02f43"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Nom Complet <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        className="w-full px-4 py-6 rounded-xl border-2 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-6 rounded-xl border-2 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+243 XXX XXX XXX"
                        className="w-full px-4 py-6 rounded-xl border-2 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Sujet <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Sujet de votre message"
                        className="w-full px-4 py-6 rounded-xl border-2 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-primary mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Écrivez votre message ici..."
                      className="w-full px-4 py-4 rounded-xl border-2 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Notre Localisation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Où Nous Trouver
            </h2>
            <p className="text-xl text-primary/70">
              Sud-Kivu 243, République Démocratique du Congo
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/10">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.995384101278!2d28.85670167555229!3d-2.508385497470158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29a07599f8c91%3A0xe14859674418cde9!2sAvenue%20Vamaro%2C%20Bukavu%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sug!4v1769644597500!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ensemble pour le Bien-être
          </h2>
          <p className="text-xl text-primary/80 mb-8 leading-relaxed">
            Votre soutien nous permet de continuer notre mission
            d&apos;accompagnement des communautés. Rejoignez-nous dans cette
            noble cause.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all group">
              Faire un don
              <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Link href="/about-us">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all group"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
