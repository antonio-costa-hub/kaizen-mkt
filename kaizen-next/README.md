# Kaizen — Landing Page (Next.js)

Landing page de captação da **Kaizen**, agência de marketing digital para negócios locais.
Stack: **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Framer Motion 12**.

> _Pequenos ajustes, grandes resultados._

## Rodar em desenvolvimento

```bash
cd kaizen-next
npm install      # só na primeira vez
npm run dev      # http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
kaizen-next/src/
├── app/
│   ├── layout.tsx      # fontes (Sora + Inter), metadata/SEO
│   ├── page.tsx        # monta todas as seções
│   └── globals.css     # tema (cores da marca) + keyframes do sol
├── components/
│   ├── Nav.tsx         # menu fixo + mobile
│   ├── Hero.tsx        # sol animado + parallax (Framer Motion)
│   ├── Sobre.tsx       # conceito 改善
│   ├── Servicos.tsx    # 4 serviços
│   ├── Resultados.tsx  # métricas (contadores) + cases (bento)
│   ├── Processo.tsx    # 4 passos
│   ├── CTAFinal.tsx    # chamada final
│   ├── Footer.tsx
│   ├── WhatsAppFloat.tsx
│   └── ui/             # Reveal, Counter, Button, icons
└── lib/site.ts         # TODO conteúdo, contatos e links num só lugar
```

## Onde editar conteúdo

Quase tudo (serviços, métricas, cases, passos, número de WhatsApp, Instagram)
está centralizado em **`src/lib/site.ts`**. Edite lá.

## Contato configurado

- WhatsApp: **(71) 99401-6664** → `https://wa.me/5571994016664` (com mensagens pré-preenchidas)
- **Instagram:** troque `INSTAGRAM_URL` em `src/lib/site.ts` pelo @ real.

## Motion

- Scroll-reveal com stagger (Framer Motion `whileInView`)
- Sol nascente: entrada animada + anéis girando + pulsação + parallax no scroll
- Contadores animados nas métricas (rAF + easing)
- Hover suave em cards de serviço, cases e passos
- Respeita `prefers-reduced-motion`

## Publicar

- **Vercel** (recomendado p/ Next.js): importe o repositório em vercel.com — deploy automático.
- Ou `npm run build` e suba em qualquer host Node.
