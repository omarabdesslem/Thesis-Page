import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Power Grid Load Forecasting - Omar Abdesslem",
  description:
    "Weekly ARIMA forecasts of Swiss energy consumption based on Omar Abdesslem's 2025 Bachelor thesis.",
  metadataBase: new URL("https://energy-forecast.netlify.app"),
  alternates: {
    canonical: "https://energy-forecast.netlify.app",
  },
  openGraph: {
    title: "Swiss Power Grid Load Forecasting - Omar Abdesslem",
    description:
      "Interactive forecast visualizations based on Omar Abdesslem's 2025 Bachelor thesis.",
    url: "https://energy-forecast.netlify.app",
    siteName: "Energy Forecasting by Omar Abdesslem",
    type: "website",
  },
  other: {
    "google-site-verification": "0Zy0ouZoCDzgwzeUcnZ5mdCxAOHJJWI8AjLvMedC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Info for indexing
      <head>
        <link rel="canonical" href="https://energy-forecast.netlify.app" />

        <meta
          name="google-site-verification"
          content="0Zy0ouZoCDzgwzeUcnZ5mdCxAOHJJWI8AjLvMedC"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              author: {
                "@type": "Person",
                name: "Omar Abdesslem",              },
              headline: "Swiss Power Grid Load Forecasting Using ARIMA",
              description:
                "This site presents weekly energy consumption forecasts in Switzerland using ARIMA models, developed as part of Omar Abdesslem's Bachelor thesis.",
              url: "https://energy-forecast.netlify.app/",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://energy-forecast.netlify.app/",
              },
              datePublished: "2025-06-01",
            }),
          }}
        />
      </head>
       */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
