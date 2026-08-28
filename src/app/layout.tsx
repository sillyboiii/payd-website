import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PAYD — Holding Pays. Earn USDC.",
  description:
    "Hold PAYD and earn USDC rewards from trading activity. Simple, transparent, and community-owned. Launching on Basestonk.",
  openGraph: {
    title: "PAYD — Holding Pays. Earn USDC.",
    description:
      "Hold PAYD → trading activity generates rewards → holders receive USDC. Launching on Basestonk.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-white text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}