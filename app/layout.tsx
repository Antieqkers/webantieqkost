import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ANTIEQ WISMA KOST - Hunian Premium untuk Generasi Muda Indonesia",
  description:
    "Temukan kos premium terbaik di Indonesia dengan fasilitas lengkap, lokasi strategis, dan harga terjangkau. ANTIEQ WISMA KOST - Where Dreams Meet Comfort.",
  keywords: "kos premium, wisma kost, hunian mahasiswa, kos jakarta, kos bandung, kos depok, sewa kos, antieq wisma",
  authors: [{ name: "ANTIEQ WISMA KOST Team" }],
  creator: "ANTIEQ WISMA KOST",
  publisher: "ANTIEQ WISMA KOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://antieqwismakost.id"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/id",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "ANTIEQ WISMA KOST - Hunian Premium untuk Generasi Muda",
    description: "Platform kos premium terpercaya dengan 5000+ pilihan hunian berkualitas di seluruh Indonesia",
    url: "https://antieqwismakost.id",
    siteName: "ANTIEQ WISMA KOST",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANTIEQ WISMA KOST - Premium Boarding House",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANTIEQ WISMA KOST - Hunian Premium untuk Generasi Muda",
    description: "Platform kos premium terpercaya dengan 5000+ pilihan hunian berkualitas",
    images: ["/twitter-image.jpg"],
    creator: "@antieqwismakost",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ANTIEQ WISMA KOST",
              url: "https://antieqwismakost.id",
              logo: "https://antieqwismakost.id/logo.png",
              description: "Platform kos premium terpercaya untuk generasi muda Indonesia",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
                addressRegion: "Jakarta",
                addressLocality: "Jakarta",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-812-3456-7890",
                contactType: "customer service",
              },
              sameAs: [
                "https://facebook.com/antieqwismakost",
                "https://instagram.com/antieqwismakost",
                "https://twitter.com/antieqwismakost",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
