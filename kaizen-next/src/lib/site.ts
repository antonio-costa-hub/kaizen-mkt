export const WHATSAPP_NUMBER = "5571994016664";
export const PHONE_DISPLAY = "(71) 99401-6664";
export const INSTAGRAM_URL = "https://instagram.com/"; // TODO: trocar pelo @ real

export function wa(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_HERO = wa("Olá! Quero uma proposta da Kaizen para o meu negócio.");
export const WA_CTA = wa("Olá! Vim pelo site e quero um diagnóstico gratuito da Kaizen.");
export const WA_FLOAT = wa("Olá! Quero falar com a Kaizen.");

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#processo", label: "Como trabalhamos" },
];

export const SERVICES = [
  {
    title: "Tráfego pago",
    text: "Campanhas no Meta Ads e Google Ads que colocam sua oferta na frente de quem já está procurando por você. Verba otimizada todo dia para custar menos e vender mais.",
    tag: "Meta · Google · TikTok",
    icon: "traffic",
  },
  {
    title: "Sites e landing pages",
    text: "Páginas rápidas, bonitas e feitas para converter visitante em contato. Do site institucional à landing de campanha, pronta para receber os anúncios.",
    tag: "Sites · LPs · SEO base",
    icon: "site",
  },
  {
    title: "Conteúdo visual",
    text: "Foto e vídeo que fazem sua marca parecer do tamanho que ela merece. Conteúdo que gera desejo, constrói autoridade e alimenta seus anúncios e redes.",
    tag: "Foto · Vídeo · Social",
    icon: "content",
  },
  {
    title: "Automação",
    text: "Atendimento que responde na hora, follow-up que não deixa lead esfriar e relatórios automáticos. Menos trabalho manual, mais vendas fechadas.",
    tag: "Atendimento · CRM · Relatórios",
    icon: "automation",
  },
] as const;

export const METRICS = [
  { count: 100, prefix: "R$ ", suffix: " mil+", decimals: 0, label: "em verba de anúncios gerenciada" },
  { count: 1.5, prefix: "", suffix: " ano+", decimals: 1, label: "de experiência em tráfego pago" },
  { count: 5, prefix: "", suffix: " plataformas", decimals: 0, label: "Meta, Google, TikTok, YouTube, Pinterest" },
  { count: 2, prefix: "", suffix: " países", decimals: 0, label: "clientes no Brasil e em Portugal" },
] as const;

export type CaseItem = {
  badge: string;
  title: string;
  desc: string;
  meta: string[];
  large?: boolean;
  accent?: boolean;
};

export const CASES: CaseItem[] = [
  {
    badge: "Estratégia completa",
    title: "Puca Coast",
    desc: 'Marca de streetwear costeira. Construímos personas, pilares de conteúdo e a campanha narrativa "Do Manifesto ao Palco", com ativação de micro-influenciador, dashboard financeiro e rastreamento completo (Meta Pixel, CAPI, GTM e GA4).',
    meta: ["Branding & conteúdo", "Rastreamento avançado", "Dashboard financeiro"],
    large: true,
  },
  {
    badge: "Saúde",
    title: "Dr. Vinicius Scherner Rossi",
    desc: "Neurologista. Gestão de Google Ads + criação de landing page e site institucional para captar pacientes com previsibilidade.",
    meta: ["Google Ads", "Site + LP"],
  },
  {
    badge: "Imobiliário",
    title: "Fernanda N. de Queiroz",
    desc: "Corretora de imóveis. Pacote completo de gestão de Meta + Google Ads para gerar leads qualificados de forma constante.",
    meta: ["Meta Ads", "Google Ads"],
  },
  {
    badge: "Auditoria",
    title: "Reserva Byom",
    desc: "Auditoria de Facebook Ads e reestruturação de campanhas com Advantage+ e públicos Lookalike para escalar com eficiência.",
    meta: ["Advantage+", "Lookalike"],
  },
  {
    badge: "Alto padrão",
    title: "Imóvel em Alphaville, Salvador",
    desc: "Estratégia de geolocalização e segmentação de público para Meta Ads, focada em atrair compradores certos para um imóvel de alto padrão.",
    meta: ["Geolocalização", "Meta Ads"],
  },
  {
    badge: "Inteligência de mercado",
    title: "Prospecção Vilas do Atlântico",
    desc: "Dashboard mapeando 42 negócios locais em 10 nichos — inteligência de mercado para decidir onde e como crescer.",
    meta: ["42 negócios", "10 nichos"],
    accent: true,
  },
];

export const STEPS = [
  {
    num: "01",
    title: "Diagnóstico",
    text: "Entendemos seu negócio, seu público e seus números atuais. Antes de gastar um real em anúncio, a gente sabe onde está a oportunidade.",
  },
  {
    num: "02",
    title: "Estratégia",
    text: "Montamos o plano: canais, ofertas, mensagens e metas. Você aprova sabendo exatamente o que vai acontecer e o que esperar.",
  },
  {
    num: "03",
    title: "Execução",
    text: "Colocamos tudo no ar — anúncios, páginas, conteúdo e automações — com rastreamento completo para medir cada resultado.",
  },
  {
    num: "04",
    title: "Otimização contínua",
    text: "É aqui que mora o Kaizen: ajustamos toda semana com base nos dados. O que funciona escala, o que não funciona sai. Sempre melhor que o mês anterior.",
  },
] as const;
