import Reveal from "./ui/Reveal";
import { ServiceIcon } from "./ui/icons";
import { SERVICES } from "@/lib/site";

export default function Servicos() {
  return (
    <section id="servicos" className="bg-sand py-[120px] text-[#1a1a1a] max-md:py-[84px]">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="mb-16 max-w-[760px]">
          <Reveal as="p" className="mb-[18px] font-head text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-terra">
            O que fazemos
          </Reveal>
          <Reveal as="h2" className="font-head text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em] text-[#1a1a1a]">
            Tudo que o seu negócio precisa para vender mais — sob o mesmo teto.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={i * 0.07}
              className="group relative overflow-hidden rounded-2xl border border-sand-mut bg-white p-[34px_26px] transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-transparent hover:shadow-[0_24px_50px_-24px_rgba(13,13,13,0.4)]"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-terra transition-transform duration-[400ms] group-hover:scale-x-100" />
              <div className="mb-[22px] h-[52px] w-[52px] text-terra">
                <ServiceIcon name={s.icon} className="h-full w-full" />
              </div>
              <h3 className="mb-3 font-head text-[1.28rem] font-semibold text-[#1a1a1a]">{s.title}</h3>
              <p className="mb-5 text-[0.98rem] text-[#55524c]">{s.text}</p>
              <span className="inline-block rounded-full bg-petrol/10 px-3 py-1.5 font-head text-[0.78rem] font-semibold tracking-[0.04em] text-petrol">
                {s.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
