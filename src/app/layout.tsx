import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "[ASU] AsianUnity",
  description: "Whiteout Survival Toolkit powered by WOSControl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}