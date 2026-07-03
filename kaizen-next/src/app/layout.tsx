import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaizen — Pequenos ajustes, grandes resultados",
  description:
    "Agência de marketing digital para negócios locais: tráfego pago, sites, conteúdo e automação. Mais clientes todo mês, sem precisar de vários fornecedores.",
  openGraph: {
    title: "Kaizen — Marketing que traz clientes para o seu negócio",
    description:
      "Tráfego pago, sites, conteúdo e automação em um só lugar. Pequenos ajustes, grandes resultados.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable} antialiased`}>
      <body className="bg-ink text-sand">{children}</body>
    </html>
  );
}
