import type { Metadata } from "next";
import { Oswald, Ropa_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Oswald({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodyFont = Ropa_Sans({
  weight: "400",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Brandon VanFossen",
  description: "Personal portfolio site for Brandon VanFossen.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
