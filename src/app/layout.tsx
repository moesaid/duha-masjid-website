import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


