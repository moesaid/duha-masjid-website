import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duha Masjid Website Templates",
  description: "A collection of website templates for masjid websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

