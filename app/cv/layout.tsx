import { MeshGradient } from '@mesh-gradient/react'
import { type MeshGradientOptions } from '@mesh-gradient/core';
import type { Metadata } from "next";
import "./globals.css";
import { Google_Sans } from "next/font/google";

const googleFontsTextFont = Google_Sans({
  weight: [], // fetching all avaliable font weights
  display: 'swap',
});

const options: MeshGradientOptions = {
  colors: [
    "#0F2027",
    "#203A43",
    "#2C5364",
    "#4CA1AF"
  ]
};

export const metadata: Metadata = {
  title: {
    default: "Ismael | Full-Stack Developer",
    template: "%s | Ismael"
  },
  description:
    "Ismael – Full-Stack Developer especializado en React, Next.js y TypeScript. Descubre mi experiencia, proyectos y habilidades técnicas.",
  keywords: [
    "Ismael",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer"
  ],
  authors: [{ name: "Ismael" }],
  creator: "Ismael",
  openGraph: {
    title: "Ismael | Full-Stack Developer",
    description:
      "Portfolio profesional de Ismael. Experiencia, proyectos y stack tecnológico.",
    siteName: "Ismael Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismael | Full-Stack Developer",
    description:
      "Descubre el portfolio y CV online de Ismael, desarrollador Full-Stack.",
  },
};

export function MeshBg() {
  return (
    <MeshGradient
      className="-z-1 w-full absolute top-0"
      style={{ width: '100%', height: '100%' }}
      options={options}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${googleFontsTextFont.className}`}>
        {children}
        <MeshBg />
      </body>
    </html>
  );
}