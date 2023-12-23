import type { Metadata } from "next";
import { Inter, Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "PT. Brilian Eka Saetama (BES)",
  description: "Developed by Dani_Dev^^",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ width: "100%" }}>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
