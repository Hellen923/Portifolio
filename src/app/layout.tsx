import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hellen | Portfolio",
  description: "Beautiful portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
