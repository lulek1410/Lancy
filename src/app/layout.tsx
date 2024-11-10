import AppLayout from "@/components/templates/AppLayout";
import type { Metadata } from "next";
import { Overpass } from "next/font/google";

import "./globals.css";

const overpass = Overpass({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overpass.className} h-screen antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
