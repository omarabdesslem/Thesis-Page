import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Power Grid Load Forecasting",
  description:
    "Weekly ARIMA forecasts of Swiss energy consumption based on Omar Abdesslem's 2025 Bachelor thesis.",
  metadataBase: new URL("https://energy-forecasts.netlify.app"),
  alternates: {
    canonical: "https://energy-forecasts.netlify.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "0Zy0ouZoCDzgwzeUcnZ5mdCxAOHJJWI8AjLvMedC",
  },
  openGraph: {
    title: "Swiss Power Grid Load Forecasting - Omar Abdesslem",
    description:
      "Interactive forecast visualizations based on Omar Abdesslem's 2025 Bachelor thesis.",
    url: "https://energy-forecasts.netlify.app",
    siteName: "Energy Forecasting by Omar Abdesslem",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
