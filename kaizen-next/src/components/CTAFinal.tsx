import Reveal from "./ui/Reveal";
import ButtonLink from "./ui/Button";
import { WA_CTA, WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/site";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative overflow-hidden py-[120px] text-center max-md:py-[84px]">
      <div
        className="pointer-events-none absolute bottom-[-40%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(217,80,47,.22) 0%, rgba(13,13,13,0) 62%)" }}
        aria-hidden
      />
      <Reveal className="relative z-[2] mx-auto max-w-[760px] px-6">
        <p className="mb-[18px] font-head text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-terra">
          Vamos começar
        </p>
        <h2 className="mb-[22px] font-head text-[clamp(2.1rem,5vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          Seu concorrente já está anunciando.
          <br />
          <span className="text-terra">Que tal sair na frente?</span>
        </h2>
        <p className="mx-auto mb-9 max-w-[560px] text-[1.12rem] text-sand/70">
          Fale com a gente hoje e receba um diagnóstico gratuito do seu marketing. Sem compromisso, sem
          enrolação — só uma conversa honesta sobre como trazer mais clientes para o seu negócio.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink href={WA_CTA} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
            Quero meu diagnóstico gratuito
          </ButtonLink>
          <ButtonLink href={`tel:+${WHATSAPP_NUMBER}`} variant="ghost" size="lg">
            {PHONE_DISPLAY}
          </ButtonLink>
        </div>
        <p className="mt-6 font-head text-[0.9rem] font-medium text-sand/70">
          Resposta no mesmo dia · Atendimento direto com quem faz
        </p>
      </Reveal>
    </section>
  );
}
