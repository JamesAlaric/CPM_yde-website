import type { Metadata } from "next";
import { mts } from "./font";
import "./styles/globals.css";



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
    <html lang="fr"className={`${mts.variable}`} >
      <body>{children}</body>
    </html>
  );
}
