import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { businessData } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${businessData.name} | ${businessData.address.area}, ${businessData.address.city}`,
    template: `%s | ${businessData.name}`,
  },
  description: businessData.about,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="overflow-x-hidden bg-gym-bg font-body text-gym-text antialiased">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <div className="overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
