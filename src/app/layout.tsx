import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ConvexWrapper } from "@/convex";
const jsonLd = {
  "@context": "https://schema.org",
  "@id": "https://theskinfirm.in/",
  "@type": "LocalBusiness",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Pune",
    addressRegion: "IN",
    postalCode: "411060",
    streetAddress:
      "1st Floor, Plot no.1, Sainik Vihar Society Gate 1, opp Tribeca Highstreet, NIBM Post Office Road, Mohammmed Wadi",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    bestRating: "5",
    ratingCount: "168",
    ratingValue: "4.9",
  },
  description:
    "“The Skin Firm is a modern dermatology & skin care clinic in NIBM and Mohammed Wadi, Pune, offering advanced treatments including HydraFacial, skin laser treatment, laser hair removal, acne treatment & acne scar correction, pigmentation therapy, anti-aging solutions, and hair restoration. Rooted in ‘where skin meets science,’ we combine advanced medical technology with a holistic approach—addressing skin, nutrition, and lifestyle. Led by Dr. Karishma Singh, our empathetic team delivers personalized, results-driven care in a comforting environment. Discover radiant, confident skin with us.”",
  hasMap: "https://maps.google.com/maps?cid=3428824594272079360",
  image:
    "https://lh3.googleusercontent.com/GMnEAdN-kbwOnk8n3ponXa_JjgkEs7CHF4HpyBDafZHHs6IWf6Yc7GDQu3e6eeZm8j58F9r00q46ewYFPA=s0",
  makesOffer: [
    { "@type": "Offer", name: "Dermatologist" },
    { "@type": "Offer", name: "Skin care clinic" },
    { "@type": "Offer", name: "Doctor" },
    { "@type": "Offer", name: "Hair removal service" },
    { "@type": "Offer", name: "Laser hair removal service" },
  ],
  name: "The Skin Firm Laser Skin & Hair Clinic NIBM Mohammed Wadi",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      closes: "20:00:00",
      dayOfWeek: "SUNDAY",
      opens: "10:00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      closes: "20:00:00",
      dayOfWeek: "TUESDAY",
      opens: "10:00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      closes: "20:00:00",
      dayOfWeek: "WEDNESDAY",
      opens: "10:00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      closes: "20:00:00",
      dayOfWeek: "THURSDAY",
      opens: "10:00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      closes: "20:00:00",
      dayOfWeek: "FRIDAY",
      opens: "10:00:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      closes: "20:00:00",
      dayOfWeek: "SATURDAY",
      opens: "10:00:00",
    },
  ],
  sameAs: [
    "https://theskinfirm.in/",
    "https://uconnect.ae/theskinfirmuser",
    "https://www.justdial.com/Pune/Skin-Care-Clinics-in-Dorabjees-Royal-Heritage-Mall-Nibm-Kondhwa-Khurd/nct-10438800",
    "https://www.instagram.com/theskinfirm_official/?hl=en",
    "https://www.instagram.com/p/C4C6JLuLbk8/?hl=en",
    "https://www.facebook.com/theskinfirmpune/",
    "https://viesearch.com/?q=special&p=3020&s=h",
    "https://www.vevioz.com/theskinfirmuser",
    "https://uaeplusplus.com/OpenWebsite.aspx?url=theskinfirm.in&ssl=y",
    "https://www.trueen.com/business/listing/the-skin-firm/524563",
    "https://sites.suffolk.edu/connormulcahy/2014/03/31/pandoras-promise/",
    "https://siwansamachar.in/dr-karishma-singh-a-top-skin-specialist-in-pune-offers-the-latest-and-trending-skin-and-hair-treatments-at-the-skin-firm-clinic-with-flawless-results/",
    "https://republicnewsindia.com/dr-karishma-singh-a-top-skin-specialist-in-pune-offers-the-latest-and-trending-skin-and-hair-treatments-at-the-skin-firm-clinic-with-flawless-results/",
    "https://pulapuneladies.com/directory/the-skin-firm/",
    "https://www.palscity.com/theskinfirmuser",
    "https://www.muamat.com/classifieds/88/posts/1_Services/8_Health_Personal_Trainer/45252260_Discover_Excellence_in_Skincare_with_Dr_Karishma_Singh_Your_Lady_Skin_Specialist_in_NIBM_Pune.html",
    "http://ecuador.blog.malone.edu/2013/03/kailee-post_6.html",
    "https://www.freelistingindia.in/listings/the-skin-firm",
    "https://www.buzzbii.com/theskinfirmuser/likes",
    "https://tonnesen-wrenn-2.blogbright.net/nighttime-beauty-routines-to-stay-looking-youthful-1731662857/",
    "https://bizidex.com/en/the-skin-firm-gyms-405142",
    "https://english.bharatmirror.com/dr-karishma-singh-a-top-skin-specialist-in-pune-offers-the-latest-and-trending-skin-and-hair-treatments-at-the-skin-firm-clinic-with-flawless-results/",
    "https://bharathlisting.com/listings/maharashtra/pune/page/46",
    "https://www.articleted.com/article/848797/294006/The-Ultimate-Guide-to-Medi-Facial-Treatments-in-Pune--Unveiling-Radiant-Skin-with-The-Skin-Firm",
    "https://areporterlive.com/dr-karishma-singh-a-top-skin-specialist-in-pune-offers-the-latest-and-trending-skin-and-hair-treatments-at-the-skin-firm-clinic-with-flawless-results/",
    "https://www.anibookmark.com/user/skinfirm123.html",
    "https://addyp.com/listings/maharashtra/page/26",
  ],
  telephone: "+91 83086 69966",
  url: "https://theskinfirm.in/",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theskinfirm.in"),
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
    url: "https://theskinfirm.in",
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

    <ConvexWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-2D5D0GH7J3"
          ></Script>
          <Script id="google-analytics-script">
            {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-2D5D0GH7J3');
`}
          </Script>
          <Script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          />
          {children}
        </body>
      </html>
    </ConvexWrapper>
  );
}
