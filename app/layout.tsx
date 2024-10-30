import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer"


//meta tags para melhor ceo
export const metadata: Metadata = {
  title: "Portfólio de Gedson - Desenvolvedor",
  description: "Explore meu portfólio para conhecer meus projetos, habilidades e experiências como desenvolvedor. Venha conferir o que posso oferecer!",
  openGraph: {
      title: "Portfólio de Gedson - Descubra Meu Trabalho",
      description: "Visite meu portfólio para ver projetos, habilidades e inovações no desenvolvimento. Estou sempre aberto a novas oportunidades!",
      tags: [
        "desenvolvedor",
        "freelancer",
        "Brasil",
        "bot Discord",
        "desenvolvimento",
        "JavaScript",
        "TypeScript",
        "Gedson",
        "portfólio Gedson"
    ],
    images: [
      `/graph.png`
    ],
    url: "https://gedson.vercel.app/"
  },
  robots: {
    index: true,
    follow: true,
    indexifembedded: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased bg-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
