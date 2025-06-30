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
    default: "The Skin Firm - Premium Skincare & Advanced Treatments in Pune",
    template: `%s | The Skin Firm`,
  },
  description: "The Skin Firm offers exceptional skincare services and advanced treatments including acne treatment, laser hair removal, anti-aging, and pigmentation solutions in Pune. Book your consultation today!",
  keywords: [
    "skincare Pune", "skin treatments Pune", "acne treatment Pune", "laser hair removal Pune", 
    "anti-aging treatment", "pigmentation treatment", "facial treatment", "dermatology clinic Pune", 
    "beauty clinic Pune", "skin whitening treatment", "botox Pune", "chemical peel treatment",
    "hydrafacial Pune", "microneedling", "stretch marks removal", "dark circle treatment"
  ],
  authors: [{ name: "The Skin Firm" }],
  creator: "The Skin Firm",
  publisher: "The Skin Firm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Skin Firm - Premium Skincare & Advanced Treatments in Pune",
    description: "Discover advanced skincare solutions at The Skin Firm Pune. Expert treatments for acne, pigmentation, anti-aging, laser hair removal & more. Book consultation now!",
    url: "https://theskinfirm.com",
    siteName: "The Skin Firm",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Skin Firm - Premium Skincare Treatments in Pune",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Skin Firm - Premium Skincare & Advanced Treatments in Pune",
    description: "Expert skincare treatments in Pune. Acne, pigmentation, anti-aging & laser solutions. Book your consultation today!",
    images: ["/twitter-image.png"],
    creator: "@theskinfirm",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
