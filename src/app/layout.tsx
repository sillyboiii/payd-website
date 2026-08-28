import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$PAYD — The World's First Community-Driven Digital Dollar",
  description:
    "$PAYD is a decentralized digital currency built for speed, transparency, and the community. Powered by Basestonk. Owned by you.",
  openGraph: {
    title: "$PAYD — The World's First Community-Driven Digital Dollar",
    description:
      "Decentralized, transparent, and community-owned. $PAYD is the future of digital payments.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
