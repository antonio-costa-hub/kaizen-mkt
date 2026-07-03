import Reveal from "./ui/Reveal";
import { STEPS } from "@/lib/site";

export default function Processo() {
  return (
    <section id="processo" className="bg-ink-soft py-[120px] max-md:py-[84px]">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="mb-16 max-w-[760px]">
          <Reveal as="p" className="mb-[18px] font-head text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-terra">
            Como trabalhamos
          </Reveal>
          <Reveal as="h2" className="font-head text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Um método de ajuste contínuo — não uma aposta de sorte.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 0.07}
              className="rounded-2xl border border-sand/10 bg-sand/[0.02] p-[32px_26px] transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-terra/40 hover:bg-terra/5"
            >
              <span className="mb-3.5 block font-head text-[2.4rem] font-bold text-terra opacity-85">{s.num}</span>
              <h3 className="mb-3 font-head text-[1.3rem] font-semibold">{s.title}</h3>
              <p className="text-[0.96rem] text-sand/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
