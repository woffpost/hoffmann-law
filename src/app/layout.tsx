import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoffmann & Partners — Law Firm",
  description: "Demo landing page — Hoffmann & Partners — Law Firm",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
