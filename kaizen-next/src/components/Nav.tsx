"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./ui/icons";
import { NAV_LINKS, WA_HERO } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-[400ms] ${
        scrolled
          ? "border-sand/10 bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] w-full max-w-[1180px] items-center justify-between px-6">
        <a href="#hero" className="group inline-flex items-center gap-2.5" aria-label="Kaizen — início">
          <BrandMark size={34} className="transition-transform duration-500 group-hover:-rotate-12" />
          <span className="font-head text-[1.35rem] font-bold tracking-tight">Kaizen</span>
        </a>

        {/* desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-sand/70 transition-colors hover:text-sand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-terra px-5 py-2.5 font-head text-sm font-semibold text-white transition-all duration-300 hover:bg-terra-light hover:-translate-y-0.5"
          >
            Solicitar proposta
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          <span className={`h-0.5 w-6 rounded bg-sand transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-sand transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-sand transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* mobile menu */}
      <nav
        className={`overflow-hidden border-b border-sand/10 bg-ink/97 backdrop-blur-md transition-all duration-[400ms] md:hidden ${
          open ? "max-h-96" : "max-h-0 border-b-transparent"
        }`}
      >
        <div className="flex flex-col py-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 font-medium text-sand/80 transition-colors hover:text-sand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mx-6 my-3 rounded-full bg-terra px-5 py-3 text-center font-head font-semibold text-white"
          >
            Solicitar proposta
          </a>
        </div>
      </nav>
    </header>
  );
}
