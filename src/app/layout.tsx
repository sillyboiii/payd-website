import type { Metadata } from "next";
import { Space_Grotesk, Baskervville, Space_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const baskerv = Baskervville({
  variable: "--font-baskerv",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Space_Mono({
  variable: "--font-mono-font",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PAYD — Holding Pays. Earn USDC.",
  description:
    "This is big. PAYD is the digital dollar that pays you back. Hold PAYD, earn USDC. Launching on Basestonk.",
  openGraph: {
    title: "PAYD — Holding Pays. Earn USDC.",
    description:
      "This is big. Hold PAYD → trading activity generates rewards → holders earn USDC. Launching on Basestonk.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${baskerv.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-blu text-cotton font-sans antialiased">
        {children}
      </body>
    </html>
  );
}