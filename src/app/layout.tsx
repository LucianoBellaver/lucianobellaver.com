import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luciano Bellaver | Engenheiro de Computação",

  description:
    "Portfólio de Luciano Bellaver. Projetos de Engenharia da Computação, Sistemas Embarcados, Hardware, Robótica e tecnologias Open Source.",

  keywords: [
    "Luciano Bellaver",
    "Engenharia da Computação",
    "Sistemas Embarcados",
    "Hardware",
    "Robótica",
    "Impressão 3D",
    "Open Source",
    "Firmware",
    "ESP32",
    "Arduino",
    "Raspberry Pi",
  ],

  authors: [
    {
      name: "Luciano Bellaver",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#1f1f23]">
        <SmoothScroll />

        <Navbar />

        {children}
      </body>
    </html>
  );
}