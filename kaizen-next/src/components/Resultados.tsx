import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import { METRICS, CASES } from "@/lib/site";

export default function Resultados() {
  return (
    <section id="resultados" className="py-[120px] max-md:py-[84px]">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="mb-16 max-w-[760px]">
          <Reveal as="p" className="mb-[18px] font-head text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-terra">
            Resultados & clientes
          </Reveal>
          <Reveal as="h2" className="font-head text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Marcas que confiaram na Kaizen — e no que a gente entrega.
          </Reveal>
        </div>

        {/* metrics band */}
        <Reveal className="relative mb-16 grid grid-cols-2 gap-6 overflow-hidden rounded-[22px] bg-gradient-to-br from-petrol to-petrol-deep p-10 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-[260px] w-[260px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(217,80,47,.28) 0%, transparent 70%)" }}
            aria-hidden
          />
          {METRICS.map((m) => (
            <div key={m.label} className="relative z-[1]">
              <Counter
                target={m.count}
                prefix={m.prefix}
                suffix={m.suffix}
                decimals={m.decimals}
                className="block font-head text-[clamp(1.8rem,3.4vw,2.7rem)] font-bold leading-none text-white"
              />
              <span className="mt-2.5 block text-[0.92rem] text-sand/70">{m.label}</span>
            </div>
          ))}
        </Reveal>

        {/* bento cases */}
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={(i % 3) * 0.07}
              className={`rounded-2xl p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 ${
                c.large ? "sm:col-span-2" : ""
              } ${
                c.accent
                  ? "border border-transparent bg-gradient-to-br from-terra to-terra-deep"
                  : "border border-sand/10 bg-ink-soft hover:border-terra/50 hover:bg-ink-card"
              }`}
            >
              <span
                className={`mb-[18px] inline-block rounded-full px-3 py-[5px] font-head text-[0.74rem] font-semibold uppercase tracking-[0.08em] ${
                  c.accent ? "bg-white/20 text-white" : "bg-terra/10 text-terra"
                }`}
              >
                {c.badge}
              </span>
              <h3 className={`mb-3 font-head font-semibold tracking-[-0.01em] ${c.large ? "text-[1.85rem]" : "text-[1.5rem]"}`}>
                {c.title}
              </h3>
              <p className={`mb-5 text-[0.98rem] ${c.accent ? "text-white/90" : "text-sand/70"}`}>{c.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {c.meta.map((m) => (
                  <li
                    key={m}
                    className={`rounded-full border px-3 py-[5px] font-head text-[0.8rem] font-medium ${
                      c.accent ? "border-white/35 text-white" : "border-sand/15 text-sand/70"
                    }`}
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mx-auto mt-10 max-w-[780px] text-center text-[1.05rem] text-sand/70">
          Já atendemos{" "}
          <strong className="text-sand">
            gastronomia, moda e e-commerce, arquitetura, saúde, imobiliário, cursos online e fitness
          </strong>{" "}
          — no Brasil e em Portugal.
        </Reveal>
      </div>
    </section>
  );
}
