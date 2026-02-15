import type { Metadata } from "next";

import { Noto_Sans } from "next/font/google";
const pcu = Noto_Sans({
 weight: ['400'],
 display: 'swap',
});


import "./globals.css";

export const metadata: Metadata = {
  title: "Ismael - CV web",
  description: "Curriculum Vitae web of Ismael. Click to see more!",
};

import { MeshGradient } from '@mesh-gradient/react'
import { type MeshGradientOptions } from '@mesh-gradient/core';
const options: MeshGradientOptions = {
  colors: [
    "#0F2027",
    "#203A43",
    "#2C5364",
    "#4CA1AF"
  ]
};

export function MeshBg() {
  return (
    <MeshGradient
      className="-z-10 w-full h-2000 absolute top-0"
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
      <body className={`${pcu.className}`}>
        {children}
        <MeshBg />
      </body>
    </html>
  );
}