"use client";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import psychocenterImg from "@/public/psycho-center.jpg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [expandMobileNav, setExpandMobileNav] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");

  useEffect(() => {
    !expandMobileNav
      ? (document.body.style.overflowY = "auto")
      : (document.body.style.overflowY = "hidden");
  }, [expandMobileNav]);

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks: { label: string; url: string }[] = [
    {
      label: "Accueil",
      url: "/",
    },
    {
      label: "Blog",
      url: "/blog",
    },
    {
      label: "À Propos de Nous",
      url: "/about-us",
    },
    {
      label: "Nous Contacter",
      url: "/contact-us",
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      mobileMenuRef.current,
      {
        display: "none",
        duration: 2,
        left: -100,
        width: 0,
      },
      {
        display: "flex",
        left: "-1rem",
        width: "85%",
      },
    );
  }, [expandMobileNav]);

  return (
    <header className="w-full bg-muted/95 backdrop-blur-sm sticky top-0 left-0 right-0 mx-0 px-0 z-50 border-b border-primary/5 shadow-sm">
      <nav className="w-full flex items-center justify-between max-w-[80rem] py-4 px-4 md:px-12 mx-auto relative">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
            <Image
              src={logo}
              width={60}
              height={40}
              alt="Psychocenter ASBL"
              className="relative rounded-lg border-2 border-accent/20 group-hover:border-accent/40 transition-all duration-300"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-primary font-bold text-lg leading-tight">
              Psychocenter
            </h1>
            <p className="text-primary/60 text-xs">ASBL</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {windowWidth >= 720 && (
          <div className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl shadow-md border border-primary/5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeNavLink === link.label
                    ? "text-primary"
                    : "text-primary/70 hover:text-primary"
                }`}
                onClick={() => setActiveNavLink(link.label)}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                    activeNavLink === link.label
                      ? "w-3/4"
                      : "w-0 group-hover:w-1/2"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Button (Desktop) */}
        {windowWidth >= 720 && (
          <Button
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl px-6"
            onClick={() => router.push("/donate")}
          >
            <Heart className="w-4 h-4" />
            Faire Un Don
          </Button>
        )}

        {/* Mobile Menu Button */}
        {windowWidth < 720 && (
          <div className="flex items-center gap-3">
            <Button
              className="bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300 rounded-xl px-6"
              onClick={() => router.push("/donate")}
            >
              <Heart className="w-4 h-4 mr-2" />
              Faire Un Don
            </Button>
            <Button
              onClick={() => setExpandMobileNav(true)}
              className="bg-white hover:bg-accent/20 text-primary shadow-md hover:shadow-lg transition-all duration-300 rounded-xl p-3"
              size="icon"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        )}

        {/* Mobile Menu */}
        {windowWidth < 720 && expandMobileNav && (
          <div
            ref={mobileMenuRef}
            className="mobile-menu flex flex-col fixed inset-y-0 left-0 h-screen px-6 py-8 bg-gradient-to-br from-primary via-primary to-primary/95 z-[100] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src={psychocenterImg}
                  width={50}
                  height={35}
                  alt="logo"
                  className="rounded-lg border-2 border-accent/30"
                />
                <div>
                  <h2 className="text-white font-bold text-lg">Psychocenter</h2>
                  <p className="text-accent text-xs">ASBL</p>
                </div>
              </div>
              <button
                onClick={() => setExpandMobileNav(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.label}
                  href={link.url}
                  className={`group relative px-4 py-4 rounded-xl transition-all duration-300 ${
                    activeNavLink === link.label
                      ? "bg-accent/20 text-accent"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveNavLink(link.label);
                    setExpandMobileNav(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">{link.label}</span>
                    {activeNavLink === link.label && (
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    )}
                  </div>
                  {activeNavLink === link.label && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm text-center">
                Mental Health Care & Psychosocial Support
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
