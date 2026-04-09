'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Application for creating and managing notes",
  openGraph: {
    title: "NoteHub",
    description: "Application for creating and managing notes",
    url: "https://notehub.app",
    images: [{ url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient()); 

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" className={roboto.variable}>
        <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh", margin: 0 }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  );
}