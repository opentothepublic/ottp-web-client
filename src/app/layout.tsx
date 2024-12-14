import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "../../styles/globals.css";
import { WagmiProviderClient } from "@/components/providers/WagmiProviderClient";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className={ibmPlexMono.className}>
        <WagmiProviderClient>{children}</WagmiProviderClient>
      </body>
    </html>
  );
}
