import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "./components/Beams";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add 300 for font-light
});

export const metadata: Metadata = {
  title: "Meet Henry!",
  description: "Web developer, code lover!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} antialiased py-9 px-3`}>
        <BackgroundBeams />

        {children}
      </body>
    </html>
  );
}
