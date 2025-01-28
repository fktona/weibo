import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Inter } from "next/font/google";

const neue = localFont({
  src: "./fonts/NeueBold.otf",
  variable: "--font-neue",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: " 睿 (RUI)",
  description: "利用 Deepseek AI 创造完美微博博客方式",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${neue.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
