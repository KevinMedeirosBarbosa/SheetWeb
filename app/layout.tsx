import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planilhas Web",
  description: "Planilhas Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div>
        <Logo />

        {children}
        </div>
      </body>
    </html>
  );
}
