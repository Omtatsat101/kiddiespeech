import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KiddieSpeech",
  description: "Interactive multilingual speech development for kids with parent controls and AI-guided character sessions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

