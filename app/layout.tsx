import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Henry Bassey",
    template: "%s | Henry Bassey",
  },
  description: "Henry Bassey — Software Engineer crafting clean, performant and modern web experiences.",
  keywords: [
    "Henry Bassey",
    "Software Engineer",
    "Frontend Developer",
    "Fullstack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Henry Bassey" }],
  creator: "Henry Bassey",
  publisher: "Henry Bassey",
  openGraph: {
    title: "Henry Bassey — Software Engineer",
    description: "Software Engineer and AI enthusiast.",
    url: "https://henrybassey.me",
    siteName: "Henry Bassey",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Henry Bassey Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Bassey — Software Engineer",
    description: "Crafting clean, performant, and modern web experiences.",
    creator: "@xyz_07hb",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://henrybassey.me"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://henrybassey.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistMono.variable} antialiased py-9 px-3 `}
      >
          {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  );
}
