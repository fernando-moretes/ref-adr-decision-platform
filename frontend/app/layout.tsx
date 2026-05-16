import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADR Decision Platform — Fernando Azevedo",
  description:
    "Author, list and version Architecture Decision Records and lightweight RFCs with MADR, Nygard and Y-statement templates.",
  authors: [{ name: "Fernando Francisco Azevedo", url: "https://fernando.moretes.com" }],
  openGraph: {
    title: "ADR Decision Platform",
    description: "ADRs and RFCs with MADR, Nygard and Y-statements.",
    url: "https://adr.moretes.com",
    siteName: "ADR Decision Platform",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
