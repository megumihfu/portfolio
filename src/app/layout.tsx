import type { Metadata } from "next"
import { Outfit, Inter } from "next/font/google"
import "./globals.css"

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ines D | Software Engineer",
  description: "Software engineer building tech that matters. From social impact to large-scale systems.",
  metadataBase: new URL('https://nes-dev.org'),
  openGraph: {
    title: "Ines D | Software Engineer",
    description: "Building tech that matters. From social impact to large-scale systems.",
    url: "https://nes-dev.org",
    siteName: "Ines D Portfolio",
    images: [
      {
        url: "/thumb-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Ines D - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ines D | Software Engineer",
    description: "Building tech that matters. From social impact to large-scale systems.",
    images: ["/thumb-portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}