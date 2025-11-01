import type React from "react";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const _montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});
const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title:
    "Website Development in Amritsar | CodeKraft Studios | Starting ₹15,000",
  description:
    "Professional website design & development in Amritsar, Punjab. Affordable websites for local businesses. React, Next.js experts. Free consultation.",
  keywords:
    "website developer in Amritsar, web design Amritsar, website company Punjab, affordable website Amritsar, ecommerce website Amritsar, local web developer",
  openGraph: {
    title:
      "Website Development in Amritsar | CodeKraft Studios | Starting ₹15,000",
    description:
      "Professional website design & development in Amritsar, Punjab. Affordable websites for local businesses. React, Next.js experts.",
    type: "website",
  },
  icons: {
    icon: "/logo.ico",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CodeKraft Studios",
              description: "Professional Website Development & Design Services",
              url: "https://codekraftstudios.com",
              telephone: "+919876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Amritsar",
                addressLocality: "Amritsar",
                addressRegion: "Punjab",
                postalCode: "143001",
                addressCountry: "IN",
              },
              priceRange: "₹₹",
              areaServed: [
                "Amritsar",
                "Jalandhar",
                "Ludhiana",
                "Chandigarh",
                "Punjab",
              ],
              serviceType: [
                "Website Design",
                "Web Development",
                "E-commerce Solutions",
                "SEO Optimization",
              ],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`font-sans antialiased ${_montserrat.variable} ${_inter.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
