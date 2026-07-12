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
  title: "Luciano Bellaver | Computer Engineering",
  description:
    "Portfolio of Luciano Bellaver - Embedded Systems, Hardware, Robotics and Open Source Projects",

  keywords: [
    "Luciano Bellaver",
    "Computer Engineering",
    "Embedded Systems",
    "Hardware",
    "Robotics",
    "Open Source",
  ],

  authors: [{ name: "Luciano Bellaver" }],
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

      <body className="min-h-full flex flex-col bg-black">

        <SmoothScroll />

        <Navbar />

        {children}

      </body>

    </html>
  );
}