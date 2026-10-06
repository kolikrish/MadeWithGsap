import type { Metadata } from "next";

import localFont from "next/font/local";
import LenisSmoothScroll from "@/components/Home/SmoothScroll";

import "./globals.css";



const IBM = localFont({
  src: [
    { path: "./fonts/font1.woff2", weight: "400", style: "normal" },
  ],
  variable: '--font-body',
  display: "swap",
  fallback:["system-ui, sans-serif"],
})

const LayGrotesk = localFont ({
  src: [
      {
        path: "./fonts/LayGrotesk-Medium.woff", weight: "400", style: "normal"
      },
      {
        path: "./fonts/LayGrotesk-Black.woff", weight: "800", style: "bold"
      },
  ],
  variable: "--font-display",
  display: "swap",
  fallback:["system-ui, sans-serif"],
})


export const metadata: Metadata = {
  title: "ARCHETYPE — The Executive Masterclass Fellowship",
  description: "An invite-only 8-week executive masterclass for senior creative directors, design leaders, and tech founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <LenisSmoothScroll />
    <html lang="en">
      <body
        className={`${IBM.variable} ${LayGrotesk.variable} antialiased`}
        >
        {children}
      </body>
    </html>
        </>
  );
}
