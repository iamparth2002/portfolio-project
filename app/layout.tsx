import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects",
  description: "created by Parth Gandhi",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}><Header />{children}</body>
      </html>
    </ClerkProvider>
  );
}
