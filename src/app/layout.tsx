import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open To The Public",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue">{children}</body>
    </html>
  );
}
