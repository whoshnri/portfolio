import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/app/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henry Bassey | Founder, Quill Labs",
  description: "Building software from Lagos. Writing about it on the internet.",
  keywords: [
    "Henry Bassey",
    "Quill Labs",
    "Software Engineer",
    "Founder",
    "Lagos",
    "React",
    "Next.js"
  ],
  authors: [{ name: "Henry Bassey" }],
  creator: "Henry Bassey",
  publisher: "Henry Bassey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Henry Bassey | Founder, Quill Labs",
    description: "Building software from Lagos. Writing about it on the internet.",
    url: "https://henrybassey.me",
    siteName: "Henry Bassey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Bassey | Founder, Quill Labs",
    description: "Building software from Lagos. Writing about it on the internet.",
    creator: "@xyz_07hb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    <html lang="en" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="antialiased font-dmsans font-light text-(--craft-text) bg-(--craft-bg)">
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Nav />
          <div className="flex flex-col min-h-screen flex-1 w-full max-w-7xl mx-auto">
            <main className="flex-1 w-full flex flex-col items-center">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
