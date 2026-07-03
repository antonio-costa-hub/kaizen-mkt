import { WhatsAppIcon } from "./ui/icons";
import { WA_FLOAT } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_FLOAT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-[22px] right-[22px] z-[90] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
