import Image from "next/image";
import React from "react";
import psychocenterImg from "@/public/psycho-center.jpg";
import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks: { label: string; url: string }[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Events",
      url: "#",
    },
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "About",
      url: "#",
    },
    {
      label: "Contact us",
      url: "#",
    },
  ];

  return (
    <footer className="relative mt-auto bg-gradient-to-br from-primary via-primary to-primary/95 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-[80rem] mx-auto px-4 md:px-12 py-12 md:py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-start gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                <Image
                  src={psychocenterImg}
                  width={100}
                  height={100}
                  alt="psychocenter"
                  className="relative rounded-xl border-2 border-accent/30 shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                  Psychocenter ASBL
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Soins de Santé Mentale, Prise en charge psychosociale
                  individuelle et communautaire
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-accent rounded-full"></div>
              Liens Rapides
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="text-white/80 hover:text-accent hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-200"></span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="h-1 w-8 bg-accent rounded-full"></div>
              Nous Contacter
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-white/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Address</p>
                  <p className="text-white/90">Sud-Kivu 243, R. D. Congo</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-white/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Phone</p>
                  <a
                    href="tel:+243834051717"
                    className="text-white/90 hover:text-accent transition-colors"
                  >
                    +243 834 051 717
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-white/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a
                    href="mailto:psychocenter20@gmail.com"
                    className="text-white/90 hover:text-accent transition-colors break-all"
                  >
                    psychocenter20@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social media & copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Link
                href={"https://web.facebook.com/profile.php?id=61579025191318"}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-accent/20 rounded-lg transition-all duration-200 group"
                target="_blank"
              >
                <Facebook className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Suivez-nous</span>
              </Link>
            </div>

            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} Psychocenter ASBL. All rights
              reserved.
            </p>
          </div>
        </div>

        {/* Built by */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-center text-white/50">
            Built with love by{" "}
            <Link
              href={"https://www.github.com/abanicaisse"}
              target="_blank"
              className="text-accent hover:underline font-medium"
            >
              Aba Nicaisse
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
