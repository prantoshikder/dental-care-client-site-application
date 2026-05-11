import Footer from "@/src/components/partials/Footer";
import Navbar from "@/src/components/partials/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmileCare | Professional Dental Clinic",
  description:
    "Experience the best dental care at SmileCare Clinic. Expert dentists, modern technology, and a patient-first approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col font-sans`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
