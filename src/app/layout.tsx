import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Service AC Kediri Panggilan | Cuci, Perbaikan & Pasang AC – Lintang AC",
  description: "Butuh service AC Kediri panggilan? Lintang AC melayani cuci AC, AC tidak dingin, bocor, isi freon, bongkar pasang & instalasi AC. Teknisi rapi, cepat, bergaransi. WhatsApp sekarang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
