import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyZoo Veterinary Clinic | Quality Pet Care You Can Trust",
  description:
    "MyZoo offers expert veterinary care for dogs, cats, and exotic pets. Trusted, compassionate service in a pet-friendly environment. Book an appointment today!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
