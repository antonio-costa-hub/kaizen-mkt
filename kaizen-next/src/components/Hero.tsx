"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import ButtonLink from "./ui/Button";
import { WA_HERO } from "@/lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const sunY = useTransform(scrollY, [0, 800], [0, 96]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: reduce ? {} : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      {/* petrol glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[900px] w-[900px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(15,60,76,.55) 0%, rgba(13,13,13,0) 62%)" }}
        aria-hidden
      />

      {/* animated rising sun */}
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : sunY }}
        className="pointer-events-none absolute right-[-8%] top-1/2 w-[min(680px,78vw)] -translate-y-1/2 opacity-95 max-md:right-[-30%] max-md:opacity-50"
      >
        <motion.svg
          viewBox="0 0 600 600"
          className="h-auto w-full"
          initial={reduce ? false : { opacity: 0, y: -40 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 1.6, ease: EASE }}
        >
          <defs>
            <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D9502F" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#D9502F" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#D9502F" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle className="kz-sun-halo" cx="300" cy="300" r="230" fill="url(#sunGrad)" />
          <circle className="kz-ring-3" cx="300" cy="300" r="210" fill="none" stroke="#D9502F" strokeWidth="1" opacity="0.18" />
          <circle className="kz-ring-2" cx="300" cy="300" r="160" fill="none" stroke="#D9502F" strokeWidth="1.2" opacity="0.3" />
          <circle className="kz-ring-1" cx="300" cy="300" r="112" fill="none" stroke="#D9502F" strokeWidth="1.5" opacity="0.5" />
          <circle className="kz-sun-core" cx="300" cy="300" r="86" fill="#D9502F" />
        </motion.svg>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[2] mx-auto w-full max-w-[1180px] px-6"
      >
        <div className="max-w-[780px]">
          <motion.p variants={item} className="mb-6 font-head text-[0.85rem] font-semibold uppercase tracking-[0.16em] text-terra">
            改善 · melhoria contínua
          </motion.p>
          <motion.h1
            variants={item}
            className="mb-6 font-head text-[clamp(2.6rem,6.2vw,4.6rem)] font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Mais clientes para o seu negócio local,
            <br className="hidden sm:inline" /> <span className="text-terra">todo mês.</span>
          </motion.h1>
          <motion.p variants={item} className="mb-10 max-w-[600px] text-[clamp(1.05rem,2vw,1.28rem)] text-sand/70">
            Tráfego pago, sites, conteúdo e automação em um só lugar. A gente cuida do marketing de
            ponta a ponta enquanto você cuida do que faz de melhor — atender bem quem chega.
          </motion.p>
          <motion.div variants={item} className="mb-10 flex flex-wrap gap-4">
            <ButtonLink href={WA_HERO} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
              Fale com a gente no WhatsApp
            </ButtonLink>
            <ButtonLink href="#resultados" variant="ghost" size="lg">
              Ver resultados reais
            </ButtonLink>
          </motion.div>
          <motion.p
            variants={item}
            className="border-l-[3px] border-terra pl-4 font-head text-[1.05rem] font-semibold italic text-sand/80"
          >
            Pequenos ajustes, grandes resultados.
          </motion.p>
        </div>
      </motion.div>

      {/* scroll cue */}
      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-[34px] left-1/2 z-[2] flex h-[42px] w-[26px] -translate-x-1/2 justify-center rounded-full border-2 border-sand/35 pt-2"
      >
        <span className="kz-scroll-dot h-2 w-1 rounded bg-terra" />
      </a>
    </section>
  );
}
