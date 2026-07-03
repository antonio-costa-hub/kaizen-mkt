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
    badge: "Gestão 360º",
    title: "Puca Coast",
    desc: 'Marca de streetwear costeira. Assumimos o projeto de ponta a ponta: captação e edição de conteúdo, estratégia digital, gestão completa de redes sociais e criação do site — com a campanha narrativa "Do Manifesto ao Palco", rastreamento avançado (Meta Pixel, CAPI, GTM, GA4) e dashboard financeiro com análise de estoque.',
    meta: ["Conteúdo & redes", "Site", "Rastreamento avançado"],
    large: true,
  },
  {
    badge: "Fitness",
    title: "Carol Amaro Personal",
    desc: "Personal trainer com base orgânica sólida, mas com teto de crescimento. Estruturamos campanhas e reposicionamento de vendas que tiraram o faturamento de R$25-30k orgânicos para R$40k sólidos todos os meses — somente com tráfego pago.",
    meta: ["+70% de faturamento", "Posicionamento de vendas"],
  },
  {
    badge: "Gastronomia",
    title: "Restaurante Gambaro",
    desc: "Precisava de dois públicos ao mesmo tempo: movimento no salão e pedidos no iFood. Criamos campanhas específicas para cada canal e, em apenas 2 meses, o restaurante bateu seu recorde histórico de faturamento.",
    meta: ["Recorde de faturamento", "Salão + iFood"],
  },
  {
    badge: "Saúde",
    title: "Dr. Vinicius Scherner Rossi",
    desc: "Neurologista com reputação sólida, mas invisível no digital. Criamos landing page profissional com rastreamento completo de ponta a ponta — hoje ele sabe exatamente de onde vêm seus pacientes e o retorno real de cada campanha.",
    meta: ["Landing page", "Rastreamento completo"],
  },
  {
    badge: "Design de produto",
    title: "Scupp",
    desc: "Startup de vitrine de eventos, reunindo o que acontece na cidade em um só lugar. Assumimos o design do site, traduzindo o conceito da startup em uma experiência visual pronta para validar e escalar no mercado.",
    meta: ["Design de site", "Startup"],
  },
  {
    badge: "Branding",
    title: "Kahuna",
    desc: "A marca já era forte na cabeça do proprietário, mas nada estava de fato definido — deixando-a solta e sem uniformidade. Entramos entendendo a essência da marca e transformamos isso em conceitos definidos e congruentes.",
    meta: ["Identidade de marca", "Reconhecimento"],
    accent: true,
  },
];

export type OtherCase = { title: string; badge: string };

export const OTHER_CASES: OtherCase[] = [
  { title: "Fernanda N. de Queiroz", badge: "Imobiliário" },
  { title: "Reserva Byom", badge: "Auditoria Meta Ads" },
  { title: "Imóvel em Alphaville, Salvador", badge: "Alto padrão" },
  { title: "Prospecção Vilas do Atlântico", badge: "Inteligência de mercado" },
  { title: "Restaurante Casa Allepo", badge: "Gastronomia" },
  { title: "Clínica Viver CTI", badge: "Saúde" },
  { title: "Dra. Luciana Lavigne", badge: "Saúde" },
  { title: "Agência Alcateia", badge: "Marketing" },
  { title: "ITC — Assistente Virtual AVA", badge: "Tecnologia" },
  { title: "Monges do Funk", badge: "Entretenimento" },
  { title: "Arise", badge: "Tráfego direto" },
  { title: "AV — Anestesia Veterinária", badge: "SaaS/Pet" },
  { title: "Instituto Humanitas", badge: "Educação/Workshop" },
  { title: "Veritus Consulting", badge: "Consultoria" },
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
