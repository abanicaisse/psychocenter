"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Navbar = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [expandMobileNav, setExpandMobileNav] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");

  // !expandMobileNav
  //   ? (document.body.style.overflowY = "auto")
  //   : (document.body.style.overflowY = "hidden");

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
      label: "Home",
      url: "/",
    },
    {
      label: "Events",
      url: "#",
    },
    {
      label: "Blog",
      url: "#",
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

  useGSAP(() => {
    gsap.fromTo(
      mobileMenuRef.current,
      {
        display: "none",
        duration: 2,
        left: -100,
      },
      {
        display: "flex",
        left: "-1rem",
        width: "70%",
      }
    );
  }, [expandMobileNav]);

  return (
    <header className="w-full bg-muted sticky top-0 left-0 right-0 mb-10 mx-0 px-0">
      <nav className="w-full flex max-w-[80rem] py-3 px-4 md:px-12 md:h-[5rem] mx-auto mb-0">
        <Image src={logo} width={60} height={40} alt="logo" />
        <div className="w-full max-w-[80rem] mx-auto pt-2 pr-8 md:pr-16 right-auto flex justify-between items-center absolute top-[70%] rounded-[0.5rem]">
          {windowWidth < 720 ? (
            <>
              <Button
                onClick={() => {
                  setExpandMobileNav(true);
                }}
              >
                <Menu />
              </Button>

              {windowWidth < 720 && expandMobileNav ? (
                <div
                  ref={mobileMenuRef}
                  className={`${
                    windowWidth < 720 && expandMobileNav ? "flex" : "hidden"
                  } mobile-menu w-[40%] h-[100vh] flex-col absolute top-[-3.7rem] left-[-1rem] px-[2rem] py-[2rem] bg-primary z-[100] overflow-y-auto`}
                >
                  <X
                    width={30}
                    height={30}
                    className="text-secondary ml-auto cursor-pointer"
                    onClick={() => setExpandMobileNav(false)}
                  />
                  <div className="w-full flex flex-col gap-[2rem] pt-[2rem]">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.url}
                        className={`${
                          activeNavLink === link.label
                            ? "border-b-[4px] border-b-accent text-accent"
                            : "border-none"
                        } w-max text-secondary text-xl font-medium leading-normal  px-[.1rem] pb-1  rounded-[0.01875rem] cursor-pointer`}
                        onClick={() => setActiveNavLink(link.label)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <div
              className="flex items-center gap-[2rem] bg-white px-4 pt-4 rounded-[0.5rem]"
              style={{ boxShadow: "0px 6px 8px 6px rgba(0,0,0,0.1)" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  className={`${
                    activeNavLink === link.label
                      ? "border-b-[4px] border-b-accent"
                      : "border-none"
                  } text-[#000] text-xl font-medium leading-normal  px-[.3rem] pb-1  rounded-[0.1875rem] cursor-pointer`}
                  onClick={() => setActiveNavLink(link.label)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <Button>Donate Now</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
