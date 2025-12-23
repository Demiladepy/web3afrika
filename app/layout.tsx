import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web3Afrika Wrapped 2025",
  description: "Generate your Onchain Building Persona for the year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} antialiased bg-[#111111] text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
