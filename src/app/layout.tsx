import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import BackToTop from "../components/BackToTop";
import { generateMetadata, getCanonicalUrl, SEO_CONFIG } from "../config/seo-config";

export const metadata: Metadata = {
  ...generateMetadata(),
  alternates: {
    canonical: getCanonicalUrl(),
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
