import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Hiago",
  description: "Next + Tailwind + ShadCn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-zinc-900 text-gray-300 dark flex flex-col h-full scroll-smooth`}>{children}</body>
    </html>
  );
}
