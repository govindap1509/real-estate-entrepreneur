import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Govinda Prasad | Real Estate Investor & Developer",
  description:
    "Real Estate Investor, Developer & Deal Strategist. Specializing in residential, land, and alternative assets. Partner, invest, or learn with me.",
  keywords: [
    "real estate",
    "investor",
    "developer",
    "property",
    "syndication",
    "joint venture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
