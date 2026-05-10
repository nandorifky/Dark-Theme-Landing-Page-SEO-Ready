import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import BackToTop from "../components/BackToTop";

export const metadata: Metadata = {
  title: "Service AC Kediri Panggilan | Cuci, Perbaikan & Pasang AC – Lintang AC",
  description: "Butuh service AC Kediri panggilan? Lintang AC melayani cuci AC, AC tidak dingin, bocor, isi freon, bongkar pasang & instalasi AC. Teknisi rapi, cepat, bergaransi. WhatsApp sekarang.",
  keywords: ["service ac kediri", "cuci ac kediri", "perbaikan ac kediri", "bongkar pasang ac kediri", "isi freon ac kediri", "teknisi ac kediri", "lintang ac kediri"],
  authors: [{ name: "Lintang AC Kediri" }],
  openGraph: {
    title: "Service AC Kediri Panggilan - Lintang AC",
    description: "Jasa service AC Kediri bergaransi. Cuci AC, perbaikan, isi freon, dan bongkar pasang.",
    url: "https://lintangackediri.com",
    siteName: "Lintang AC Kediri",
    images: [
      {
        url: "/images/after.webp",
        width: 1200,
        height: 630,
        alt: "Service AC Kediri - Lintang AC",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service AC Kediri Panggilan - Lintang AC",
    description: "Jasa service AC Kediri bergaransi. Cuci AC, perbaikan, isi freon, dan bongkar pasang.",
    images: ["/images/after.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <BackToTop />
      </body>
    </html>
  );
}
