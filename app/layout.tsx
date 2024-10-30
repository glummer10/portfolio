import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Meu portfólio",
  openGraph: {
    title: "Portfólio do gedson",
    description: "Acesse meu portfólio para ver meus projeto habilidades etc..",
    tags: ["dev", "freelance", "brasil", "bot discord", "devolop", "javascript", "typescript", "gedson", "gedson portfolio"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
