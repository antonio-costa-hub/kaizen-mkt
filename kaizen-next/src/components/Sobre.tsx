import Reveal from "./ui/Reveal";

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-[120px] max-md:py-[84px]">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-[72px] px-6 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="flex justify-center max-md:order-first">
          <span className="relative select-none font-head text-[clamp(7rem,18vw,13rem)] font-bold leading-none tracking-[-0.05em] text-petrol">
            改善
            <span
              className="absolute inset-0 text-terra opacity-90"
              style={{ clipPath: "inset(58% 0 0 0)" }}
              aria-hidden
            >
              改善
            </span>
          </span>
        </Reveal>

        <div>
          <Reveal as="p" className="mb-[18px] font-head text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-terra">
            Sobre a Kaizen
          </Reveal>
          <Reveal as="h2" className="font-head text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Kaizen significa <span className="text-terra">melhoria contínua</span>. É assim que a gente faz o seu negócio crescer.
          </Reveal>
          <Reveal as="p" delay={0.05} className="mt-5 max-w-[560px] text-[1.08rem] text-sand/70">
            A palavra vem do japonês (改善) e resume nossa forma de trabalhar: não existe fórmula mágica,
            existe ajuste constante. Testamos, medimos e melhoramos — semana após semana — até o seu
            marketing virar uma máquina previsível de novos clientes.
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-5 max-w-[560px] text-[1.08rem] text-sand/70">
            Você não precisa contratar uma agência para os anúncios, um freelancer para o site, outro
            para o conteúdo e mais um para os relatórios.{" "}
            <strong className="text-sand">A Kaizen é a sua equipe de marketing completa</strong> — um só
            time, uma só estratégia, um só responsável pelo resultado.
          </Reveal>
          <Reveal as="ul" delay={0.15} className="mt-[30px] grid gap-3.5">
            {[
              "Sem depender de vários fornecedores desalinhados",
              "Estratégia pensada para negócio local, não para grande marca",
              "Relatórios claros: você sabe exatamente para onde vai cada real",
            ].map((li) => (
              <li key={li} className="relative pl-[30px] text-sand/70">
                <span className="absolute left-0 top-[9px] h-3.5 w-3.5 rounded-full border-2 border-terra bg-[radial-gradient(circle_at_50%_65%,#D9502F_0_50%,transparent_51%)]" />
                {li}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
