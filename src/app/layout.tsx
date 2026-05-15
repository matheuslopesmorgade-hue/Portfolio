import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Matheus Lopes | Executive Tech & Data Portfolio",
  description: "Portfólio de Matheus Lopes. Especialista na interseção entre desenvolvimento de sistemas, automação, business intelligence e inteligência financeira.",
  keywords: ["Matheus Lopes", "Desenvolvedor", "Business Intelligence", "Finanças", "Automação", "ERP", "Data Analytics", "Tech Portfolio"],
  authors: [{ name: "Matheus Lopes" }],
  openGraph: {
    title: "Matheus Lopes | Executive Tech & Data",
    description: "Conectando visão de negócio, tecnologia, dados e performance operacional.",
    type: "website",
    locale: "pt_BR",
    siteName: "Matheus Lopes Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-deep-900 text-foreground selection:bg-accent-rose/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
