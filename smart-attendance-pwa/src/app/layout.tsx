import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Attendance PWA",
  description: "QR-based attendance system (PWA)",
  manifest: "/manifest.webmanifest",
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
