import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atichat",
  description: "Developer & Gamer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={inter.className}>
        <body className="flex flex-col min-h-screen bg-background text-foreground">
          <SpeedInsights />
          <main className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
