import type { Metadata } from "next";
import { mts } from "./frontend/font";
import "./frontend/styles/globals.css";
import Navbar from "./frontend/components/Navbar";
import Footer from "./frontend/components/Footer";

export const metadata: Metadata = {
  title: "CPM Yaoundé",
  description: "Site Officiel du CPM de Yaoundé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${mts.variable} h-full`}>
      <body className="h-full w-full">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
