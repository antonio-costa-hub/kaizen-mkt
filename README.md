# Kaizen — Landing Page

Landing page de captação para a **Kaizen**, agência de marketing digital para negócios locais
(tráfego pago, sites, conteúdo e automação).

> _Pequenos ajustes, grandes resultados._

## Como visualizar

Site 100% estático, sem build. Basta abrir o arquivo:

```
index.html
```

Dê **duplo clique** no `index.html` ou arraste para o navegador. Funciona offline (as fontes
Sora/Inter vêm do Google Fonts e precisam de internet apenas para carregar; há fallback).

## Estrutura

```
Kaizen/
├── index.html        # toda a página
├── css/styles.css    # design system + animações
├── js/main.js        # scroll reveal, contadores, menu mobile, parallax
└── assets/           # (para logos/imagens futuras)
```

## Identidade visual

| Cor         | Hex       | Uso                          |
|-------------|-----------|------------------------------|
| Preto       | `#0D0D0D` | base, fundos e textos        |
| Azul petróleo | `#0F3C4C` | secundária, apoio          |
| Terracota   | `#D9502F` | destaque (CTAs, ~10-15%)     |
| Areia       | `#F4F1EA` | fundo claro / respiro        |

Tipografia: **Sora** (títulos) + **Inter** (corpo).

## Contato configurado

- WhatsApp: **(71) 99401-6664** → `https://wa.me/5571994016664`
- Botões e o botão flutuante já abrem o WhatsApp com mensagem pré-preenchida.
- **Instagram:** atualize o link em `index.html` (procure por `instagram.com/`) para o @ real.

## Publicar (grátis)

- **Vercel / Netlify:** arraste a pasta em vercel.com ou app.netlify.com/drop.
- **GitHub Pages:** suba os arquivos num repositório e ative Pages nas configurações.

## Motion incluído

- Scroll-reveal (fade + slide-up) com leve stagger entre cards
- Sol nascente animado no hero (pulsação + anéis girando + parallax sutil)
- Contadores animados nas métricas
- Hover suave em cards de serviço, cases e passos do processo
- Respeita `prefers-reduced-motion`

## Versão Next.js (opcional)

Você pediu Next.js + Tailwind + Framer Motion — dá para migrar quando quiser. Como o Node.js
não está instalado nesta máquina, entreguei a versão estática (que já roda e converte hoje).
Para a versão com Next:

1. Instale o Node.js LTS: https://nodejs.org
2. `npx create-next-app@latest kaizen-next` (com Tailwind)
3. `npm i framer-motion`
4. Me chame que eu porto todo este layout e copy para componentes React + Framer Motion.
