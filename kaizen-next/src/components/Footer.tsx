import { BrandMark } from "./ui/icons";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, INSTAGRAM_URL } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-sand/10 bg-ink-soft pb-8 pt-[60px]">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="flex flex-wrap justify-between gap-8 border-b border-sand/10 pb-10">
          <div>
            <a href="#hero" className="inline-flex items-center gap-2.5">
              <BrandMark size={30} />
              <span className="font-head text-[1.35rem] font-bold tracking-tight">Kaizen</span>
            </a>
            <p className="mt-3.5 italic text-sand/70">Evolução contínua para o seu negócio.</p>
          </div>
          <div className="flex flex-col gap-3 max-md:items-start md:items-end">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sand/70 transition-colors hover:text-terra"
            >
              WhatsApp · {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sand/70 transition-colors hover:text-terra"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-[0.86rem] text-sand/70">
          <span>© {year} Kaizen. Todos os direitos reservados.</span>
          <span>Pequenos ajustes, grandes resultados.</span>
        </div>
      </div>
    </footer>
  );
}
