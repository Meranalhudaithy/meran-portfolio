import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meran Alhudaithy | AI & Data Science Engineer",
  description:
    "Terminal-style portfolio of Meran Alhudaithy, showcasing AI, data science, computer vision, satellite imagery, and full-stack projects.",
  keywords: [
    "Meran Alhudaithy",
    "AI Engineer",
    "Data Science",
    "Computer Vision",
    "Saudi Arabia",
    "Portfolio",
  ],
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
