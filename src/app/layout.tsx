import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TanstackProviders } from "@/provider/providers";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rambap",
  description: "Rambap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProviders>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </TanstackProviders>
      </body>
    </html>
  );
}
