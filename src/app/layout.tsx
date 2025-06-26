import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theskinfirm.com"),
  title: {
    default: "dermaelegance- Premium Skincare and Treatments",
    template: `%s | The Skin Firm`,
  },
  description: "dermaeleganceoffers exceptional skincare services and advanced treatments to help you achieve radiant, healthy skin. Book your consultation today!",
  keywords: ["skincare", "skin treatments", "facial", "botox", "laser hair removal", "dermatology", "beauty clinic"],
  openGraph: {
    title: "dermaelegance- Premium Skincare and Treatments",
    description: "Discover a new level of skincare with The Skin Firm. We provide personalized treatments to enhance your natural beauty.",
    images: [
      {
        url: "/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "The Skin Firm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dermaelegance- Premium Skincare and Treatments",
    description: "Your journey to flawless skin starts here. Explore our services at The Skin Firm.",
    images: ["/twitter-image.png"], // Must be an absolute URL
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
